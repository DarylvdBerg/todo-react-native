import { View, StyleSheet, Text } from 'react-native';

export interface ITask {
    title: string,
    completed?: boolean,
}

interface ITaskProps {
    task: ITask
}

export function Task(props: ITaskProps) {
    const task = props.task;

    return (
        <View style={styles.task}>
            <Text style={styles.taskText}>
                {task.title}
            </Text>
        </View>
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
    taskText: {
        fontSize: 16
    }
})