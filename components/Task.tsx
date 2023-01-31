import { View, StyleSheet, Text, Pressable } from 'react-native';
import { useEffect, useState } from 'react';

export interface ITask {
    title: string,
    completed?: boolean,
}

interface ITaskProps {
    task: ITask
}

export function Task(props: ITaskProps) {
    const task = props.task;
    const [completed, setCompleted] = useState(false);
    
    return (
        <Pressable onLongPress={() => setCompleted(true)}>
            <View style={completed ? styles.taskCompleted : styles.task}>
                <Text style={styles.taskText}>
                    {task.title}
                </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    task: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    taskCompleted: {
        backgroundColor: "grey",
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        opacity: 0.3  
    },
    taskText: {
        fontSize: 16
    }
})