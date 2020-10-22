import 'react-native-gesture-handler';
import React from 'react';
import store from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Picture from './src/components/Picture';
import ImgItemContainer from './src/components/ImgItemContainer';
import {Provider} from 'react-redux';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={ImgItemContainer} />
          <Stack.Screen name="Picture" component={Picture} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
