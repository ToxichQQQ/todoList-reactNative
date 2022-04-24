import React from 'react'
import {Text, View,StyleSheet,Button} from "react-native";
import {THEME} from "../theme";



export function ErrorMessage({error,loadAgain}) {
    return <View style={styles.container}><Text style={styles.text}>{error}</Text>
    <Button onPress={loadAgain} title='Try again'/>
    </View>
}



const styles = StyleSheet.create({
    container:{
    flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        textAlign:'center',
        color:THEME.WHITE_TEXT,
        paddingBottom:20
    }

})