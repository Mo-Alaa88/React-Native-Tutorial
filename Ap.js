import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View , ScrollView } from 'react-native';

export default function App() {
  const [name, setName]=useState('Mohamed');
  const [number, setNumber] = useState({});
  useEffect(() => {
      async function fetchDate(){
        const res = await fetch(`https://api.countapi.xyz/get/youtube.com/`)
        res
          .json()
          .then(res=>setNumber(res))
          .
          catch(res=>setErrors(err))
      }
      fetchDate();
    }
  )

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>الرقم الحالي </Text>
        <Text style={styles.number}>{JSON.stringify(number.value)}</Text>
        <Text style={styles.number}>{JSON.stringify(number.value)}</Text>
      </ScrollView>
      {/* <Button></Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number:{
    paddingTop:400,
  },
});

