import DrawerSlide from "./components/drawerScreen";
import * as React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "./components/loginScreen";
import UserScreen from "./components/userScreen";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    //<DrawerSlide />
    //<LoginScreen />
    <UserScreen />

  );
}
