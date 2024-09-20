// import React, { useState } from "react";
// import {
//   Text,
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Image,
//   TextInput,
// } from "react-native";
// import { Button, Input } from "react-native-elements";

// import { style } from "./Style.js";

// const Screen03Buoi04 = () => {
//   const new_price = 141800;
//   const old_price = 141800;
//   const temp_price = 0;
//   const total = 0;
//   const quantity = 0;

//   return (
//     <SafeAreaView style={style.container}>
//       <View style={style.view1}>
//         <View style={style.detailBook}>
//           <View>
//             <Image
//               source={require("../Screen03/Img/book.png")}
//               style={{ width: 104, height: 127 }}
//             />
//           </View>

//           <View style={{ paddingLeft: 10 }}>
//             <Text style={style.title}>Nguyên hàm tích phân và ứng dụng</Text>
//             <Text style={style.title}>Cung cấp bởi Tiki Trading</Text>
//             <Text style={style.new_price}>{new_price} đ</Text>
//             <Text style={style.old_price}>{old_price} đ</Text>

//             <View
//               style={{ flexDirection: "row", justifyContent: "space-between" }}
//             >
//               <View style={style.quantity}>
//                 <Button title="-" />
//                 <Text style={{ paddingLeft: 10, paddingRight: 10 }}>
//                   {quantity}
//                 </Text>
//                 <Button title="+" />
//               </View>

//               <View style={style.buttonBuy}>
//                 <Button title="Mua sau"></Button>
//               </View>
//             </View>
//           </View>
//         </View>

//         {/* Thẻ chứa mã giảm giá */}
//         <View style={style.discount}>
//           <Text style={{ width: 104, fontSize: 12, marginRight: 10 }}>
//             Mã giảm giá ở đây
//           </Text>
//           <Button title="Xem tại đây" />
//         </View>

//         {/* Thẻ chứa voucher */}
//         <View style={style.voucher}>
//           <View
//             style={{
//               borderWidth: 1,
//               marginRight: 10,
//               width: "60%",
//               alignItems: "center",
//             }}
//           >
//             <Text style={{ fontWeight: "bold", margin: 10 }}>Mã giảm giá</Text>
//           </View>

//           <View style={{ width: "35%" }}>
//             <Button title="Áp dụng" />
//           </View>
//         </View>
//       </View>

//       <View style={style.view2}>
//         <Text style={{ fontSize: 12 }}>
//           Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
//         </Text>
//         <Button title="Nhập tại đây?"></Button>
//       </View>

//       <View style={style.view3}>
//         <Text style={{ fontSize: 20, fontWeight: "bold" }}>Tạm tính</Text>
//         <Text style={{ fontSize: 20, fontWeight: "bold", color: "red" }}>
//           {temp_price} đ
//         </Text>
//       </View>

//       <View style={style.view4}>
//         <View style={style.total}>
//           <Text style={{ fontSize: 20, fontWeight: "bold" }}>Thành tiền</Text>
//           <Text style={{ fontSize: 20, fontWeight: "bold", color: "red" }}>
//             {total} đ
//           </Text>
//         </View>
//         <View style={{ margin: 15 }}>
//           <Button title="Tiến hành đặt hàng" />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Screen03Buoi04;
