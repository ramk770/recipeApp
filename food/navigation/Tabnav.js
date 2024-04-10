import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainStack from "./StackNav";
import DataStack from "./StackData";
import CreateRecipe from "../component/CreateRecipe";
import Serach from "../component/Serach";
import { FontAwesome } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const TabNav = () => {
    return ( 
       <Tab.Navigator screenOptions={{headerShown:false,
          tabBarActiveTintColor:'red'
       }}>
        <Tab.Screen name="home" component={MainStack} 
        options={{
                    tabBarLabel :'home',
                     tabBarIcon: ({size,color}) =>(
                     <FontAwesome name="home" size={25} color={'green'} />
                     ),

                }}
        
        />
        
        <Tab.Screen name="recipe"  component={CreateRecipe} 
           options={{
                    tabBarLabel :'Favorites',
                     tabBarIcon: ({size,color}) =>(
                     <FontAwesome name="heart" size={25} color={'green'} />
                     ),

                }}
        />
        <Tab.Screen name="categary" component={DataStack} 
            options={{
                    tabBarLabel :'Create',
                     tabBarIcon: ({size,color}) =>(
                     <FontAwesome name="upload" size={25} color={'green'} />
                     ),

                }}
        />
        <Tab.Screen name="serach"  component={Serach}
        options={{
                    tabBarLabel :'Profile',
                     tabBarIcon: ({size,color}) =>(
                     <FontAwesome name="user" size={25} color={'green'} />
                     ),

                }}
         />
       </Tab.Navigator> 
     );
}
export default TabNav;