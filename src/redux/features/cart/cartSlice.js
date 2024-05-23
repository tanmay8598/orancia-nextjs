// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cart: [],
//   },
//   reducers: {
//     add: (state, action) => {
//       state.cart.push({ ...action.payload });
//     },

//     // remove(state, action) {
//     //   const removeItem = state.cart.filter(
//     //     (item) => item.product._id !== action.payload
//     //   );
//     //   state.cart = removeItem;
//     // },
//     remove(state, action) {
//       const removeItem = state.cart.filter(
//         (item) => item.product._id !== action.payload
//       );
//       state.cart = removeItem;
//     },
//     // incrementQuantity: (state, action) => {
//     //   const item = state.cart.find(
//     //     (item) => item.product._id === action.payload
//     //   );
//     //   console.log(item);
//     //   item.quantity++;
//     // },
//     incrementQuantity: (state, action) => {
//       console.log(action.payload, "action");
//       const item = state.cart.find(
//         (item) => item.product._id === action.payload
//       );
//       if (item) {
//         item.quantity++;
//       }
//     },
//     decrementQuantity: (state, action) => {
//       const item = state.cart.find(
//         (item) => item.product._id === action.payload
//       );
//       if (item.quantity === 1) {
//         item.quantity = 1;
//       } else {
//         item.quantity--;
//       }
//     },
//   },
// });

// export const {
//   add,
//   remove,
//   decrementQuantity,
//   incrementQuantity,
// } = cartSlice.actions;
// export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    add: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.product._id === action.payload.product._id
      );
      if (itemInCart) {
        itemInCart.quantity = itemInCart.quantity + action.payload.quantity;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find(
        (item) => item.product._id === action.payload
      );

      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find(
        (item) => item.product._id === action.payload
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },

    remove(state, action) {
      const removeItem = state.cart.filter(
        (item) => item.product._id !== action.payload
      );
      state.cart = removeItem;
    },
    clear: (state, action) => {
      state.cart = [];
    },
  },
});

export const {
  add,
  remove,
  incrementQuantity,
  decrementQuantity,
  clear,
} = cartSlice.actions;
export default cartSlice.reducer;