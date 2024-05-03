import { useState } from "react"; // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
import { View, TextInput, Button, StyleSheet } from "react-native"; // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG

function GoalInput({ onAddGoal }) { // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
  const [enteredGoalText, setEnteredGoalText] = useState(""); // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG

  function handleInputGoal(enteredText) {
    console.log(enteredText); // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
    setEnteredGoalText(enteredText); // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
  }

  function addGoalHandler() {
    onAddGoal(enteredText); // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
    setEnteredGoalText(""); // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
    console.log("addGoalHandler"); // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
  }

  return (
    <View style={StyleSheet.inputContainer}> {/* ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG */}
      <TextInput
        style={StyleSheet.TextInput} // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
        placeholder="Your Goal" // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
        onChangeText={handleInputGoal} // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
        value={enteredGoalText} // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
      />

      <Button
        title="Add Goals" // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
        color={"#A3FFD6"} // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
        onPress={addGoalHandler} // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
      />
    </View>
  );
}

export default GoalInput; // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG

const styles = StyleSheet.create({ // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
  inputContainer: { // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
      flex: 1, // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
      flexDirection: 'row', // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
      justifyContent: 'space-between', // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
      alignItems: 'center', // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
      marginBottom: 20, // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
      borderBottomWidth: 1, // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
      borderBottomColor: '#279327' // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
  },
  textInput: {
      borderWidth: 1, // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
      borderColor: '#cccccc', // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
      width: '80%', // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
      marginRight: 3, // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
      padding: 8, // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
      borderRadius: 5, // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
  }
})