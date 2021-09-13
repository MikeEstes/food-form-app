// Import Dependencies
import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';

// Create component
class FoodList extends Component {
  static navigationOptions = {
    title: 'Food list',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'green',
    },
  };

  render() {
    console.log(this.props.navigation.getParam('deleteFood'));
    return (
      <FlatList
        style={styles.listContainer}
        data={this.props.navigation.getParam('foodList')}
        keyExtractor={(item, index) > item.key.toString()}
        renderItem={data => (
          <ListItem
            title={data.item.name}
            bottomDivider
            rightIcon={
              <Icon
                name="delete"
                size={36}
                onPress={() =>
                  this.props.navigation.getParam('deleteFood')(data.item.key)
                }
              />
            }
          />
        )}
      />
    );
  }
}

// Create Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 64,
    marginBottom: 48,
  },
  foodInput: {
    fontSize: 32,
    marginBottom: 32,
    borderWidth: 1,
    padding: 8,
    width: '80%',
    borderRadius: 10,
  },
});

// Export Component
export default FoodList;
