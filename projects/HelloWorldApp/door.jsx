import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function door(props) {
  const {color} = props
  return (
    <View style={styles.container}>
      <View style={styles.row}/>
      <View style={styles.row}/>    
      
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
  row:{
    backgroundColor:'red',
    width:100,
    height:100

  }
});