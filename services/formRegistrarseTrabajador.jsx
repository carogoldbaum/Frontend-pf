import RNPickerSelect from "react-native-picker-select";
import axios from 'axios';
import React, {useEffect, useState} from 'react';


export const register = async (userState) => {
    console.log(userState);
    AxiosClient
      .post(`/administradores`, {
        ...userState
      })
      .then((res) => {
        let userInfo = res.data;
      })
      .catch((e) => {
        console.log(`register error`, e.response);
      });
  };
  export default register