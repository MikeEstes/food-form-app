// Import Dependencies
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFood } from './actions/food';

// Create component
const FoodList = () => {
  const dispatch = useDispatch();

  const deleteCurrent = key => dispatch(deleteFood(key));
  const foods = useSelector(state => state.foodReducer.foodList);

  return (
    <FlatList
      style={styles.listContainer}
      data={foods}
      keyExtractor={(item, index) => item.key.toString()}
      renderItem={data => (
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{data.item.name}</ListItem.Title>
          </ListItem.Content>
          <Icon
            name="trash"
            type="font-awesome"
            size={36}
            onPress={() => deleteCurrent(data.item.key)}
          />
        </ListItem>
      )}
    />
  );
};

// Create Stylesheet
const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#212121',
    padding: 16,
  },
});

// Export Component
export default FoodList;
