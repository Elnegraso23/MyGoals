import { useState } from "react"
import { View, TextInput, Button, StyleSheet} from "react-native"

function GoalInput({onAddGoal}){

    const [enterdGoalText, setEnteredGoalText] = useState('')

    function handleInputGoal(enteredText){
        //console.log(enteredText)
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler(){
        onAddGoal(enterdGoalText)
        setEnteredGoalText('')
        console.log('addGoalHandler')
    }

    return(
        <View style={StyleSheet.inputContainer}>
            <TextInput 
            style={StyleSheet.textInput}
            placeholder='Your Goal'
            onChangeText={handleInputGoal}
            value={enterdGoalText} />
            
                <Button 
                title="Add Goal"
                color={'#FC4100'}
                onPress={addGoalHandler} />
        </View>
    )
}

export default GoalInput

const styles = stylesSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#7BC9FF'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '80%',
        marginRigth: 3,
        padding: 8,
        borderRadius: 3,
    }
})