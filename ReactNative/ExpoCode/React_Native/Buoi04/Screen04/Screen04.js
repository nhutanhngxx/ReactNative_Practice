import React, {useState} from "react";
import { Text, View, StyleSheet, Image, SafeAreaView, TextInput } from "react-native";
import { Button, Input } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { CheckBox } from "react-native-elements";

import { style } from "./Style.js";
const password = "Password here";
const Screen04Buoi04 = () => {
    const [isLowerCaseChecked, setIsLowerCaseChecked] = useState(true);
    const [isUpperCaseChecked, setIsUpperCaseChecked] = useState(false);
    const [isNumberChecked, setIsNumberChecked] = useState(false);
    const [isSymbolChecked, setIsSymbolChecked] = useState(false);
    return (
        <SafeAreaView style={style.container}>
            <View style={style.model}>
                <View style={{paddingTop: 40, paddingBottom: 40, textAlign: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 40, color: 'white', width: 250}}>PASSWORD GENERATOR</Text>
                </View>
                <View style={{width: '90%', height: 60, backgroundColor: '#151537', justifyContent: 'center'}}>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}>{password}</Text>
                </View>
                <View style={{ marginTop: 30, width: '90%', paddingLeft: 10, paddingTop: 10, paddingRight: 10 }}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 40}}>
                        <Text style={style.text}>Password length</Text>
                        <TextInput
                            style={{width: 150, height: 30, backgroundColor: 'white', color: 'black'}}
                        />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={style.text}>Include lower case letters</Text>
                        <CheckBox
                            onPress={() => setIsLowerCaseChecked(!isLowerCaseChecked)}
                            checked={isLowerCaseChecked}
                        />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={style.text}>Include upcase letters</Text>
                        <CheckBox
                            onPress={() => setIsUpperCaseChecked(!isUpperCaseChecked)}
                            checked={isUpperCaseChecked}
                        />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={style.text}>Include number</Text>
                        <CheckBox
                            onPress={() => setIsNumberChecked(!isNumberChecked)}
                            checked={isNumberChecked}
                        />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={style.text}>Include special symbol</Text>
                        <CheckBox
                            onPress={() => setIsSymbolChecked(!isSymbolChecked)}
                            checked={isSymbolChecked}
                        />
                    </View>
                </View>
                <View style={{marginTop: 'auto', padding: 20}}>
                    <Button
                        title="GENERATE PASSWORD"
                        buttonStyle={{width: 300, height: 50, backgroundColor: '#3B3B98' }}
                        titleStyle={{color: 'white', fontSize: 18, fontWeight: 'bold'}}
                    />
                </View>
            </View>
        </SafeAreaView>
      );
};

export default Screen04Buoi04;