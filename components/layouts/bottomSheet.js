import 'react-native-gesture-handler';
import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, FlatList, ScrollView, TextInput, TouchableOpacity, Image, Button, Alert, Pressable } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Colors from '../../styles/colors';
// import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import BlackBackdrop from './blackBackdrop';
import closeButtonImage from '../../assets/popup/closeButton.png'
import { Shadow } from 'react-native-shadow-2';

const truckImage = require('../../assets/popup/truck.png')
const pickupImage = require('../../assets/popup/pickup.png')

export default function BottomSheetComponent({ isBottomSheetOpen, toggleBottomSheet, togglePickupBtnPress, BtnIsPressed }) {

    const snapPoints = useMemo(() => ['20%', '40%', '100%'], [])
  

    const sheetRef = useRef < BottomSheet > (null);
    const data = [
        {
            itemNo: 1,
        },
        {
            itemNo: 2,
        },

        {
            itemNo: 3,
        },

        {
            itemNo: 4,
        },

        {
            itemNo: 5,
        },

        {
            itemNo: 6,
        },

        {
            itemNo: 7,
        },

        {
            itemNo: 8,
        },

        {
            itemNo: 9,
        },

        {
            itemNo: 10,
        },

        {
            itemNo: 11,
        },

        {
            itemNo: 12,
        },

        {
            itemNo: 13,
        },



    ];

    const handleSheetChange = useCallback((index) => {
        console.log("handleSheetChange", index);
    }, []);
    const handleSnapPress = useCallback((index) => {
        sheetRef.current?.snapToIndex(index);
    }, []);
    const handleClosePress = useCallback(() => {
        sheetRef.current?.close();
    }, []);

    const renderItem = useCallback(
        (item) => (
        

<View key={item.itemNo} style={[global.CalenderItem, global.CalenderActive]}>
                                    <Text style={global.CalenderHeadingActive}>
                                        Wed
                                    </Text>

                                    <Text style={global.CalenderTextActive}>
                                       {item.itemNo}
                                    </Text>


                                </View>
           
        ),
        [data]
    );
    return (
        <React.Fragment>


            <BottomSheet style={[global.BottomSheetStyle, global.boxShadowInner]} enableContentPanning={true} gestureEnabled={true} snapPoints={snapPoints} >
                <View style={global.boxShadowInner}>


                    {isBottomSheetOpen && <View style={global.overlay} />}

                    <TouchableOpacity style={global.closeButton} onPress={toggleBottomSheet}>
                        <Image source={closeButtonImage}></Image>
                    </TouchableOpacity>

                    <View style={global.BottomSheetInner}>

                        <Text style={global.heading}> Delivery Method </Text>
                        <Text style={global.subheading}> Choose how would you like to get your order </Text>

                        <View style={global.DeliveryMethod}>

                            <TouchableOpacity style={global.FlexLight} onPress={togglePickupBtnPress}>
                                <View style={BtnIsPressed?global.FInner:global.FInnerBlue}>
                                    <View style={global.FIHeading}>

                                        <Image source={pickupImage} />
                                        <Text style={BtnIsPressed?global.FInnerSubheading:global.FInnerSubheadingWhite}>
                                            Pickup
                                        </Text>
                                    </View>
                                    <Text style={BtnIsPressed?global.FDPara:global.FDParaWhite}> Pickup your order from our office location </Text>
                                </View>

                            </TouchableOpacity>

                            <View style={global.FlexDark}>
                                <View style={[global.FInner, global.FInnerDark]}>
                                    <View style={global.FIHeading}>
                                        <Image source={truckImage} style={global.truckImage} />
                                        <Text style={[global.FInnerSubheading, global.FInnerSubheadingDark]}>
                                            Delivery
                                        </Text>
                                    </View>
                                    <Text style={[global.FDPara, global.FDParaDark]}> We will deliver the order at your doorstep </Text>
                                </View>

                            </View>

                        </View>

                        {/* Section 2 */}

                        <View style={global.section2}>

                            <Text style={global.sectionHeading}> Schedule your Tele-Training </Text>
                            <Text style={[global.FDPara, global.SectionPara]}> Choose the  date and time for Tele-Training and walk-through of your device</Text>

                            <Text style={global.SectionSubheading}> Select Day, Jan  2024 </Text>



                            {/* <ScrollView horizontal contentContainerStyle={global.contentContainerStyle} enableContentPanning={true} showsHorizontalScrollIndicator={false}>


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
                                        11
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
                                        11
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
                                        11
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

                            </ScrollView> */}

                            <BottomSheetScrollView horizontal contentContainerStyle={global.scrollViewContent} showsHorizontalScrollIndicator={false}>
                                
                                <View style={global.CalenderFlex}>

                                    {data.map((item) => renderItem(item))}
                                </View>
                            


                            </BottomSheetScrollView>




                            <Text style={global.SectionSubheading}> Morning Set </Text>

                            <View style={global.TimeFlex}>
                                <View style={global.tfItems}>
                                    <Text style={global.tfText}>
                                        9:00
                                    </Text>
                                </View>

                                <View style={[global.tfItems, global.tfItemsActive]}>
                                    <Text style={global.tfTextActive}>
                                        10:00
                                    </Text>
                                </View>

                                <View style={global.tfItems}>
                                    <Text style={global.tfText}>
                                        11:00
                                    </Text>
                                </View>

                                <View style={global.tfItems}>
                                    <Text style={global.tfText}>

                                        12:00
                                    </Text>
                                </View>
                            </View>

                            <Text style={global.SectionSubheading}> Afternoon Set </Text>

                            <View style={global.TimeFlex}>
                                <View style={global.tfItems}>
                                    <Text style={global.tfText}>
                                        18:00
                                    </Text>
                                </View>

                                <View style={[global.tfItems, global.tfItemsActive]}>
                                    <Text style={global.tfTextActive}>
                                        19:00
                                    </Text>
                                </View>

                                <View style={global.tfItems}>
                                    <Text style={global.tfText}>
                                        20:00
                                    </Text>
                                </View>

                                <View style={global.tfItemsEmpty}>
                                    <Text style={global.tfText}>


                                    </Text>
                                </View>
                            </View>

                            <Text style={global.SectionSubheading}> Preferred Language </Text>


                        </View>
                    </View>






                </View >
            </BottomSheet>

        </React.Fragment>
    )



}

const global = StyleSheet.create({

    wrapper: {
        flex: 1,
        height: '100%',
        // position: 'relative',
        // top: 0,
        // lef: 0,
        // zIndex: 4,
    },

    closeButton: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 20,

    },

    BottomSheetStyle: {


        elevation: 10,
        borderRadius: 30,
        padding: 6,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 999,
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 14,
        // backgroundColor: 'black',
        // background color must be set
        zIndex: -10,
    },

    outerShadow: {
        paddingVertical: 8,
        paddingHorizontal: 12,
    },

    // boxShadow: {
    //     // shadowOffset: { width: 80, height: 10 },
    //     elevation: 24,
    //     backgroundColor: 'white',
    //     // backgroundColor: Colors.whitePrimary,
    //     // shadowColor: 'black',
    //     shadowOpacity: 1,
    //     // backgroundColor: Colors.whitePrimary,
    // },

    // boxShadowInner:{
    //     elevation: 1,
    //     backgroundColor: 'white',
    //     shadowOpacity: 1,
    //     position: 'absolute',
    //     top: -40,
    // },
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

    FInnerBlue:{
        backgroundColor: Colors.bluePrimary,
        // borderRadius: 20,
        paddingVertical: 20,
        padding: 15,
        width: '100%',
        flex: 0,
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 20,
    },

    FInnerSubheading: {
        fontWeight: '600',
        color: Colors.greyMD,
        fontSize: 16,
    },

    FInnerSubheadingWhite: {
        fontWeight: '600',
        color: Colors.whitePrimary,
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

    FDParaWhite:{
        fontSize: 13,
        marginLeft: -30,
        marginVertical: 5,
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
        width: '100%',
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
        flexGrow: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.whitePrimary,
        padding: 15,
        marginVertical: 15,
      
    },



    contentContainerStyle: {
        flex: 0,
        flexGrow: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.whitePrimary,
        padding: 15,
        marginVertical: 15,

    },



    CalenderItem: {
        width: 80,
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        marginHorizontal: 10,
        paddingVertical: 15,
        height: 100,
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

    tfItemsEmpty: {
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

    scrollViewContent:{
        padding: 50,
        height: 140,
    },

    // Button States



})


