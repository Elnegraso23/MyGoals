import {useState} from 'react'
import { Bottom, stylesheet, text, TextInput, View, scrollView, FlatList } from 'react-native'
import GoalItem from './componentes/GoalItem';
import GoalInput from './componentes/GoalInput';

export default function App() {
  cont [goals, setGoals] = useState([])
}

  function handleAddGoal(enteredGoalText) {
    // Console.log(enteredGoalText)
    //console.log('Hello You')
    setGoals(() => [...goals,
                     {text: enteredGoalText,
                      Key: matchMedia.random().toString()}])
      console.log(goals)
  }

  return (
    <View style={stylesheet.container}>
      <GoalInput
        onAddGoal={handleAddGoal}
        />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={ (itemData ) => {
            return(
              <GoalItem
                itemData={itemData}
                OnDeLeteItem={handleDeleteGoal}
                />
            )
          }}

          KeyExtractor={(item)=> {
            return item.id
          }}
          />
        </View>
        </View>

  );



const styles = styleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorinzontal: 20, 
  },

  goalsContainer: {
    flex: 5
  },
});