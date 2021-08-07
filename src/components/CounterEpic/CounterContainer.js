import React from 'react';
import { View, StyleSheet } from 'react-native';
import CounterTasks from '../_shared/Counter/CounterTasks';

const CounterContainer = ({tasksCreate, tasksCompleted}) => {   
    return(
        <View style={styles.container}>
            <CounterTasks numTasks={tasksCreate} text={tasksCreate > 1 ? 'Tâches créées' : 'Tâche créée'}/>
            <CounterTasks numTasks={tasksCompleted()} text={tasksCompleted() > 1 ? 'Tâches complétées' : 'Tâche complétée'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:55
    }
})

export default CounterContainer;
