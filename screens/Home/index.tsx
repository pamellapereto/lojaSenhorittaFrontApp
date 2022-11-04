import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ScrollView, View } from "react-native";
import Content from "./components/Content";
import Header from "./components/Header";
import Panel from "./components/Panel";
import Detalhes from "../Detalhes";
import Carrinho from "../Carrinho";

const Stack = createNativeStackNavigator();

export default function Home() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Inicio({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Header tela={navigation} />
        <Panel />
        <Content tela={navigation} />
      </ScrollView>
    </View>
  );
}
