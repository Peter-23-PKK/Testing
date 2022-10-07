import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Button, FlatList, TextInput, Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from '@expo/vector-icons/Ionicons';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: "below-icon",
        tabBarLabelStyle: {
          fontWeight: "bold",
          fontSize: 12,
          position: "absolute",
          top: "35%",
        },
        tabBarIconStyle: { display: "none" },
      }}
    >
      <Tab.Screen name="All" component={New} options={{ headerShown: false }} />
      <Tab.Screen name="Manager" component={FavoriteScreen} options={{ headerShown: false }} />
      <Tab.Screen name="BSE" component={FavoriteScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Leader" component={FavoriteScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
function New() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="All" component={Feed}
        options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
function Feed({ navigation }: any) {
  const Item = (props) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Details")}>
        <View style={{ padding: 10, marginVertical: 10, flexDirection: 'row', backgroundColor: '#fff', borderRadius: 15 }}
        >
          <View style={{ marginRight: 30 }}>
            <Image source={require('../assets/favicon.png')} style={{ height: 40, width: 40, marginBottom: 20 }} />
          </View>
          <View style={{ flexDirection: "column", marginVertical: 5 }}>
            <Text>
              {props.name}</Text>
            <Text style={{ fontSize: 12, opacity: 0.5 }}>
              {props.job}
            </Text>
          </View>
          <View style={{ marginLeft: 100, flexDirection: "row", alignSelf: 'center', alignContent: 'flex-end' }}>
            <Icon name="star" style={{ fontSize: 20, marginHorizontal: 10 }} />
            <Icon name="call" style={{ fontSize: 20, marginHorizontal: 10 }} />
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  let [items, setItem] = useState([
    { id: '1', name: 'John', job: "Leader" },
    { id: '2', name: 'Mary', job: "Manager" },
    { id: '3', name: 'Harry', job: "Manager" },
    { id: '4', name: 'Jackson', job: "Manager" },
  ]);
  return (
    <View style={{ margin: 10, padding: 20, backgroundColor: "#dae3dc" }}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <Item name={item.name} job={item.job}
          />
        )}
        keyExtractor={i => i.id}
      />
    </View>
  );
};

function DetailsScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is Detailed Screen</Text>
      <Button
        onPress={() => navigation.goBack()}
        title="Go back home"
      />
    </View>
  );
}
function FavoriteScreen({ navigation }: any) {
  return (
    <View style={{ margin: 10, padding: 20, backgroundColor: "#dae3dc" }}>
      <TouchableOpacity onPress={() => navigation.navigate("Details")}>
        <View style={{ padding: 10, marginVertical: 10, flexDirection: 'row', backgroundColor: '#fff', borderRadius: 15 }}
        >
          <View style={{ marginRight: 30 }}>
            <Image source={require('../assets/favicon.png')} style={{ height: 40, width: 40 }} />
          </View>
          <View style={{ flexDirection: "column", marginVertical: 5 }}>
            <Text>
              Mary</Text>
            <Text style={{ fontSize: 12, opacity: 0.5 }}>
              Manager
            </Text>
          </View>
          <View style={{ marginLeft: 100, flexDirection: "row", alignSelf: 'center', right:20 }}>
            <Icon name="star" style={{ fontSize: 20, marginHorizontal: 10, color: 'orange' }} />
            <Icon name="call" style={{ fontSize: 20, marginHorizontal: 10 }} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
export default function DrawSlide() {
  return (
    <NavigationContainer >
      <Drawer.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ffffff",
          },
          headerTitleStyle: {
            color: "#239dde",
            fontSize: 15
          },
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../assets/favicon.png')} style={{ width: 35, height: 35, }} />
            </View>
          ),
          headerTitle: "Seattle Consulting Myanmar",
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Favourite" component={FavoriteScreen} />
      </Drawer.Navigator>
    </NavigationContainer >
  )
}