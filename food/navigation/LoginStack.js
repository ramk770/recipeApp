import { createStackNavigator } from "@react-navigation/stack";
import Login from "../component/Login";
import Register from "../component/Register";
import Welcome from "../component/Welcome";
import DrawerNav from "./DrawerNav";
import { createContext, useState } from 'react';
import Context from "../component/Context";

const Stack = createStackNavigator();

const UserStack = () => {
    const[user,setuser]=useState({user:"",email:""});
    return ( 
        <Context.Provider value={{user,setuser}}>
          <Stack.Navigator screenOptions={{headerShown:false}}>
                   <Stack.Screen name="welcome" component={ Welcome} /> 
             <Stack.Screen name="login" component={ Login} />
             <Stack.Screen name="register" component={ Register} />           
            <Stack.Screen name="mainpage" component={ DrawerNav} />
            
        </Stack.Navigator>
        </Context.Provider>
     );
}
 
export default UserStack;