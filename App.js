
import * as React from 'react';
import { StyleSheet, Platform, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/routes';






export default function App() {
  return (

    <SafeAreaView style={styles.AndroidSafeArea}>

      <NavigationContainer >
        <MyTabs />
      </NavigationContainer>
    </SafeAreaView>







  );
}



const styles = StyleSheet.create({
  containerPrincipal: {
    marginTop: 0,
    padding: 0,
    width: '100%',
    flex: 1,
    backgroundColor: '#000517',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },

  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#000517",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginTop: 50,
  }
});
