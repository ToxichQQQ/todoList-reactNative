import React from 'react'
import {View,StyleSheet,ActivityIndicator} from 'react-native'


export function Loader() {
    return(
        <View style={styles.loader}>
            <ActivityIndicator size='large' color="#0000ff" />
        </View>
    )
}

const styles = StyleSheet.create({
    loader:{
        flex:1,
        paddingTop:100,
        justifyContent:'center',
        alignItems:'center'
    }
})