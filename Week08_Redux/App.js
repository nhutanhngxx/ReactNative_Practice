import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import React, { useState } from 'react';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import UserInfo from './components/UserInfo';

const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload),
      };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload.id ? action.payload.text : task
        ),
      };
    default:
      return state;
  }
};

console.log(initialState.tasks);

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

function MainApp() {
  const [indexEdit, setIndexEdit] = useState(null);
  const [taskInput, setTaskInput] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

const handleAddTask = () => {
  if (taskInput.trim()) {
    if (indexEdit !== null) {
      dispatch({
        type: 'EDIT_TASK',
        payload: { text: taskInput, id: indexEdit },
      });
      setTaskInput('');
      setIndexEdit(null);
    } else {
      dispatch({ type: 'ADD_TASK', payload: taskInput });
      setTaskInput('');
    }
  }
};

  const handleDeleteTask = (index) => {
    dispatch({ type: 'DELETE_TASK', payload: index });
  };

  const handleEditTask = (index) => {
    const newTask = tasks.find((e, id) => id === index);
    setTaskInput(newTask);
    setIndexEdit(index);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', padding: 15 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 30,
        }}>
        <AntDesign name="arrowleft" size={24} color="black" />
        <UserInfo />
      </View>

      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          borderWidth: 1,
          height: 50,
          borderRadius: 10,
          alignItems: 'center',
          gap: 10,
          paddingHorizontal: 20,
        }}>
        <AntDesign name="tag" size={24} color="black" />
        <TextInput
          placeholder="Enter your task..."
          style={{ height: 40, width: '100%', paddingLeft: 10 }}
          value={taskInput}
          onChangeText={setTaskInput}
        />
      </View>

      <ScrollView
        style={{ marginTop: 20, flex: 1, borderWidth: 1, borderColor: '#ccc' }}>
        {tasks.map((task, index) => (
          <View
            key={index}
            style={{
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <AntDesign name="checkcircle" size={24} color="black" />
              <Text>{task}</Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 20 }}>
              <AntDesign
                name="edit"
                size={24}
                color="black"
                onPress={() => handleEditTask(index)}
              />
              <AntDesign
                name="delete"
                size={24}
                color="red"
                onPress={() => handleDeleteTask(index)}
              />
            </View>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        onPress={handleAddTask}
        style={{
          backgroundColor: 'green',
          width: 50,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 25,
          marginTop: 10,
          alignSelf: 'center',
        }}>
        <Ionicons name="add" size={25} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
