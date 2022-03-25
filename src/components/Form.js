import React from 'react'
import {View, StyleSheet, TextInput, Button} from 'react-native'

export function Form() {
    return(
        <View style={styles.wrapper}>
        <TextInput style={styles.input}/>
        <Button title='Add'  style={styles.button}/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    input:{
        width:'70%',
        borderWidth:1,
        borderColor:'red',
        color:'#fff'
    },
    button:{
        textAlign:'center',
        color:'#fff',
        borderWidth:1,
        borderColor:'red'
    }
})