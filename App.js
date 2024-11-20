import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Calculadora from "./src/screens/Calculadora.js";
import Drawer from "./src/screens/Drawer.js";
import icon from "react-native-vector-icons/MaterialIcons.js";
import NovaPesquisa from "./src/screens/NovaPesquisa.js";
import ModificarPesquisa from "./src/screens/ModificarPesquisa.js";
import Home from "./src/screens/Home.js";

const Stack = createStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Drawer" screenOptions={{ headerShown: false, headerTintColor: 'blue', headerTitleStyle:{color:"white"} , headerStyle: {backgroundColor: "#2B1D62"}}}>
      <Stack.Screen name="Drawer" component={Drawer} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
