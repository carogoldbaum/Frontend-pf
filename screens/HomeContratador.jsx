import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import BotonRubro from "../components/BotonRubro"
import {getRubro} from "../axios/axiosClient"

const HomeContratador = ({ navigation }) => {

    const [rubro, setRubro] = useState([]);
    useEffect(async () => {
       const rta = await getRubro();
        setRubro(rta.data);
        console.log("obtengo los rubros", rta.data)
      }, [])

    return (
        <View>
       
            <Text style={styles.titulo}>Rubros</Text>
            <View style={{ borderBottomColor: 'black', borderWidth: 0.7, width: '100%', marginBottom: '10%', marginTop: '-10%'}}></View>

            <FlatList
                data={rubro}
              
                renderItem={({ item }) => <BotonRubro text={item.Nombre} image={item.Imagen}  onPress={() => {
                    navigation.navigate('ListaTrabajadores', {id: item.idRubros})
                }} />}
                
                numColumns={2}
                
                keyExtractor={item => item.idRubros}
            />
        </View>
    );
}
export default HomeContratador

const styles = StyleSheet.create({

    titulo: {
        top: '4.5%',
        fontSize: 34,
        left: '35%',
        alignItems: 'center'

    },

});
