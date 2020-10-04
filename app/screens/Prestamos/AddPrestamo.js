import React, { useState, useRef } from "react";
import { View, Text } from "react-native";
import Toast from "react-native-easy-toast";
import AddPrestamoForm from "../../components/Prestamos/AddPrestamoForm";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/Feather";

export default function AddPrestamo(props) {
  const { navigation } = props;
  const toastRef = useRef();
  return (
    <View style={{ backgroundColor: "#ffde59", height: "100%" }}>
      <Icon
        name="chevron-down"
        style={{
          height: heightPercentageToDP("6%"),
          top: "5.5%",
          left: "4%",
          position: "absolute",
          color: "rgba(0,0,0,1)",
          fontSize: 30,
        }}
        onPress={() => props.navigation.navigate("prestamos")}
      >
        {" "}
        <Text style={{ fontSize: 30 }}>Añadir prestamo:</Text>
      </Icon>
      <AddPrestamoForm toastRef={toastRef} navigation={navigation} />
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </View>
  );
}
