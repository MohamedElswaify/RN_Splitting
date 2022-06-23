import React, { Suspense } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SuperApp from './apps/SuperApp/App'
const App1 = React.lazy(() => import('./apps/app1/App'));
const App2 = React.lazy(() => import('./apps/app2/App'));

const Stack = createNativeStackNavigator();

function App() { 
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SuperApp"
            component={SuperApp}
            options={{ title: 'SuperApp title' }}
          />
          <Stack.Screen
            name="App1"
            component={App1}
            options={{ title: 'App1 title' }}
          />
          <Stack.Screen
            name="App2"
            component={App2}
            options={{ title: 'App2 title' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Suspense>
  );
}

export default App;