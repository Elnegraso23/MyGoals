import React, { useState } from 'react';//Zendejas Mendez Obed Aaron 6BVPG
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goals, setGoals] = useState([]);

  function handleInputGoal(enteredText) {//Zendejas Mendez Obed Aaron 6BVPG
    console.log(enteredText);//Zendejas Mendez Obed Aaron 6BVPG
    setEnteredGoalText(enteredText);//Zendejas Mendez Obed Aaron 6BVPG
  }//Zendejas Mendez Obed Aaron 6BVPG

  function handleAddGoal() {//Zendejas Mendez Obed Aaron 6BVPG
    console.log(enteredGoalText);//Zendejas Mendez Obed Aaron 6BVPG
    setGoals([...goals, { text: enteredGoalText, key: Math.random().toString() }]);
  }

  return (//Zendejas Mendez Obed Aaron 6BVPG
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textinput}//Zendejas Mendez Obed Aaron 6BVPG
          placeholder="Your Goal!"//Zendejas Mendez Obed Aaron 6BVPG
          onChangeText={handleInputGoal}//Zendejas Mendez Obed Aaron 6BVPG
        />
        <Button
          title="Add Goal"//Zendejas Mendez Obed Aaron 6BVPG
          color="#A3FFD6"//Zendejas Mendez Obed Aaron 6BVPG
          onPress={handleAddGoal}//Zendejas Mendez Obed Aaron 6BVPG
        />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}//Zendejas Mendez Obed Aaron 6BVPG
          renderItem={({ item }) => (
            <View style={styles.goalsItem}>
              <Text style={styles.goalText}>{item.text}</Text>
            </View>
          )}
        />
      </View>
    </View>//Zendejas Mendez Obed Aaron 6BVPG
  );//Zendejas Mendez Obed Aaron 6BVPG
}//Zendejas Mendez Obed Aaron 6BVPG
//Zendejas Mendez Obed Aaron 6BVPG
const styles = StyleSheet.create({
  container: {//Zendejas Mendez Obed Aaron 6BVPG
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  inputContainer: {//Zendejas Mendez Obed Aaron 6BVPG
    flexDirection: 'row',//Zendejas Mendez Obed Aaron 6BVPG
    justifyContent: 'center',//Zendejas Mendez Obed Aaron 6BVPG
    alignItems: 'center',//Zendejas Mendez Obed Aaron 6BVPG
    marginBottom: 20,//Zendejas Mendez Obed Aaron 6BVPG
    borderBottomWidth: 1,//Zendejas Mendez Obed Aaron 6BVPG
    borderBottomColor: '#7BC9FF',//Zendejas Mendez Obed Aaron 6BVPG
  },
  textinput: {//Zendejas Mendez Obed Aaron 6BVPG
    borderWidth: 1,//Zendejas Mendez Obed Aaron 6BVPG
    borderColor: '#CCCCCC',//Zendejas Mendez Obed Aaron 6BVPG
    width: '80%',//Zendejas Mendez Obed Aaron 6BVPG
    marginRight: 3,//Zendejas Mendez Obed Aaron 6BVPG
    padding: 8,//Zendejas Mendez Obed Aaron 6BVPG
    borderRadius: 5,//Zendejas Mendez Obed Aaron 6BVPG
  },//Zendejas Mendez Obed Aaron 6BVPG
  goalsItem: { //Zendejas Mendez Obed Aaron 6BVPG
    margin: 0,//Zendejas Mendez Obed Aaron 6BVPG
    padding: 0,//Zendejas Mendez Obed Aaron 6BVPG
    borderRadius: 6,//Zendejas Mendez Obed Aaron 6BVPG
    backgroundColor: '#8576FF',//Zendejas Mendez Obed Aaron 6BVPG
    color: 'white',//Zendejas Mendez Obed Aaron 6BVPG
  },//Zendejas Mendez Obed Aaron 6BVPG
  goalText: {//Zendejas Mendez Obed Aaron 6BVPG
    color: 'white',//Zendejas Mendez Obed Aaron 6BVPG
  },//Zendejas Mendez Obed Aaron 6BVPG
});//Zendejas Mendez Obed Aaron 6BVPG
//Zendejas Mendez Obed Aaron 6BVPG