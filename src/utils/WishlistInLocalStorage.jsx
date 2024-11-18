const WishlistInLocalStorage = (product) => {
  const cartProduct = {
    items: [],
  };

  const getCart = localStorage.getItem("wishlist");
  const cart = JSON.parse(getCart);

  if (cart) {
    const isAvailableProduct = cart.items.find((it) => it._id == product._id);
    if (isAvailableProduct) {
      cart.items = cart.items.filter((it) => it._id !== product._id);
      localStorage.setItem("wishlist", JSON.stringify(cart));
      return false;
    } else {
      cart.items.push(product);
      localStorage.setItem("wishlist", JSON.stringify(cart));
      return true;
    }
  } else {
    cartProduct.items.push(product);
    localStorage.setItem("wishlist", JSON.stringify(cartProduct));
    return true;
  }
};

export default WishlistInLocalStorage;
