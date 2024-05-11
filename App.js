import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Login, Signup, Welcome, Home, Profile, Map} from "./screens";
import { View, Text, Platform } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: "#003C43",
  }
}

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Entypo name="home" size={24} color={focused ? "white" : undefined} />
                <Text style={{ fontSize: 12, color: '#E3FEF7' }}>HOME</Text>
              </View>
            )
          }}
        />
        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ 
                alignItems: 'center', 
                justifyContent: 'center', 
                top: Platform.OS == 'ios' ? -10 : -20,
                width: Platform.OS == 'ios' ? 50 : 60,
                height: Platform.OS == 'ios' ? 50 : 60,
                borderRadius: Platform.OS == 'ios' ? 10 : 10,
                backgroundColor: focused ? '#003C43s' : '#135D66'
                }}>
                <Entypo name="map" size={24} color={focused ? "white" : undefined} />
                <Text style={{ fontSize: 12, color: '#E3FEF7' }}>Map</Text>
              </View>
            )
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesome5 name="user" size={24} color={focused ? "white" : undefined} />
                <Text style={{ fontSize: 12, color: '#E3FEF7' }}>PROFILE</Text>
              </View>
            )
          }}
        />

        
      </Tab.Navigator>
    </NavigationContainer>
  );
}