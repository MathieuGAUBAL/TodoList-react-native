import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';

const TaskTile = ({id, completed, title, onChangeStatus, onDeleteTask}) => {

    return(
        <TouchableOpacity onPress={ () => onChangeStatus(id)}>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    {
                        completed 
                        ? <IconAntDesign name="checkcircleo" size={30} color="#00C853" />
                        : <IconFeather name="circle" size={30} color="lightgrey"/>
                    }
                    <Text style={[styles.title, { color: completed ? 'lightgrey' : 'black'}]}>{title}</Text>
                </View>
                <TouchableOpacity>
                    <IconAntDesign onPress={() => onDeleteTask(id)} name="delete" size={30} color="#000"/>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    subContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    title:{
        marginLeft:30
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center",
        marginBottom:35
    }
})

export default TaskTile;