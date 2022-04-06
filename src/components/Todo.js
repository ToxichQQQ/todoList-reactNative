import React from 'react'
import {View, Text,StyleSheet} from 'react-native'


export function Todo({todo}) {
    return(
        <View style={styles.todo}>
            <Text style={styles.text}>{todo.title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    todo:{
        flexDirection:'row',
        alignItems:'center',
        padding:15,
        borderWidth:1,
        borderColor:'#eee',
        borderRadius:5,
    },
    text:{
        color:'#fff'
    }
})