import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        "https://expance-manager-379209-default-rtdb.firebaseio.com/cartItems.json"
      );
      const data = await res.json();
      console.log(data);
      return data;
    };
    try {
      const cartData = await fetchHandler();
      if (cartData.itemsList) {
        dispatch(cartActions.replaceData(cartData));
      }
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Request Failed.",
          type: "error",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        open: true,
        message: "Sending Request...",
        type: "info",
      })
    );
    const sendRequest = async () => {
      const res = await fetch(
        "https://expance-manager-379209-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      await res.json();
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Request Success.",
          type: "success",
        })
      );
    };
    try {
      await sendRequest();
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Request Failed.",
          type: "error",
        })
      );
    }
  };
};
