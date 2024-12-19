import { useSelector } from "react-redux";
import "./Cart.scss";
import CartItem from "./CartItem";
import ThanhToan from "./ThanhToan";

function CartList() {
    const cart = useSelector(state => state.cartReducer);

    return (
        <>
            <div className="cart">
                {cart.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            {/* Hiển thị component ThanhToan bên ngoài danh sách */}
        </>
    );
}

export default CartList;
