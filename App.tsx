import DrawerSlide from "./components/drawerScreen";
import * as React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <DrawerSlide />
  );
}
