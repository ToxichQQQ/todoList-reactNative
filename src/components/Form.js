import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button,Alert} from 'react-native'

export function Form({onSubmit}) {
    const [inputValue,setInputValue] = useState('')

    const handlePress = () => {
        if (inputValue.trim()){
            onSubmit(inputValue)
            setInputValue('')
        }else{
            Alert.alert('Please enter todo title')
        }
    }

    return(
        <View style={styles.wrapper}>
        <TextInput autoCorrect={false} style={styles.input} placeholder='Enter your todo' onChangeText={text => setInputValue(text)} value={inputValue}/>
        <Button title='Add' style={styles.button} onPress={handlePress}/>
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