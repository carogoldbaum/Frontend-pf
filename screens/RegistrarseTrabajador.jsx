import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, onChangeDate, number, TextInput, onChangeText, onChangeNumber, String, ImageBackground, Button } from 'react-native';
import BotonSiguienteRegistrarse from "../components/BotonSiguienteRegistrarse";
import fondo from "../assets/fondo.jpg";
import SelectDropdown from 'react-native-select-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import BotonPicker from '../components/BotonDatePicker';

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
    fecha: ''
  });

  const [error, setError] = React.useState(false);
  const [disable, setDisable] = React.useState(false);
  const [date, setDate] = React.useState(new Date());
  const [showDate, setShowDate] = React.useState(false);

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
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
        {/*
           <TextInput   
              style={styles.dato}
              onChangeText={text => setUserState({ ...userState, fecha: text })}
              value={userState.fecha}
              placeholder="DD/MM/AA"
              
            />
           */}


        {/*
            <DatePicker
          style={styles.datePickerStyle}
          date={date}
          mode="date"
          placeholder="select date"
          format="DD/MM/YYYY"
          minDate="01-01-1900"
          maxDate="01-01-2000"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              right: -5,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              borderColor : "gray",
              alignItems: "flex-start",
              borderWidth: 0,
              borderBottomWidth: 1,
            },
            placeholderText: {
              fontSize: 17,
              color: "gray"
            },
            dateText: {
              fontSize: 17,
            }
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
            */ }

        {showDate && (
          <DateTimePickerModal
            style={styles.datePickerStyle}
            value={date}
            //date={date} // Initial date from state
            mode="date" // The enum of date, datetime and time
            placeholder="select date"
            format="DD-MM-YYYY"
            minDate="01-01-2016"
            maxDate="01-01-2024"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                //display: 'none',
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onChange={(_, date) => {
              setDate(date);
              setShowDate(false)
            }}
          />)}

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
          onPress={() => setShowDate(true)}
          title={"Pick a date, the current one is: " + date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate()}
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
        <TextInput
          style={styles.dato}
          onChangeText={onChangeText}
          value={String}
          placeholder="Insertar foto de DNI"
        />


        <Text style={{ marginLeft: '11%', marginRight: '10%', fontSize: 13, top: '9%' }}>By singing up, you agree to Photo's Terms of service and Privacy Policy</Text>

        {error && <Text style={styles.alerta}>Completar datos</Text>}

        <BotonSiguienteRegistrarse
          disable={disable}
          text="SIGUIENTE"
          onPress={async () => {
            setDisable(true)
            if (userState.nombre == '' || userState.celular == '' || userState.fecha == '') {
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