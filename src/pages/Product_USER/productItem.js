import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../actions/cart";
import { useNavigate } from "react-router-dom";

function ProductItem(props) {
    const { item } = props;
    const dispatch = useDispatch();;
    const cart = useSelector(state => state.cartReducer);

    const handleAddToCard = () => {
        if (cart.some(itemCart => itemCart.id === item.id)) {
            dispatch(updateQuantity(item.id))
            console.log("update");

        }
        else {
            dispatch(addToCart(item.id, item))
        }


    }
    const navigate = useNavigate();
    const handleDetail = () => {
        navigate(`/products/${item.id}`); // Chuyển sang trang chi tiết với ID
        window.scrollTo(0, 0); // Cuộn lên đầu trang

    };
    return (
        <>
            <div className="product__item" key={item.id}>
                <img className="product__image" src={item.image_url} alt={item.name} />
                <h3 className="product__title" style={{ cursor: "pointer" }} onClick={handleDetail}>{item.name}</h3>
                <div className="product__price">Giá: {item.price}$</div>
                <div className="product__button">
                    <button style={{
                    }} onClick={handleAddToCard} type="button" class="btn btn-fefault cart">
                        <i class="fa fa-shopping-cart"></i>
                        Thêm vào giỏ hàng
                    </button>
                </div>

            </div>
        </>
    )
}
export default ProductItem;