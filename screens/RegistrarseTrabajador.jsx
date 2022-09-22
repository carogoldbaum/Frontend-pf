import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, onChangeDate, number, TextInput, onChangeText, onChangeNumber, String, ImageBackground, Button, Alert } from 'react-native';
import BotonSiguienteRegistrarse from "../components/BotonSiguienteRegistrarse";
import fondo from "../assets/fondo.jpg";
import SelectDropdown from 'react-native-select-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import BotonPicker from '../components/BotonDatePicker';

const RegistrarseTrabajador = ({ navigation }) => {

  const [open, setOpen] = useState(false);
  const [rubro, setRubro] = useState(null);
  const [items, setItems] = useState([
    { label: 'Niñera', value: 'Niñera' },
    { label: 'Pintor', value: 'Pintor' },
    { label: 'Albañil', value: 'Albañil' },
    { label: 'Plomero', value: 'Plomero' },
    { label: 'Gasista', value: 'Gasista' },
    { label: 'Profesor', value: 'Profesor' },
    { label: 'Limpieza', value: 'Limpieza' },
    { label: 'Electricista', value: 'Electricista' },
    await postRegistrarse(userState).then((data) => {
      { data }
    })
  
  ]);

  const [userState, setUserState] = useState({
    nombre: '',
    celular: '',
    fechas: '',
    rubro: '',
  });

  const [error, setError] = React.useState(false);
  const [disable, setDisable] = React.useState(false);
  const [fecha, setFecha] = React.useState('');

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
          value={rubro}
          items={items}
          setOpen={setOpen}
          setValue={setItems}
          setItems={setItems}
          onChangeText={text => setUserState({ ...userState, rubro: text })}
        />

        <Text style={{ marginLeft: '11%', marginRight: '10%', fontSize: 13, top: '9%' }}>By singing up, you agree to Photo's Terms of service and Privacy Policy</Text>

        {error && <Text style={styles.alerta}>Completar datos</Text>}

        <BotonSiguienteRegistrarse
          disable={disable}
          text="SIGUIENTE"
          onPress={async () => {
            setDisable(true)
            console.log(userState)
            if (userState.nombre == '' || userState.celular == '' || userState.fechas == '' || userState.rubro == '') {//si hay datos incompletos
              setError(true)
            }
            else {//si hay datos completos}
              console.log(userState)
              await PostLogIn(userState).then(() => {
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
});