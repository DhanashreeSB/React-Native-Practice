import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import { CategoryGridTile } from "../components/CategoryGridTile";

const renderCategoryItem = (itemData) => {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
};

export const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      // numColumns - to render the items in columns
      numColumns={2}
    />
  );
};
