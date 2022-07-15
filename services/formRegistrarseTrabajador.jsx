import RNPickerSelect from "react-native-picker-select";
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import ConAppClient from "./ConAppClient"

export const register = async (rubros) => {
    console.log(rubros);
    ConAppClient
      .post(`/usuario`, {
        ...rubros
      })
      .then((res) => {
        let usuario = res.data;
      })
      .catch((e) => {
        console.log(`register error`, e.response);
      });
  };
  export default register