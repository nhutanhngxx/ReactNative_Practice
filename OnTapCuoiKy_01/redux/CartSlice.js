import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Mảng chứa các sản phẩm trong giỏ
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        // Tăng số lượng nếu sản phẩm đã tồn tại
        existingProduct.quantity += 1;
      } else {
        // Thêm sản phẩm mới vào giỏ hàng
        state.items.push({ ...product, quantity: 1 });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
