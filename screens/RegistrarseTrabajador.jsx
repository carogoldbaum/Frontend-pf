import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, onChangeDate, number, TextInput, onChangeText, onChangeNumber, String, ImageBackground, Button, Alert } from 'react-native';
import BotonSiguienteRegistrarse from "../components/BotonSiguienteRegistrarse";
import fondo from "../assets/fondo.jpg";
import SelectDropdown from 'react-native-select-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import BotonPicker from '../components/BotonDatePicker';
import * as ImagePicker from 'expo-image-picker';

const RegistrarseTrabajador = ({ navigation }) => {


  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Niñera', value: 'Niñera' },
    { label: 'Pintor', value: 'Pintor' },
    { label: 'Albañil', value: 'Albañil' },
    { label: 'Plomero', value: 'Plomero' },
    { label: 'Gasista', value: 'Gasista' },
    { label: 'Profesor', value: 'Profesor' },
    { label: 'Limpieza', value: 'Limpieza' },
    { label: 'Electricista', value: 'Electricista' },


  ]);

  const [userState, setUserState] = useState({
    nombre: '',
    celular: '',
    fechas: ''
  });

  const [error, setError] = React.useState(false);
  const [disable, setDisable] = React.useState(false);
  const [fecha, setFecha] = React.useState('');
  const [showDate, setShowDate] = React.useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);
 
  const handleConfirm = (date) => {
    const fechar = new Date(date);  
    const ModificarFecha=`${fechar.getFullYear()} ${fechar.getMonth()} ${fechar.getDate()}`
  Alert.alert("entro")
  
    

    console.warn("A date has been picked: ", fecha);
    hideDatePicker();
    setFecha(ModificarFecha);
  };
  const showDatepicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  useEffect(()=>{
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');
    })();
    
  }, [])

  const pickImage = async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect:[4,3],
      quality:1,
    });
    console.log(result)
    if(!result.cancelled){
      setImage(result.uri);
    };

    if(hasGalleryPermission === false){
      return <Text>No access</Text>
    }
  }

  return (

    <View>

      <ImageBackground source={fondo} style={styles.image}>

        <Text style={styles.titulo}>Datos personales</Text>

        <TextInput
          style={styles.dato}
          onChangeText={text => setUserState({ ...userState, nombre: text })}
          value={userState.nombre}
          placeholder="Nombre y Apellido"

        />
        <TextInput
          style={styles.dato}
          onChangeText={text => setUserState({ ...userState, celular: text })}
          value={userState.celular}
          placeholder="Número de Celular"
          keyboardType="numeric"
        />
        

        
          <DateTimePickerModal
            style={styles.datePickerStyle}
            isVisible={isDatePickerVisible}
            mode="date" // The enum of date, datetime and time
          
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            
           
          />

        <BotonPicker
          style={{fontSize: 18,
            marginTop: '5%',
            marginLeft: '0%',
            width: '80%',
            alignItems: 'center',
            borderWidth: 2,
            padding: '3%',
            top: '8%',
            backgroundColor: '#F4F4F4',}}
          onPress={showDatepicker}
          title={ fecha}
        />


        <DropDownPicker
          style={styles.DropDownPicker}
          placeholder="Seleccionar Rubros"
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        <Button
          style={styles.dato}
          onChangeText={onChangeText}
          value={String}
          title="Insertar foto de DNI"
          omPress={() => pickImage()}
        />
        {image && <Image source={{uri:image}}/>}

        <Text style={{ marginLeft: '11%', marginRight: '10%', fontSize: 13, top: '9%' }}>By singing up, you agree to Photo's Terms of service and Privacy Policy</Text>

        {error && <Text style={styles.alerta}>Completar datos</Text>}

        <BotonSiguienteRegistrarse
          disable={disable}
          text="SIGUIENTE"
          onPress={async () => {
            setDisable(true)
            if (userState.nombre == '' || userState.celular == '' /*|| userState.fecha == ''*/) {
              setError(true)
            }
            else {
              //await PostLogIn(userState).then(() => {
              setDisable(false)
              navigation.navigate('HomeTrabajador')

              //})
              //.catch(() => {
              //console.log("Datos mal")
              //setError(true)
              // setDisable(false)
              // });

            } setDisable(false)
          }
          }
        />
      </ImageBackground>
    </View>
  );

}

export default RegistrarseTrabajador

const styles = StyleSheet.create({

  titulo: {
    top: '8%',
    marginLeft: '-13%',
    fontSize: 34,

  },

  dato: {
    fontSize: 18,
    marginTop: '5%',
    marginLeft: '0%',
    width: '80%',
    alignItems: 'center',
    borderWidth: 2,
    padding: '3%',
    top: '8%',
    backgroundColor: '#F4F4F4',

  },

  DropDownPicker: {
    fontSize: 18,
    marginTop: '5%',
    marginLeft: '10%',
    width: '80%',
    alignItems: 'center',
    borderWidth: 2,
    top: '18%',
    borderRadius: 0,
    backgroundColor: '#F4F4F4',
  },

  image: {
    height: '100%',
    width: '100%',
    alignItems: 'center',

  },

  alerta: {
    color: 'black',
    textAlign: 'center',
    top: '9%',
    fontSize: 20,
    width: '100%'
  },

  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  datePickerStyle: {
    width: 200,
    marginTop: '-200%',
  },
});