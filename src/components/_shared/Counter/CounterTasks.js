import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CounterTaskCompleted = ({numTasks, text}) => {
    return(
        <View>
            <Text style={styles.nb}>{numTasks}</Text>
            <Text style={styles.title}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    nb:{
        fontWeight:'bold',
    },
    title:{
        color:'grey',
        fontWeight:'bold'
    }
})

export default CounterTaskCompleted;