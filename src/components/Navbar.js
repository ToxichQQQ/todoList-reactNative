import React from 'react';
import {View,Text,StyleSheet} from "react-native";



export function Navbar({title}) {
    return(
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar:{
        height: 70,
        borderWidth:1,
        borderColor:'#fff',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    text:{
        color:'#fff'
    }
})