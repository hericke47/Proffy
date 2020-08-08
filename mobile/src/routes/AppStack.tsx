import React from '../pages/GiveClasses/node_modules/react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return(
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing} />{/* navegação em pilha */}
        <Screen name="GiveClasses" component={GiveClasses} />{/* navegação em pilha */}
      </Navigator> 
    </NavigationContainer>
  );
}

export default AppStack;