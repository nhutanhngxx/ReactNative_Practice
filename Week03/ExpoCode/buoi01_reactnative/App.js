import React from 'react';
import { Text, Image, View, StyleSheet} from 'react-native';

const MyApp = () => {
  return (
    <View style = {style.container}> 
      <Text style = {style.header}> THÔNG TIN SINH VIÊN </Text>
      <Image source = {{uri: 'https://scontent.fsgn13-1.fna.fbcdn.net/v/t39.30808-6/458229338_1580614752887868_3549847666123797551_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEilrVTyv-JC37HkjKXbeOlHeFqXy31-GMd4WpfLfX4Y2n3TTbx0WzsPG654JLJpnA_k2uDxa-m6PJfr2fXztOs&_nc_ohc=qVVuyt60Bn8Q7kNvgFiz5sn&_nc_zt=23&_nc_ht=scontent.fsgn13-1.fna&oh=00_AYB4TPKzsfv2wkONL5aP0xQV7Hy0IDCpr71MUCREIEqDHQ&oe=66E49537'}}
            style = {{height: 200, width:150}}></Image>
            <View>
              <View style = {style.content}>
                <Text style = {style.field}>HỌ VÀ TÊN: </Text>
                <Text>Nguyễn Nhựt Anh</Text>
              </View>
              <View style = {style.content}>
                <Text style = {style.field}>NGÀY SINH: </Text>
                <Text>17/03/2003</Text>
              </View>
              <View style = {style.content}>
                <Text style = {style.field}>QUÊ QUÁN: </Text>
                <Text>Đồng Tháp</Text>
              </View>
              <View style = {style.content}>
                <Text style = {style.field}>CHUYÊN NGÀNH: </Text>
                <Text>Kỹ thuật Phần mềm</Text>
              </View>
            </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#FEF9D9',
    alignItems: 'center'
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#8EACCD',
    paddingTop: 10,
    paddingBottom: 10,
  },
  field: {
    marginLeft: 10,
    paddingBottom: 2,
    fontWeight: 'bold',
    color: '#8EACCD',
  },
  content: {
    width: '100%',
    flexDirection:'row',
  }
})

export default MyApp;