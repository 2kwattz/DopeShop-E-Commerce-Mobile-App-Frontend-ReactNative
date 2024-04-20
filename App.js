import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Button} from 'react-native';

// StyleSheets

import globalStyles from './styles/globalStyles';
import Colors from './styles/colors';
import fonts from './styles/fonts';

// Components

import Header from './components/layouts/Header';
import Form from './components/layouts/Form';
import Section from './components/layouts/Section';

export default function App() {
  return (
    <Header/>
  );
}