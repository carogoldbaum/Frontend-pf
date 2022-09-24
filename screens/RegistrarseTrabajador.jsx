import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, onChangeDate, number, TextInput, onChangeText, onChangeNumber, String, ImageBackground, Button, Alert } from 'react-native';
import BotonSiguienteRegistrarse from "../components/BotonSiguienteRegistrarse";
import fondo from "../assets/fondo.jpg";
import SelectDropdown from 'react-native-select-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import BotonPicker from '../components/BotonDatePicker';
import { postDatosPersonales } from '../axios/axiosClient';
import { getRubro } from '../axios/axiosClient';
import { FlatList } from 'react-native-web';

const RegistrarseTrabajador = ({ navigation }) => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Electricista', value: 'Electricista' },
  ]);

  const [test, setTest] = useState([])



  useEffect(async () => {
    const rta = await getRubro();
    setTest(rta.data);
  }, [])

  const [userState, setUserState] = useState({
    nombre: '',
    celular: '',
    dni:  '',
  });

  const [error, setError] = React.useState(false);
  const [disable, setDisable] = React.useState(false);
  const [fecha, setFecha] = React.useState('');
  const [dni, setDNI] = React.useState('');

  const [showDate, setShowDate] = React.useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const handleConfirm = (date) => {
    const fechar = new Date(date);
    const ModificarFecha = `${fechar.getFullYear()} ${fechar.getMonth()} ${fechar.getDate()}`

    hideDatePicker();
    setFecha(ModificarFecha);
  };
  const showDatepicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const probando = () =>{
    let nombres = []
    {test.map((x)=>{
        nombres.push(x.Nombre)
      })}

    return nombres
  }

  return test.length ? (
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
          onChangeText={text => setUserState({ ...userState, fechas: text })}
          value={userState.fechas}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />

        <BotonPicker
          placeholder="Seleccionar fecha nacimineto"
          style={{
            fontSize: 18,
            marginTop: '5%',
            marginLeft: '0%',
            width: '80%',
            alignItems: 'center',
            borderWidth: 2,
            padding: '3%',
            top: '8%',
            backgroundColor: '#F4F4F4',
          }}

          onPress={showDatepicker}
          title={fecha}
        />

        <DropDownPicker
          style={styles.DropDownPicker}
          placeholder="Seleccionar Rubros"
          open={open}
          value={value}
          items={test.map((item)=> {return ({value: item.Nombre, label: item.Nombre})})}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setTest}
          onChangeText={text => setUserState({ ...userState, rubro: text })}
        />
        

        
        {/* {test.map((x)=>{
          return(
            <Text>{x.Nombre}</Text>
          )
        })} */}

        <TextInput
          style={styles.dato}
          onChangeText={text => setUserState({ ...userState, dni: text })}
          value={userState.dni}
          placeholder="Ingrese DNI"
          keyboardType="numeric"

        />

        <Text style={{ marginLeft: '11%', marginRight: '10%', fontSize: 13, top: '9%' }}>By singing up, you agree to Photo's Terms of service and Privacy Policy</Text>

        {error && <Text style={styles.alerta}>Completar datos</Text>}

        <BotonSiguienteRegistrarse
          disable={disable}
          text="SIGUIENTE"
          onPress={async () => {
            setDisable(true)
            console.log(userState, value, fecha)
            if (userState.nombre == '' || userState.celular == '' || value == '' || fecha == '' || userState.dni == '')  {//si hay datos incompletos
              setError(true)
            }
            else {//si hay datos completos}
              console.log(userState, value, fecha)
              await postDatosPersonales(userState, value, fecha).then(() => {
                setDisable(false)
                navigation.navigate('HomeTrabajador')

              })
                .catch((err) => {
                  console.error("todo bien 7", err)
                  setDisable(false)
                });

            } setDisable(false)
          }
          }
        />
      </ImageBackground>
    </View>
  ): (<Text>Cargando...</Text>);
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
});