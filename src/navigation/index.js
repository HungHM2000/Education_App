import React from "react";
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from "react-native-vector-icons/MaterialIcons";


const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}



function DetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}


const TabBottom = () => {
    return (

        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                    iconName = focused
                        ? "home"
                        : "home";
                } else if (route.name === "Profile") {
                    iconName = focused ? "supervised-user-circle" : "supervised-user-circle";
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
        })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "Home", headerShown: false }}

            />
            <Tab.Screen
                name="Profile"
                options={{ title: "Profile", headerShown: false }}
                component={DetailsScreen} />
        </Tab.Navigator>
    );
};

export default TabBottom