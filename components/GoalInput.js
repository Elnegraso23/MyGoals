import { useState } from "react"
import { View, TextInput, Button, StyleSheet } from "react-native"
import './GoalInputStyles.css';

function GoalInput({ onAddGoal }) {

  const [enteredGoalText, setEnteredGoalText] = useState('')

  function handleInputGoal(enteredText) {
    // console.log(enteredText)
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    onAddGoal(enteredGoalText)
    setEnteredGoalText('')
    console.log('addGoalHandler')
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Goal!"
        onChangeText={handleInputGoal}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
    fontWeight: 1000,
    borderBottomWidth: 1,
    borderBottomColor: '#7BC9FF'
  },
  textInput: {
    color: '#7BC9FF',
    fontSize: 15,
    fontWeight: 700,
    margin: 10,
    backgroundColor: 'transparent',
    width: '100%',
    boxSizing: 'border-box',
    paddingInline: '0.5em',
    paddingBlock: '0.7em',
    border: 'none',
    borderBottom: 'var(--border-height) solid var(--border-before-color)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
})
