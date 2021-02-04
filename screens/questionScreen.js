import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Modal, TextInput, FlatList} from 'react-native';
//import {Header} from 'react-native-elements';
import db from '../config';
import database from 'firebase';
import questionDb from '../localdb';

export default class Question extends React.Component{

    constructor(){
        super();
        this.state={
            isModalVisible: "false",
            allQuestions: ""
        }
    }

    render(){
        return(
            <View style={styles.container}>
               <TextInput
                placeholder={questionDb["question1"].text}
                style={styles.textInputStyle}
               />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D9D9D9"
    },
    textStyle: {
        fontSize: 30,
        fontFamily: "Bahnschrift",
        marginLeft: 10,
        marginTop: 45
    },
    buttonStyle: {
     width: 110,
     height: 45,
     marginTop: 20,
     marginLeft: 10,
     alignItems: "center",
     textAlign: "center",
     justifyContent: "center",
     borderRadius: 30,
     shadowColor: "#000",
     shadowOffset: {
        width: 0,
        height: 8,
     },
     shadowOpacity: 0.30,
     shadowRadius: 10.32,
     elevation: 16
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Bahnschrift"
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        borderWidth: 2,
        marginLeft: 700
    },
    textInputStyle:{
        width: 100,
        height: 30,
        borderWidth: 2,
        borderRadius: 5,
        fontSize: 20,
        fontFamily: "Bahnschrift"
    }
})