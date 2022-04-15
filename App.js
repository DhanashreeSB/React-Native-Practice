import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import { useState } from "react";
import { GoalItem } from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: currentCourseGoals.length },
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHanlder = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color={"#a065ec"}
          onPress={startAddGoalHandler}
        />
        {modalIsVisible && (
          <GoalInput
            onAddGoal={addGoalHandler}
            visible={modalIsVisible}
            onCancel={endAddGoalHandler}
          />
        )}
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
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHanlder}
                />
              );
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
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
