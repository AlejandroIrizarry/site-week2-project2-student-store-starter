/**
 * This function calculates quantity in the shopping cart for a specificied item
 * 
 * @param {Item} item - the specified item in question
 * @return {Number} - quantity of product in cart
 */
export const getQuantityOfItemInCart = (cart, item) => {
    return cart
}

/**
 * This function removes a specified item from the shopping cart
 * 
 * @param {Item} item - the specified item to remove
 * @return {Cart} newCart - the new cart without the item
 */
export const removeItemFromCart = (cart, item) => {
    const newCart = {
        ...cart, [item.name]: cart[item.name] - 1
    }

}

/**
 * This function adds a specified item from the shopping cart
 * 
 * @param {Item} item - the specified item to add
 * @return {Cart} newCart - the new cart with the item
 */
export const addItemToCart = (cart, item) => {
    if (cart.hasOwnProperty(item.id)) {
        return {
          ...cart,
          [item.id]: cart[item.id] + 1,
        }
      }
    
      return {
        ...cart,
        [item.id]: 1,
      }
}

export const getTotalItemsInCart = () => {
    return 1
}


