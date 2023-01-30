import { SafeAreaView, StyleSheet, View, Text, FlatList, TextInput } from 'react-native';
import { CustomButton } from '@components/CustomButton';
import { ITask } from '@components/Task';
import { Task } from '@components/Task';
import { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState<Array<ITask>>([]);
  const [task, setTask] = useState('');

  const clickHandler = () => {
    setTasks([...tasks, {title: task, completed: false}])
    setTask(null);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}>
          Todo List
        </Text>
      </View>
      <View style={styles.tasks}>
      <FlatList data={tasks} renderItem={({item}) => <Task task={item}/>} />
      </View>
      <View style={styles.inputSection}>
        <CustomButton text="Click me!" clickHandler={clickHandler}/>
        <TextInput 
          style={styles.inputText} 
          placeholder="Write down a new todo!"
          onChangeText={text => setTask(text)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#e1e2e3',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
    paddingHorizontal: 20,
    marginBottom: 20
  },
  tasks: {
    paddingHorizontal: 20,
    marginBottom: 20,
    maxHeight: '85%'
  
  },
  inputSection: {
    paddingHorizontal: 20,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 20
  },
  inputText: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    width: 250,
  }
});
