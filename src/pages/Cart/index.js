import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import "./Cart.scss"
import { deleteItemAll } from "../../actions/cart";
import { useNavigate } from "react-router-dom";

function Cart() {

    const cart = useSelector(state => state.cartReducer)
    console.log(cart);

    // const total = cart.reduce((sum,item) => {
    //     const priceNew=(item.info.price - item.info.price * item.info.discountPercentage / 100).toFixed(0)
    //     return sum+priceNew*item.quantity
    // },0)
    const total = cart.reduce((sum, item) => {
        const priceNew = (item.info.price - 0).toFixed(2)
        return sum + priceNew * item.quantity
    }, 0)
    // const total = cart.reduce((sum, item) => {
    //     const priceNew = item.info.price
    //     return (sum + priceNew * item.quantity).toFixed(2);
    // }, 0)
    const dispatch = useDispatch();
    const handleDeleteAll = () => {
        dispatch(deleteItemAll())
    }
    const navigate = useNavigate();

    const handleClick = (e) => {
        // e.preventDefault(); // Ngăn form reload
        alert("Đã đặt hàng thành công");
        dispatch(deleteItemAll());
        window.scrollTo(0, 0); // Cuộn lên đầu trang
        navigate("/");

    };
    return (
        <>
            {/* <h2>Gio hang</h2> */}

            <div>
                {cart.length > 0 ? (
                    <>
                        <button style={{
                            backgroundColor: "red"
                        }} onClick={handleDeleteAll} type="button" class="btn btn-fefault cart">
                            <i class="fa fa-shopping-cart"></i>
                            Xóa tất cả
                        </button>
                        <CartList />

                        <div className="cart__total">
                            Tổng chi phí:<span>{total}$</span>
                        </div>
                        <div>
                            <div class="container">
                                <div class="register-req">
                                    <p>Vui lòng sử dụng Đăng ký và Thanh toán để dễ dàng truy cập vào lịch sử đơn hàng của bạn hoặc sử dụng Thanh toán với tư cách là Khách</p>
                                </div>
                                <div class="shopper-informations"  >
                                    <div class="row">
                                        <div class="col-sm-6 clearfix">
                                            <div class="bill-to">
                                                <p>Hóa đơn tới</p>
                                                <div class="form-one">
                                                    <form  >
                                                        <input type="text" placeholder="Tên công ty" required />
                                                        <input type="text" placeholder="Email*" required />
                                                        <input type="text" placeholder="Tiêu đề" required />
                                                        <input type="text" placeholder="Họ và tên  *" required />
                                                    </form>
                                                </div>
                                                <div class="form-two">
                                                    <form >
                                                        <input type="text" placeholder="Mã bưu chính" required />
                                                        <select required>
                                                            <option>Đất nước</option>
                                                            <option>Việt Nam</option>
                                                            <option>Hoa Kỳ</option>
                                                            <option>Trung Quốc</option>
                                                            <option>Anh</option>
                                                            <option>Ấn Độ</option>
                                                            <option>Canada</option>
                                                        </select>
                                                        <input type="text" placeholder="Số điện thoại *" required />
                                                        <input type="text" placeholder="Địa chỉ chi tiết" required />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="order-message">
                                                <p>Chi tiết đơn hàng</p>
                                                <textarea name="message" placeholder="Ghi chú về đơn hàng của bạn, Ghi chú đặc biệt về giao hàng" rows="16"></textarea>
                                                <label><input type="checkbox" /> Vận chuyển đến địa chỉ thanh toán</label>
                                                <div >
                                                    
                                                    <button  onClick={handleClick} style={{ float: "right" }} type="button" class="btn btn-fefault cart">
                                                       
                                                        Thanh toán và giao hàng
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) :
                    (
                        <div class="cart-empty container card border-0 py-2 ">
                            <div class="alert green-alert section" role="alert">
                                <div class="title-cart text-center">
                                    <h1 class="d-none">Giỏ hàng</h1>
                                    <div>
                                        <img src="//theme.hstatic.net/1000152881/1001100349/14/cart_empty_background.png?v=1095" class="img-fluid" width="298" height="152" />
                                    </div>
                                    <h3>
                                        "Hổng” có gì trong giỏ hết
                                    </h3>
                                    <p>	Về trang cửa hàng để chọn mua sản phẩm bạn nhé!!</p>
                                    <a href="/" title="Mua sắm ngay" class="btn btn-main">Mua sắm ngay</a>
                                </div>
                            </div>
                        </div>
                    )}
            </div>

        </>
    )
}
export default Cart;

