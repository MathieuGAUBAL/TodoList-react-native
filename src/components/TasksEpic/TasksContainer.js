import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CounterContainer from '../CounterEpic/CounterContainer';
import FloatingButton from '../_shared/FloatingButton';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function TasksContainer(){
    const [tasks, setTasks] = useState([]);
   
    const onAddTask = (title) => {
        const newTask = { id:new Date().getTime(), title:title, completed:false }
        setTasks([newTask, ...tasks]);
    }

    const [isFormOpened, setIsFormOpened] = useState(false);


    const onDeleteTask = (id) => {
        let newTasks = [];
        tasks.find(task => {
            if(task.id !== id) newTasks.push(task)
        })
        setTasks(newTasks);
    }

    const onChangeStatus = (id) => {
        let newTasks = [];
        tasks.forEach(task => {
            if(task.id === id) newTasks.push({ id:id, title:task.title, completed: !task.completed })
            else newTasks.push(task)
        })
        setTasks(newTasks);
    }

    const onCountTasksCompleted = () => {
        let count = 0;
        tasks.forEach(task => { if(task.completed) count++ })
        return count;
    }

    const toggleForm = () => {
        setIsFormOpened(!isFormOpened);
    }

    return(
        <View style={styles.container}>
            { isFormOpened && <TaskForm onAddTask={onAddTask}/>}
            <CounterContainer tasksCreate={tasks.length} tasksCompleted={() => onCountTasksCompleted()}/>
            <TaskList tasks={tasks} onChangeStatus={onChangeStatus} onDeleteTask={onDeleteTask}/>
            <FloatingButton toggleForm={toggleForm} isFormOpened={isFormOpened}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        position:'relative'
    }
})

export default TasksContainer;