import { View, FlatList, StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { MealItem } from "../components/MealsList/MealItem";
import { useLayoutEffect } from "react";
import { MealsList } from "../components/MealsList/MealsList";
// import { useRoute } from '@react-navigation/native';

export const MealsOverviewScreen = ({ route, navigation }) => {
    // const route = useRoute();
    //params gives you object which is specified as second parameter to navigate method in parent screen
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter(
        (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
    );

    //When we want to run something parallaly with the execution of function and not after rendering full component, then we can use useLayoutEffect hook

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId)
            .title;
        navigation.setOptions({
            title: categoryTitle,
        });
    }, [catId, navigation]);

    return(<MealsList items={displayedMeals} />)

    
};