// Import Dependencies
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addFood } from './actions/food';

// Create component
const FoodForm = () => {
  const [food, setFood] = useState('');
  const dispatch = useDispatch();

  const submitFood = food => dispatch(addFood(food));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redux</Text>
      <TextInput
        value={food}
        placeholder="Name"
        style={styles.foodInput}
        onChangeText={food => setFood(food)}
      />

      <TouchableOpacity
        onPress={() => {
          submitFood(food);
          setFood('');
        }}>
        <Text style={styles.submitText}>Submit Food</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('FoodList')}>
        <Text style={styles.foodListText}>Go to Food List</Text>
      </TouchableOpacity>
    </View>
  );
};

// Create Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
    marginBottom: 30,
    marginTop: 16,
    color: 'white',
  },
  foodInput: {
    fontSize: 24,
    marginBottom: 32,
    borderWidth: 1,
    padding: 12,
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  submitText: {
    fontSize: 22,
    color: '#5fc9f8',
  },
  foodListText: {
    fontSize: 22,
    color: 'white',
  },
});

// Export Component
export default FoodForm;
