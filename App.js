import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/home/Home';
import Login from './src/pages/login/Login';
import Register from './src/pages/login/Register'
import Add from './src/pages/add/add'
import Edit from './src/pages/edit/edit';
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} 
        options={{ 
          headerShown: false
         }}/>
         <Stack.Screen name="Register" component={Register} 
        options={{ 
          headerShown: false
         }}/>
         <Stack.Screen name="Home" component={Home} 
        options={{ 
          headerShown: true,
          headerStyle: {
            backgroundColor: '#313131',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerBackVisible: false,
          headerTitle: 'Tasks'
         }}/>
         <Stack.Screen name="Add" component={Add} 
        options={{ 
          headerShown: true,
          headerStyle: {
            backgroundColor: '#313131',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitle: 'New Tasks'
         }}/>
         <Stack.Screen name="Edit" component={Edit} 
        options={{ 
          headerShown: true,
          headerStyle: {
            backgroundColor: '#313131',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitle: 'Edit Tasks'
         }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}