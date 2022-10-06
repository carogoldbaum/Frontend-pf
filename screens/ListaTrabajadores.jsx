import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';

const Item = ({ title, image, navigation, id }) => (
  <TouchableOpacity
    onPress={() => { navigation.navigate('DetallePlato', { id: id }) }}
  >
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Image source={{ uri: image }} style={styles.image} />
    </View>

  </TouchableOpacity>
);

const ListaTrabajadores = (props) => {

    useEffect(async () => {
        const rta = await getRubro();
        setTest(rta.data);
        console.log("sdflksdjngfsangñdikdilgfhdudbfnidkf", rta.data)
      }, [])
      
  const { navigation, platos } = props

  return (
    <TouchableOpacity>
      <FlatList 

        data={platos}
        renderItem={({ item }) => <Item navigation={navigation} title={item.title} image={item.image} id={item.id} />}
        //agarra el objeto platos y lo separa en cada componente que almacena en item 
        //y lo convierte en un componente item y le envia la info del string 
        // a Item y lo muestra en Item
        keyExtractor={item => item.id}

      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100
  },
  item: {
    padding: 0,
    marginTop: 120,
    marginVertical: 8,
    marginHorizontal: 12,
  },
  title: {
    fontSize: 15,
  },
  image: {
    width: 70,
    height: 70,
  },
});

export default ListaTrabajadores;