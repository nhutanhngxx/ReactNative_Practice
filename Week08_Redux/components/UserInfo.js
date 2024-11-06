import React, {useEffect, useState} from "react";
import {View, Image, Text} from "react-native"

export default function UserInfo() {
  return (
    <View style={{flexDirection: 'row', gap: 10}}>
      <Image
        source={require("../assets/snack-icon.png")}
        style={{width: 50, height: 50}}
      />
      <View style={{gap: 3}}>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>Nhut Anh</Text>
        <Text>Chúc bạn một ngày tốt lành!!</Text>
      </View>
    </View>
  )
}