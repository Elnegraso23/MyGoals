import { StyleSheet, View, Text, Pressable } from "react-native"; // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG

function GolItem({ itemData, OnDeLeteItem }) {
  return (
    <Pressable>
      <View style={style.goalItem}>
        <Text style={style.goalText}>{itemData.item}</Text>
      </View>
    </Pressable>
  );
}

export default GolItem; // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG

const style = StyleSheet.create({
  goalItem: {
    margin: 8, // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
    padding: 8, // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
    borderRadius: 6, // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
    backgroundColor: "#FF6B4C", // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
    color: "black", // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
  },
  goalText: {
    color: "white", // ESTE CODIGO ES ROBADO DE ZENDEJAS MENDEZ 6BVPG
  },
});