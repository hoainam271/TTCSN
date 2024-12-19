import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteItemAll } from "../../actions/cart";

export function ThanhToan(props) {
    const { item } = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleClick = (e) => {
        // e.preventDefault(); // Ngăn form reload
        alert("Đã đặt hàng thành công");
        dispatch(deleteItemAll());
        window.scrollTo(0, 0); // Cuộn lên đầu trang
        navigate("/");
       
    };


    return (
        <>
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
                                        <button onClick={handleClick} style={{ float: "right" }} >
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
    )
}

export default ThanhToan;