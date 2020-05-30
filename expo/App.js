import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const req = new XMLHttpRequest();
req.addEventListener('load', () => {
	console.log('Req finished with a status(%s) responseText(%s)',req.status,req.responseText);
});
req.open("GET", "http://127.0.0.1:9091");
req.send();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
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
