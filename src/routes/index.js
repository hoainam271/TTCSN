
import PrivateRoutes from "../components/PrivateRoutes";
import LayoutDefault from "../layout/LayoutDefault";
import Home from "../pages/Home"
import About from "../pages/About";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import Product from "../pages/EditProduct_ADMIN";
import Products from "../pages/Product_USER";
import EditProduct from "../pages/EditProduct_ADMIN";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Register from "../pages/Resgister";
import PhuTungDien from "../pages/PhuTungDien";
import PhuTungDongCo from "../pages/PhuTungDongCo";
import PhuTungGam from "../pages/PhuTungGam";
import PhuTungKhac from "../pages/PhuTungKhac";
import { patch } from "../utils/request";
import SearchComponent from "../pages/Search";
import ProductDetail from "../pages/Product_USER/ProductDetail";

export const routes= [
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                path: "/",
                element: <Home />
            },{
                path:"products",
                element:<Products />
            },{
                path:"about",
                element:<About />
            },{
                path:"contact",
                element:<Contact />
            },
            {
                path:"login",
                element:<Login />
            },
            {
                path:"logout",
                element:<Logout />
            },
            {
                path:"register",
                element:<Register />
            },
            {
                path:"cart",
                element:<Cart />
            },
            {
                path:"edit",
                element:<EditProduct />
            },
            {
                path:"products_ptd",
                element:<PhuTungDien />
            },
            {
                path:"products_ptdc",
                element:<PhuTungDongCo />
            },
            {
                path:"products_ptg",
                element:<PhuTungGam />
            },
            {
                path:"products_ptk",
                element:<PhuTungKhac />
            },{
                path:"search",
                element:<SearchComponent />
            },{
                path:"products/:id",
                element:<ProductDetail />

            }
        ]
    }
]
