import { StyleSheet, View, Text, Pressable } from "react-native"
import './GoalItemStyles.css';

function GoalItem({ itemData, onDeleteItem, id }) {

  function deleteGoalHandeler() {
    onDeleteItem(id)
    console.log('Delete Goal handeler')
  }

  return (
    <Pressable onPress={deleteGoalHandeler}>
      <View style={styles.goalsItem} >
        <div class="container">
          <Text style={styles.goalText}>{itemData.item.text}</Text>
        </div>
      </View>
    </Pressable>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalsItem: {
    margin: 2,
    padding: 3,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    borderColor: '#7BC9FF',
    borderWidth: 3.5,
    color: 'white'
  },
  goalText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 500
  }
})