import { createStackNavigator } from "@react-navigation/stack";
import Home from "../component/Home";
import Details from "../component/Details"
import CreateRecipe from "../component/CreateRecipe";
import Alldata from "../component/Alldata";
import Vegetarian from "../component/Vegetarian";
import NonVeg from "../component/NonVeg";

const Stack = createStackNavigator();

const MainStack = () => {
    return ( 
        <Stack.Navigator screenOptions={{headerShown:false}}>
             <Stack.Screen name="value" component={ Home} /> 
            <Stack.Screen name="detail" component={Details} />
            <Stack.Screen name="recipe" component={CreateRecipe} />
            <Stack.Screen name="show" component={Alldata} />
            <Stack.Screen name="veg" component={Vegetarian} /> 
            <Stack.Screen name="nonveg" component={NonVeg} />
        </Stack.Navigator>
     );
}
 
export default MainStack;
