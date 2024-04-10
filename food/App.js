import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNav from './navigation/Tabnav';
import DrawerNav from './navigation/DrawerNav';
import UserStack from './navigation/LoginStack';

export default function App() {
  return (
    <>
      <NavigationContainer>
        {/* <DrawerNav /> */}
        <UserStack />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
