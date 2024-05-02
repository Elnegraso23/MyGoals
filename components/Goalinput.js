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