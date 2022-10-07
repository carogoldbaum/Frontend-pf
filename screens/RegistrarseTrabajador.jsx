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

const RegistrarseTrabajador = ({ navigation }) => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  
  const [test, setTest] = useState([])

 /* useEffect(async () => {
    const rta = await getRubro();
    setTest(rta.data);
    console.log("sdflksdjngfsangñdikdilgfhdudbfnidkf", rta.data)
 }, [])*/

  const [userState, setUserState] = useState({
    NombreApellido: '',
    Celular: '',
    DNI: '',
    FechaNacimiento: "2022-9-30",
    idRubro:'',
  });

  const [error, setError] = React.useState(false);
  const [disable, setDisable] = React.useState(false);
  const [FechaNacimiento, setFecha] = React.useState('');

  const [showDate, setShowDate] = React.useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const handleConfirm = (date) => {
    const fechar = new Date(date);
    const ModificarFecha = fechar.getFullYear() + "-" + (fechar.getMonth() + 1) + "-" + fechar.getDate()

    hideDatePicker();
    setUserState({...userState, FechaNacimiento: ModificarFecha});
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
          onChangeText={text => setUserState({ ...userState, NombreApellido: text })}
          value={userState.NombreApellido}
          placeholder="Nombre y Apellido"

        />
        <TextInput
          style={styles.dato}
          onChangeText={text => setUserState({ ...userState, Celular: text })}
          value={userState.Celular}
          placeholder="Número de Celular"
          keyboardType="numeric"
        />

        <DateTimePickerModal
          style={styles.datePickerStyle}
          isVisible={isDatePickerVisible}
          mode="date" // The enum of date, datetime and time
          onChangeText={text => setUserState({ ...userState, FechaNacimiento: text })}
          value={userState.FechaNacimiento}
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
          title={FechaNacimiento}
        />

        <DropDownPicker
          style={styles.DropDownPicker}
          placeholder="Seleccionar Rubros"
          open={open}
          value={value}
          items={test.map((item) => { return ({ value: item.Nombre, label: item.Nombre }) })}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setTest}
          onChangeText={text => setUserState({ ...userState, rubro: text })}
        />

        <TextInput
          style={styles.dato}
          onChangeText={text => setUserState({ ...userState, DNI: text })}
          value={userState.DNI}
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
            console.log(userState, value)

            const rubroConEseNombre = test.filter(r => r.Nombre === value)[0]
            userState.idRubro = rubroConEseNombre.idRubros
            console.log(rubroConEseNombre, userState.idRubro)

            if (userState.NombreApellido == '' || userState.Celular == '' || value == '' || userState.FechaNacimiento == '' || userState.DNI == '') {//si hay datos incompletos
              setError(true)
            }
            else {//si hay datos completos
              try {
                console.log(userState, value)
                await postDatosPersonales(userState)
                  setDisable(false)
                  console.log('se mando bien por qué no se fue al catch con un error');
                  navigation.navigate('HomeTrabajador')

              } catch (err) {
                setError(true)
                console.error("todo mal", err)
                setDisable(false)
              };

            } setDisable(false)
          }
          }
        />
      </ImageBackground>
    </View>
  )
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