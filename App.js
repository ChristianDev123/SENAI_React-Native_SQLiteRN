import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";
import DatabaseInit from "./database/dbInit";
import ActionsPage from "./pages/actions";
import TablePage from "./pages/table";


export default function App() {
  const Stack = createNativeStackNavigator();
  useEffect(()=>{
    new DatabaseInit();
  },[]);
  return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="table" component={TablePage}/>
            <Stack.Screen name="actionspage" component={ActionsPage} />
          </Stack.Navigator>
        </NavigationContainer>
  );
}
