import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import { useState } from "react";
import { GoalItem } from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: currentCourseGoals.length },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        {/* We can make the View scrollable with scrollView. But this is applicable only when list is having definite end. 
        When list is too long then lazily loading it would be better which we can achieve using FlatList which loads the list items only when user is about to see them.
        This will increase the performance */}
        {/* <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal, index) => {
            return (
              <View key={index} style={styles.goalItem}>
                <Text style={styles.goalText}>{goal}</Text>
              </View>
            );
          })}
        </ScrollView> */}
        <FlatList
          data={courseGoals}
          keyExtractor={(item, index) => item.id}
          renderItem={(itemData) => {
            return (
              <GoalItem text={itemData.item.text}/>
            );
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
});
