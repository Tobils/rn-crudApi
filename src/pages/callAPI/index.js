import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'

const CallApi = () => {

    const [dataUser, setDataUser] = useState({
        avatar: "",
        email: "",
        first_name: "",
        last_name: ""
    })

    const getData = () => {
        fetch("https://reqres.in/api/users/2")
            .then(response => response.json())
            .then(json => {
                setDataUser(json.data)
            })
    }

   
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>This is Call API</Text>
            <View>
                <Button title="GET DATA" onPress={getData}/>
                <Text>Response GET DATA</Text>
                <Image source={{
                    uri: dataUser.avatar
                }} style={styles.avatar}/>
                <Text>{dataUser.avatar}</Text>
                <Text>{dataUser.email}</Text>
                <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
                <View style={styles.line}></View>        
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
  line: {height:2, backgroundColor:'black', marginVertical: 20},
  avatar: {
    alignItems: 'center',  
    width: 100, 
      height: 100,
      justifyContent: 'center'
    
    }
})

export default CallApi
