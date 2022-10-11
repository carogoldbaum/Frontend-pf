import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ChatsIcon from "../assets/ChatIcon.png";
import HomeIcon from "../assets/HomeIcon.png";
import SearchIcon from "../assets/SearchIcon.png";
import ProfileIcon from "../assets/ProfileIcon.png";

const NavBarContratador = (props) => {

    const { onPress, text } = props

    return (
    
         <View >
              <Image style={styles.ButtonChats} source={ChatsIcon}></Image>

              <Image style={styles.ButtonHome} source={HomeIcon}></Image>

              <Image style={styles.ButtonLupa} source={SearchIcon}></Image>

              <Image style={styles.BotonProfile} source={ProfileIcon}></Image>

         </View>     
    )
}

export default NavBarContratador


const styles = StyleSheet.create({

        ButtonChats: {
         width: 40,
         height: 40,
         padding: 10,
        top: '-270%',
        right: '-56%',
         },
        ButtonHome: {
         width: 40,
         height: 40,
        padding: 10,
         top: '-295%',
        right: '-12%',
                        
          },
        ButtonLupa: {
        width: 40,
         height: 40,
         padding: 10,
         top: '-320%',
         right: '-34%',
         },
        BotonProfile: {
         width: 40,
        height: 40,
        padding: 10,
         top: '-346%',
         right: '-78%',
         },

});