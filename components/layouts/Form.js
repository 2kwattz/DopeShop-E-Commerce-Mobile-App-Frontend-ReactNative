import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Button, Image } from 'react-native';
// StyleSheets

// import globalStyles from '../styles/globalStyles';
import globalStyles from '../../styles/globalStyles';

import Colors from '../../styles/colors';
import fonts from '../../styles/fonts';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components

import Components from '../../styles/components';
import DottedLine from '../elements/dottedLine';
import editImage from '../../assets/Order/edit.png';
import downwardArrow from '../../assets/Order/arrow-down.png'
import Navigation from './Navigation';
const arrowSquareRight = require('../../assets/Order/arrow-square-right.png')

const calenderImage = require('../../assets/Order/calendar-tick.png')

const Form = ({toggleBottomSheet, togglePickupBtnPress, BtnIsPressed}) => {

    console.log(`From Form.js ${BtnIsPressed}`)

    let DeliveryMethod = BtnIsPressed?"Pickup":"Delivery"
    return (
        <React.Fragment>
               <View style={{elevation: 50}}>
            <View style={FormStyles.order}>
                <View style={FormStyles.orderHeader}>
                    <Text style={FormStyles.orderId}>
                        #2345567
                    </Text>

                    <View style={[FormStyles.greenBadge, {marginHorizontal: 7}]}>
                        <Image source={calenderImage} style={FormStyles.greenBadgeImage} />


                        <Text style={FormStyles.greenBadgeText}> Ready For Pickup </Text>
                    </View>
                </View>

                <DottedLine />

                {/* Order Details */}

                <View style={[FormStyles.orderDetails,{margin: 10}]}>
                    <View style={FormStyles.orderDetailsTextContainer}>
                        <Text style={FormStyles.orderDetailsTextKey}> Order Received On </Text>
                        <Text style={[FormStyles.orderDetailsTextValue,{marginRight: 7,}]}> 25th July 2024 </Text>
                    </View>
                    <View style={FormStyles.orderDetailsTextContainer}>
                        <Text style={FormStyles.orderDetailsTextKey}> Physician Name </Text>
                        <Text style={[FormStyles.orderDetailsTextValue,{marginRight: 7,}]}> Dr. Mark Paulo </Text>
                    </View>
                    <View style={FormStyles.orderDetailsTextContainer}>
                        <Text style={FormStyles.orderDetailsTextKey}> Practice Name </Text>
                        <Text style={[FormStyles.orderDetailsTextValue,{marginRight: 7,}]}> Stella Multispeciality </Text>
                    </View>

                </View>

                <DottedLine />
                {/* Order Type */}

                <View style={[FormStyles.orderDetails,{margin: 5, marginLeft: 10}]}>
                    <View style={FormStyles.orderDetailsTextContainer}>
                        <Text style={FormStyles.orderDetailsTextKey}> Order Type </Text>
                        <Text style={[FormStyles.orderDetailsTextBlue,{marginRight: 7,}]}> PAP New Start </Text>
                    </View>
                    
                </View>
                <DottedLine />

                {/* Product Details */}

                <View style={[FormStyles.orderDetails,{margin: 5, marginLeft: 10}]}>
                    <View style={FormStyles.orderDetailsTextContainer}>
                        <Text style={FormStyles.orderDetailsTextKey}> Product Details </Text>
                        <Text style={[FormStyles.orderDetailsTextValue,{marginRight: 7,}]}> 4 Items <Image source={arrowSquareRight} style={FormStyles.arrowSquareRightStyle}/> </Text>
                    </View>
                    
                </View>
                <DottedLine />

                {/* FInancial Responsibility */}

                <View style={[FormStyles.orderDetails,{margin: 5, marginLeft: 10}]}>
                    <View style={FormStyles.orderDetailsTextContainer}>
                        <Text style={FormStyles.orderDetailsTextKey}> Financial Responsibility </Text>
                        <Text style={[FormStyles.orderDetailsTextGreen,{marginRight: 7,}]}> Paid </Text>
                    </View>
                </View>

                <DottedLine />

                {/* Delivery Method */}

                <View style={[FormStyles.orderDetails,{margin: 5, marginLeft: 10}]}>
                    <TouchableOpacity style={FormStyles.orderDetailsTextContainer} onPress={toggleBottomSheet}>
                        <Text style={FormStyles.orderDetailsTextKey}> Delivery Method </Text>
                        <Text style={FormStyles.orderDetailsTextValue}> {DeliveryMethod} <Image source={editImage}/> </Text>
                    </TouchableOpacity>
                    
                </View>

                <DottedLine />
                <View style={[FormStyles.orderDetails,{margin: 5, marginLeft: 10}]}>
                    <View style={FormStyles.orderDetailsTextContainer}>
                        <Text style={FormStyles.orderDetailsTextKey}> Pickup Details </Text>
                        <Text style={FormStyles.orderDetailsTextGreen}> <Image source={downwardArrow}/> </Text>
                    </View>
            </View>
            </View>
            </View>

        </React.Fragment>
    )
}

const FormStyles = StyleSheet.create({

    // Order Container

    order: {
        borderWidth: 1,
        borderColor: Colors.greyMed,
        borderRadius: 20,
        marginHorizontal: 20,
        paddingBottom: 15,
        // backgroundColor: 'white',
       
    },

    // Section One : Order Header

    orderHeader: {
        padding: 15,
        flex: 0,
        justifyContent: 'space-between',
        flexDirection: 'row',
        // backgroundColor: 'white',
    },

    // Order Tracking Id

    orderId: {
        color: Colors.subheading,
        fontWeight: '700',
        fontSize: 17,
        marginLeft: 5,
    },

    greenBadge: {
        backgroundColor: Colors.greenSecondary,
        borderRadius: 60,
        padding: 5,
        paddingHorizontal: 8,
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
      
    },

    greenBadgeText: {
        color: Colors.greenPrimary,
        fontWeight: '700',
        marginRight: 4,
    },

    greenBadgeImage: {
        marginLeft: 4,
    },

    orderDetails: {
       width: '95%',
       
    },

    orderDetailsTextContainer:{
        flex: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 3,

    },

    orderDetailsTextKey:{
        color: Colors.subheading,
        marginLeft: 4,
    },

    orderDetailsTextValue:{
        marginRight: 4,
    },

    orderDetailsTextBlue:{
        color: Colors.bluePrimary
    },

    orderDetailsTextGreen:{
        color: Colors.greenPrimary,
        fontWeight: '500',
    },

    arrowSquareRightStyle:{
        objectFit: 'contain',
        height: 22,
        
    }



    







})

export default Form


