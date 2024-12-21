import { NavLink, useNavigate } from "react-router-dom";
import "./style.scss"
import "./style.css"
import { useEffect, useState } from "react";
import { getProductList } from "../../services/productService";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../actions/cart";
export function Home() {
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetchApi = async () => {
			const response = await getProductList();
			setData(response);
		}
		fetchApi();
	}, [])
	console.log(data)

	const dispatch = useDispatch();;
	const cart = useSelector(state => state.cartReducer);

	const handleAddToCard = (item) => {
		if (cart.some(itemCart => itemCart.id === item.id)) {
			dispatch(updateQuantity(item.id, 1)); // Cập nhật số lượng
			console.log("update");
		} else {
			dispatch(addToCart(item.id, item)); // Thêm mới sản phẩm vào giỏ hàng
		}
	};
	const [randomItems, setRandomItems] = useState({ firstBatch: [], secondBatch: [] });
	const getRandomItems = (data, num) => {
		return [...data].sort(() => Math.random() - 0.5).slice(0, num);
	};

	// Sử dụng useEffect để chỉ chạy khi lần đầu tiên component render
	useEffect(() => {
		const firstBatch = getRandomItems(data, 3); // Lấy 3 sản phẩm đầu tiên
		const secondBatch = getRandomItems(data.filter(item => !firstBatch.includes(item)), 3); // Lấy 3 sản phẩm không trùng với firstBatch

		setRandomItems({ firstBatch, secondBatch });
	}, [data]); // Chạy lại khi `data` thay đổi

	const navigate = useNavigate();
		const handleDetail = (id) => {
			navigate(`/products/${id}`); // Chuyển sang trang chi tiết với ID
			window.scrollTo(0, 0); // Cuộn lên đầu trang
		};
	return (
		<>
			<section id="slider">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div id="slider-carousel" class="carousel slide" data-ride="carousel">
								<ol class="carousel-indicators">
									<li data-target="#slider-carousel" data-slide-to="0" class="active"></li>
									<li data-target="#slider-carousel" data-slide-to="1"></li>
									<li data-target="#slider-carousel" data-slide-to="2"></li>
								</ol>

								<div class="carousel-inner">
									<div class="item active">
										<div class="col-sm-6">
											<h1><span>NHÓM 14 </span>AUTO</h1>
											<h2>Chuyên các sản phẩm phụ kiện auto</h2>
											<p>Chúng tôi chuyên cung cấp các sản phẩm, linh kiện ô tô</p>
											<button type="button" class="btn btn-default get">NHẬN NGAY</button>
										</div>
										<div class="col-sm-6">
											<img src="images/home/anhdong1.png" class="girl img-responsive" alt="" />
										</div>
									</div>
									<div class="item">
										<div class="col-sm-6">
											<h1><span>NHÓM 14 </span>AUTO</h1>
											<h2>Chuyên các sản phẩm phụ kiện auto</h2>
											<p>Chúng tôi đem đến những sản phẩm tốt nhất tới khách hàng </p>
											<button type="button" class="btn btn-default get">NHẬN NGAY</button>
										</div>
										<div class="col-sm-6">
											<img src="images/home/anhdong2.png" class="girl img-responsive" alt="" />

										</div>
									</div>

									<div class="item">
										<div class="col-sm-6">
											<h1><span>NHÓM 14 </span>AUTO</h1>
											<h2>Chuyên các sản phẩm phụ kiện auto</h2>
											<p>Hãy liên hệ với chúng tôi để biết thêm thông tin chi tiết</p>
											<button type="button" class="btn btn-default get">NHẬN NGAY</button>
										</div>
										<div class="col-sm-6">
											<img src="images/home/anhdong3.png" class="girl img-responsive" alt="" />

										</div>
									</div>

								</div>

								<a href="#slider-carousel" class="left control-carousel hidden-xs" data-slide="prev">
									<i class="fa fa-angle-left"></i>
								</a>
								<a href="#slider-carousel" class="right control-carousel hidden-xs" data-slide="next">
									<i class="fa fa-angle-right"></i>
								</a>
							</div>

						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="container">
					<div className="row">
						<div className="col-sm-3">
							<div className="left-sidebar">
								<h2>DANH MỤC SẢN PHẨM</h2>
								<div className="panel-group category-products" id="accordian">
									<div className="panel panel-default">
										<div className="panel-heading">
											<h4 className="panel-title">
												<a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
													<span className="badge pull-right"></span>
													<NavLink to="products_ptd" className="style" >Phụ tùng điện</NavLink>
												</a>
											</h4>
										</div>

									</div>
									<div className="panel panel-default">
										<div className="panel-heading">
											<h4 className="panel-title">
												<a data-toggle="collapse" data-parent="#accordian" href="#mens">
													<span className="badge pull-right"></span>
													<NavLink to="products_ptdc" className="style">Phụ tùng động cơ</NavLink>
												</a>
											</h4>
										</div>

									</div>
									<div className="panel panel-default">
										<div className="panel-heading">
											<h4 className="panel-title">
												<a data-toggle="collapse" data-parent="#accordian" href="#womens">
													<span className="badge pull-right"></span>
													<NavLink to="products_ptg" className="style" >Phụ tùng gầm</NavLink>
												</a>
											</h4>
										</div>

									</div>
									<div className="panel panel-default">
										<div className="panel-heading">
											<h4 className="panel-title ">
												<a data-toggle="collapse" data-parent="#accordian" href="#womens">
													<span className="badge pull-right"></span>
													<NavLink className="style" to="products_ptk" >Phụ tùng khác</NavLink>
												</a>
											</h4>
										</div>

									</div>


								</div>


							</div>
						</div>
						<div className="col-sm-9 padding-right">
							<div className="features_items">
								<h2 className="title text-center">Các sản phẩm nổi bật</h2>
								<div className="col-sm-4">
									<div className="product-image-wrapper hnd">
										<div className="single-products">
											<div className="productinfo text-center">
												{data.slice(0, 3).map(item => (
													<div className="product1" key={item.id}>
														<img className="product__image1" src={item.image_url} alt={item.name} />
														<h2 className="product__price1">Giá: {item.price}$</h2>
														<p className="product__title1" style={{cursor:"pointer"}} onClick={() => handleDetail(item.id)}>{item.name}</p>
														<button onClick={() => handleAddToCard(item)}>
															<i className="fa fa-shopping-cart button-1" /> Thêm vào giỏ hàng
														</button>
													</div>
												))}
											</div>

										</div>

									</div>
								</div>
							</div>

							<div className="recommended_items">
								<div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
									<div className="carousel-inner">
										<div className="item active">
											{randomItems.firstBatch.map(item => (
												<div className="col-sm-4">
													<div className="product-image-wrapper">
														<div className="single-products">
															<div className="productinfo text-center gan">
																<div className="product2" key={item.id}>
																	<img className="product__image2" src={item.image_url} alt={item.name} />
																	<h2 className="product__price2">Giá: {item.price}$</h2>
																	<p className="product__title2" style={{cursor:"pointer"}} onClick={() => handleDetail(item.id)}>{item.name}</p>
																	<button onClick={() => handleAddToCard(item)}><i className="fa fa-shopping-cart" />  Thêm vào giỏ hàng</button>

																</div>

															</div>
														</div>
													</div>
												</div>
											))}

										</div>
										<div className="item">
											{randomItems.secondBatch.map(item => (
												<div className="col-sm-4">
													<div className="product-image-wrapper">
														<div className="single-products">
															<div className="productinfo text-center gan">
																<div className="product2" key={item.id}>
																	<img className="product__image2" src={item.image_url} alt={item.name} />
																	<h2 className="product__price2">Giá: {item.price}$</h2>
																	<p className="product__title2"  style={{cursor:"pointer"}} onClick={() => handleDetail(item.id)}>{item.name}</p>
																	<button onClick={() => handleAddToCard(item)}><i className="fa fa-shopping-cart" />  Thêm vào giỏ hàng</button>

																</div>

															</div>
														</div>
													</div>
												</div>
											))}
										</div>
									</div>
									<a className="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
										<i className="fa fa-angle-left" />
									</a>
									<a className="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
										<i className="fa fa-angle-right" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* {data.length >0 && (
            <div className="product">
                {data.map((item) => (
                    <ProductItem key={item.id} item={item} />
                ))}
            </div>
        )} */}
		</>
	)
}
export default Home;