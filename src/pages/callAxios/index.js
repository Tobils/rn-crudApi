import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'

const CallApiAxios = () => {

    const [dataUser, setDataUser] = useState({
        avatar: "",
        email: "",
        first_name: "",
        last_name: ""
    })


    const getData = () => {
        axios.get("https://reqres.in/api/users/2")
            .then(res => {
                setDataUser(res.data.data)
            })
            .catch(err => console.log(err))
    }

    
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>This is Call API</Text>
            <View>
                <Button title="GET DATA" onPress={getData}/>
                <Text>Response GET DATA</Text>
                <View style={styles.containerProfile}>
                    {dataUser.avatar.length > 0 && (
                        <Image source={{
                            uri: dataUser.avatar
                        }} style={styles.avatar}/>
                    )}
                   <View style={styles.desc}>
                       <Text style={{fontWeight: 'bold', fontSize: 22}}>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
                        <Text>{dataUser.email}</Text>
                   </View>
                </View>
                <View style={styles.line}></View>        
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center', marginBottom: 20},
  line: {height:2, backgroundColor:'black', marginVertical: 20},
  avatar: {
    borderRadius: 100,
    alignItems: 'center',  
    width: 100, 
      height: 100,
      justifyContent: 'center'
    },
    containerProfile: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'grey',
        margin: 12,
        padding: 16,
        borderRadius: 14,
        alignContent: 'center'
    },
    desc: {
        marginLeft: 24,
        alignContent: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    }
})

export default CallApiAxios
