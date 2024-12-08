// export const addToCart = (id,info) =>{
//     return {
//         type:"ADD_TO_CARD",
//         id:id,
//         info:info
       
//     }
// }
// export const updateQuantity = (id,quantity=1) =>{
//     return {
//         type:"UPDATE_QUANTITY",
//         id:id,
//         quantity:quantity
       
//     }
// }
// Thêm sản phẩm vào giỏ hàng
export const addToCart = (id, info) => {
    return {
        type: "ADD_TO_CART",
        id: id,
        info: info,
    };
};

// Cập nhật số lượng sản phẩm trong giỏ hàng
export const updateQuantity = (id, quantity = 1) => {
    return {
        type: "UPDATE_QUANTITY",
        id: id,
        quantity: quantity,
    };
};

export const deleteItem = (id) =>{
    return {
        type:"DELETE_ITEM",
        id:id
       
    }
}
export const deleteItemAll = () =>{
    return {
        type:"DELETE_ITEM_ALL",
        
       
    }
}