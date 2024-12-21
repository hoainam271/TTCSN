import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart, updateQuantity } from "../../actions/cart";
import { useDispatch } from "react-redux";
export function ProductDetail() {
    const navigate = useNavigate();
    const dispatch = useDispatch();;
    const cart = useSelector(state => state.cartReducer);
    const { id } = useParams(); // Lấy ID từ URL
    console.log(id);

    const product = useSelector(state =>
        state.productReducer.products.find(item => item.id === id)
    );
    console.log("Products:", product);

    if (!product) {
        return <p>Sản phẩm không tồn tại!</p>;
    }
    const handleNavigate1 = () => {
        navigate("/products_ptd");
    }
    const handleNavigate2 = () => {
        navigate("/products_ptdc");
    }
    const handleNavigate3 = () => {
        navigate("/products_ptg");
    }
    const handleNavigate4 = () => {
        navigate("/products_ptk");
    }


    const handleAddToCard = () => {
        if (cart.some(itemCart => itemCart.id === product.id)) {
            dispatch(updateQuantity(product.id))
            console.log("update");

        }
        else {
            dispatch(addToCart(product.id, product))
        }


    }
    return (
        // <div className="product-detail">
        //     <h2>Chi tiết sản phẩm</h2>
        //     <img src={product.image_url} alt={product.name} />
        //     <h3>{product.name}</h3>
        //     <p>Giá: {product.price}$</p>
        //     <p>Mô tả: {product.description}</p>
        // </div>
        <>
            <section>
                <div class="container">
                    <div class="row">
                        <div className="col-sm-3">
                            <div className="left-sidebar">
                                <h2>DANH MỤC SẢN PHẨM</h2>
                                <div className="panel-group category-products" id="accordian">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
                                                    <span className="badge pull-right"></span>
                                                    <p style={{ fontSize: "21px" }} onClick={handleNavigate1} >Phụ tùng điện</p>
                                                </a>
                                            </h4>
                                        </div>

                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordian" href="#mens">
                                                    <span className="badge pull-right"></span>
                                                    <p style={{ fontSize: "21px" }} onClick={handleNavigate2} >Phụ tùng động cơ</p>
                                                </a>
                                            </h4>
                                        </div>

                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordian" href="#womens">
                                                    <span className="badge pull-right"></span>
                                                    <p style={{ fontSize: "21px" }} onClick={handleNavigate3} >Phụ tùng gầm</p>
                                                </a>
                                            </h4>
                                        </div>

                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title ">
                                                <a data-toggle="collapse" data-parent="#accordian" href="#womens">
                                                    <span className="badge pull-right"></span>
                                                    <p style={{ fontSize: "21px" }} onClick={handleNavigate4} >Phụ tùng khác</p>
                                                </a>
                                            </h4>
                                        </div>

                                    </div>


                                </div>


                            </div>
                        </div>

                        <div class="col-sm-9 padding-right">
                            <div class="product-details">
                                <div class="col-sm-5">

                                    <div id="similar-product" class="carousel slide" data-ride="carousel">


                                        <div class="carousel-inner">
                                            <div class="item active">
                                                <a href=""><img src={product.image_url} alt={product.name} /></a>
                                            </div>
                                        </div>



                                    </div>

                                </div>
                                <div class="col-sm-7">
                                    <div class="product-information">
                                        <h1>{product.name}</h1>
                                        <h2>{product.description}</h2>
                                        <p><b>Trạng thái:</b> Còn hàng</p>
                                        <p><b>Hình thức:</b> Mới</p>
                                        <p><b>Hãng:</b> {product.brand}</p>
                                        <span>
                                            <span>Giá: {product.price}$</span>
                                        </span>
                                        <button style={{
                                            marginLeft: "-160px",
                                            marginTop: "62px"
                                        }} onClick={handleAddToCard} type="button" class="btn btn-fefault cart">
                                            <i class="fa fa-shopping-cart"></i>
                                            Thêm vào giỏ hàng
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductDetail;
