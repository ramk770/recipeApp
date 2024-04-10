import { createStackNavigator } from "@react-navigation/stack";
import categary from "../component/categary";
import Recipe  from "../component/Recipe";
import MainStack from "./StackNav";
import Home from "../component/Home";

const Stack = createStackNavigator();

const DataStack = () => {
    return ( 
        <Stack.Navigator screenOptions={{headerShown:false}}>
             <Stack.Screen name="feature" component={categary} /> 
             {/* <Stack.Screen name="upload" component={MainStack} /> */}
        </Stack.Navigator>
     );
}
 
export default DataStack;