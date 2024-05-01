import 'react-native-gesture-handler';
import React, { useEffect, useState, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, ScrollView, TextInput, TouchableOpacity, Image, Button, Alert } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import { ColorMatrixFilter } from 'react-native-color-matrix-image-filters';

import Svg, { Image as SvgImage, Filter, feColorMatrix } from 'react-native-svg';

// import { initializeDatabase, insertTask, fetchTasks, deleteTask } from './database/database';

import { NavigationContainer } from '@react-navigation/native';
// import { initializeDatabase } from './database/database';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomSheetComponent from './components/layouts/bottomSheet';
import DashboardScreen from './screens/DashboardScreen'
import ToDoNavbar from './components/layouts/todo';
import ToDoContainer from './components/layouts/todoContainer';
import ToDoList from './components/layouts/todoList';
import { Platform } from 'react-native';



import CustomDrawerContent from './components/elements/drawer';


// function togglePickupBtnPress(){
//         setBtnIsPressed(!BtnIsPressed)
//         console.log(BtnIsPressed)
// };


const Drawer = createDrawerNavigator()

// StyleSheets

import globalStyles from './styles/globalStyles';
import Colors from './styles/colors';
import fonts from './styles/fonts';

// Components

import Header from './components/layouts/Header';
import Form from './components/layouts/Form';
import Section from './components/layouts/Section';
import Navigation from './components/layouts/Navigation';
import Shipped from './components/layouts/Shipped';
import DrawerContent from './components/layouts/drawerContent';
import State from './components/layouts/statesEg';

const truckImage = require('./assets/popup/truck.png')
const pickupImage = require('./assets/popup/pickup.png')
// import { invert } from 'react-native-image-filter-kit'

// function toggleBottomSheet() {
//   setIsBottomSheetOpen(!isBottomSheetOpen)


// }


export default function App() {


  

  const [Feedback, editFeedback] = useState('')
  const [activeTab, setActiveTab] = useState('Form');
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const [BtnIsPressed, setBtnIsPressed] = useState(false);

  function togglePickupBtnPress() {
    setBtnIsPressed(!BtnIsPressed)
    console.log(BtnIsPressed)
  };

  const toggleBottomSheet = () => {
    return setIsBottomSheetOpen(!isBottomSheetOpen);
  };


  const snapPoints = useMemo(() => ['20%', '40%', '100%'], [])
  // const handleToggleDrawer = () => {
  //     setIsDrawerVisible(!isDrawerVisible);
  // };

  const renderTab = () => {
    switch (activeTab) {
      case 'Form':
        { isDrawerVisible && <drawerContent onClose={() => setIsDrawerVisible(false)} /> }
        return <Form />;
      case 'Shipped':
        return <Shipped />
      default:
        return null;
    }
  };

  return (

    <React.Fragment>


      <GestureHandlerRootView style={[global.wrapper]}>

        

        <Header />

        <Form toggleBottomSheet={toggleBottomSheet} BtnIsPressed={BtnIsPressed} togglePickupBtnPress={togglePickupBtnPress} />

        <Navigation />
{/* 
        <ScrollView horizontal={true} contentContainerStyle={global.contentContainerStyle} showsHorizontalScrollIndicator={false}>



                                    <View style={[global.CalenderItem, global.CalenderActive]}>
                                        <Text style={global.CalenderHeadingActive}>
                                            Wed
                                        </Text>

                                        <Text style={global.CalenderTextActive}>
                                            10
                                        </Text>

                                    </View>
                                    <View style={[global.CalenderItem, global.CalenderActive]}>
                                        <Text style={global.CalenderHeadingActive}>
                                            Wed
                                        </Text>

                                        <Text style={global.CalenderTextActive}>
                                            11
                                        </Text>

                                    </View>
                                    <View style={[global.CalenderItem, global.CalenderActive]}>
                                        <Text style={global.CalenderHeadingActive}>
                                            Wed
                                        </Text>

                                        <Text style={global.CalenderTextActive}>
                                            12
                                        </Text>

                                    </View>
                                    <View style={[global.CalenderItem, global.CalenderActive]}>
                                        <Text style={global.CalenderHeadingActive}>
                                            Wed
                                        </Text>

                                        <Text style={global.CalenderTextActive}>
                                            13
                                        </Text>

                                    </View>
                                    <View style={[global.CalenderItem, global.CalenderActive]}>
                                        <Text style={global.CalenderHeadingActive}>
                                            Wed
                                        </Text>

                                        <Text style={global.CalenderTextActive}>
                                            14
                                        </Text>

                                    </View>
                                    <View style={[global.CalenderItem, global.CalenderActive]}>
                                        <Text style={global.CalenderHeadingActive}>
                                            Wed
                                        </Text>

                                        <Text style={global.CalenderTextActive}>
                                            15
                                        </Text>

                                    </View>

                                    <View style={[global.CalenderItem, global.CalenderActive]}>
                                        <Text style={global.CalenderHeadingActive}>
                                            Wed
                                        </Text>

                                        <Text style={global.CalenderTextActive}>
                                            16
                                        </Text>

                                    </View>

                                    <View style={[global.CalenderItem, global.CalenderGeneral]}>
                                        <Text style={global.CalenderHeading}>
                                            Thu
                                        </Text>

                                        <Text style={global.CalenderText}>
                                            17
                                        </Text>
                                    </View>

                                    <View style={[global.CalenderItem, global.CalenderGeneral]}>
                                        <Text style={global.CalenderHeading}>
                                            Fri
                                        </Text>

                                        <Text style={global.CalenderText}>
                                            12
                                        </Text>
                                    </View>

                                    <View style={[global.CalenderItem, global.CalenderInactive]}>
                                        <Text style={global.CalenderHeadingInactive}>
                                            Wed
                                        </Text>

                                        <Text style={global.CalenderTextInactive}>
                                            10
                                        </Text>
                                    </View>
                                    <View style={[global.CalenderItem, global.CalenderInactive]}>
                                        <Text style={global.CalenderHeadingInactive}>
                                            Wed
                                        </Text>

                                        <Text style={global.CalenderTextInactive}>
                                            10
                                        </Text>
                                    </View>
                                    <View style={[global.CalenderItem, global.CalenderInactive]}>
                                        <Text style={global.CalenderHeadingInactive}>
                                            Wed
                                        </Text>

                                        <Text style={global.CalenderTextInactive}>
                                            10
                                        </Text>
                                    </View>
                                    <View style={[global.CalenderItem, global.CalenderInactive]}>
                                        <Text style={global.CalenderHeadingInactive}>
                                            Wed
                                        </Text>

                                        <Text style={global.CalenderTextInactive}>
                                            10
                                        </Text>
                                    </View>


                                </ScrollView> */}

        {isBottomSheetOpen && <View style={global.overlay} />}
        {
          isBottomSheetOpen ? <BottomSheetComponent style={[global.boxShadow, { backgroundColor: 'black' }]} isBottomSheetOpen={isBottomSheetOpen} toggleBottomSheet={toggleBottomSheet} BtnIsPressed={BtnIsPressed} togglePickupBtnPress={togglePickupBtnPress} /> : null
        }






      </GestureHandlerRootView>
      {/* <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
          drawerStyle={{ width: 200 }}
          drawerType={'slide'}
          overlayColor='transparent'
          initialRouteName='Dashboard'
          edgeWidth={0}
          drawerPosition="right"
        >
          <Drawer.Screen name='Dashboard' component={DashboardScreen}
            options={{ title: '', headerShown: false }}
          />
        </Drawer.Navigator>
      </NavigationContainer> */}




    </React.Fragment >
  );
}


const global = StyleSheet.create({

  wrapper: {
    flex: 1,
    height: '100%',
    position: 'relative',
    top: 0,
    lef: 0,
    zIndex: 4,
  },

  BottomSheetStyle: {
    borderRadius: 30,
    padding: 6,

  },

  BottomSheetInner: {
    padding: 25,
    marginVertical: -20,
  },

  heading: {
    fontSize: 20,
    fontWeight: '600',
  },

  subheading: {
    color: Colors.blackPrimary,
    fontSize: 14,
    marginVertical: 8,
  },

  FInner: {
    padding: 15,
    width: '100%',
    flex: 0,
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 20,

  },
  FInnerSubheading: {
    fontWeight: '600',
    color: Colors.greyMD,
    fontSize: 16,
  },

  FlexLight: {
    flex: 0,
    width: '100%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.greyMed,
    borderRadius: 20,
    marginVertical: 20,
  },

  FlexDark: {
    flex: 0,
    width: '100%',
    flexDirection: 'row',
    borderRadius: 20,
  },


  truckImage: {
    marginLeft: 15,
    marginRight: 7,
  },

  FDPara: {
    fontSize: 13,
    color: Colors.blackPrimary,
    marginLeft: -30,
    marginVertical: 5,
  },

  FDParaDark: {
    color: Colors.whitePrimary,
  },

  FIHeading: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },

  FInnerDark: {
    backgroundColor: Colors.bluePrimary,
    borderRadius: 20,
    paddingVertical: 20,

  },

  FInnerSubheadingDark: {
    color: Colors.whitePrimary,

  },

  sectionHeading: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
  },

  SectionSubheading: {
    fontSize: 16,
    fontWeight: '700',

  },

  section2: {
    marginVertical: 20,
    marginHorizontal: 5,
  },

  SectionPara: {
    paddingHorizontal: 36,
    paddingVertical: 10,
    lineHeight: 20,
    marginBottom: 20,

    color: Colors.heading,
  },

  // Calender Section

  CalenderFlex: {
    flex: 0,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',

    padding: 15,
    marginVertical: 15,

  },

  CalenderItem: {
    width: '23%',
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    marginHorizontal: 10,
    paddingVertical: 15,
  },

  CalenderActive: {
    backgroundColor: Colors.bluePrimary,
    borderRadius: 20,
    padding: 7,
  },

  CalenderGeneral: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.greyMed,
  },

  CalenderHeading: {
    textAlign: 'center',
  },

  CalenderText: {
    textAlign: 'center',
    fontWeight: '800',
  },

  CalenderInactive: {
    backgroundColor: '#E5E7EB',
    borderRadius: 20,
  },

  CalenderHeadingInactive: {
    color: Colors.greyPrimary,
    textAlign: 'center',
  },
  boxShadow: {

    backgroundColor: 'white',
    elevation: 12,
    shadowOpacity: 1,
    shadowColor: 'black',
    shadowColor: '#243b6b',
    shadowOpacity: 1,
    // height: '100%',
    backgroundColor: 'black',
    // background color must be set

  },

  CalenderHeadingActive: {
    color: Colors.whitePrimary,
    textAlign: 'center',
  },

  CalenderTextInactive: {
    color: Colors.greyPrimary,
    textAlign: 'center',
  },

  CalenderTextActive: {
    color: Colors.whitePrimary,
    textAlign: 'center',
    fontWeight: '800',

  },

  // Time Set

  TimeFlex: {
    flex: 0,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 15,
    paddingHorizontal: 0,
    marginVertical: 15,
  },

  tfItems: {
    borderWidth: 2,
    borderColor: Colors.greySecondary,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    width: '22%',
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',

  },

  tfItemsActive: {
    backgroundColor: Colors.bluePrimary,
  },

  tfTextActive: {
    color: Colors.whitePrimary,
  },




  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // Transparent black color rgba(0, 0, 0, 0.5)
    zIndex: 0, // Ensure the overlay is above other content
  },







})