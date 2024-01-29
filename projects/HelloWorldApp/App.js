//npx expo start --tunnel
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button} from 'react-native';
import Door from "./door"

export default function App() {
  const handlepress =()=>{
    console.log("fdkjh")
  }
  return (
    <View style={styles.container}>
      <Button title="press me" onPress={handlepress} ></Button>

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
