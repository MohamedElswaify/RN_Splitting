import React from 'react';
import { SafeAreaView, StyleSheet, Button, View } from 'react-native';

function SuperApp({ navigation }) {
  return (
    <View style={styles.linksView}>
      <Button title="App1" onPress={() => navigation.navigate('App1')} />
      <Button title="App2" onPress={() => navigation.navigate('App2')} />
    </View>
  );
};

const styles = StyleSheet.create({
  linksView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default SuperApp;
