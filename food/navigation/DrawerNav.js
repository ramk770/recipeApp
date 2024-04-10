import { createDrawerNavigator } from "@react-navigation/drawer";

import Setting from "../component/screen/Setting";
import Notification from "../component/screen/Notification";
import Termcondition from "../component/screen/Termcondition";
import CustmerSupport from "../component/screen/CustmerSupport";
import TabNav from "./Tabnav";
  

const Drawer = createDrawerNavigator();
const DrawerNav = () => {
    return ( 
        <Drawer.Navigator screenOptions={{headerShown:false, drawerActiveTintColor:'green'}}>
            <Drawer.Screen name="screen" component={TabNav}  />
            <Drawer.Screen name="setting" component={ Setting} />
            <Drawer.Screen name="notification" component={Notification} />      
            <Drawer.Screen  name="Terms&conditions " component={Termcondition} /> 
            <Drawer.Screen name="CusmerSupport" component={CustmerSupport}  />           
        </Drawer.Navigator>
     );
}
 
export default DrawerNav;