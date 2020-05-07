import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View , FlatList ,TouchableOpacity} from 'react-native';

export default function App() {
  const [people, setPeople]=useState([
    {name: `Mohamed` ,id:`1`},
    {name: `Alaa` ,id:`2`},
    {name: `Hanaa` ,id:`3`},
    {name: `Asmaa` ,id:`4`},
    {name: `MO - AD` ,id:`5`},
  ]);
  // const [number, setNumber] = useState({});
  // useEffect(() => {
  //     async function fetchDate(){
  //       const res = await fetch(`https://api.countapi.xyz/get/youtube.com/`)
  //       res
  //         .json()
  //         .then(res=>setNumber(res))
  //         .
  //         catch(res=>setErrors(err))
  //     }
  //     fetchDate();
  //   }
  // )
        const pressHandler=(id)=>{
          console.log(id);
          setPeople((prevPeople)=>{
            return prevPeople.filter(person=>person.id !=id);
          })
        };
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item)=>item.id}
        data={people}
        renderItem={({item})=>(
            <Text style ={styles.item}>{item.name}</Text>
        )}
      />
                {/* <Text style ={styles.item}>{item.name}</Text> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
    // backgroundColor: '#fff',
    backgroundColor: '#192a56',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hade:{
    color:'#fff',
    fontSize: 30,
    textAlign : 'center',
  },
  item:{
    marginTop:24,
    padding:30,
    backgroundColor:'red',
    fontSize:24,
   marginHorizontal:10,
   marginTop:24,
  },

});
