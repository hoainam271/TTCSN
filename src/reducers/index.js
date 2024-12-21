import { combineReducers} from "redux"
import loginReducer from "./login";
import cartReducer from "./cart";
import productReducer from "./product";

const allReducer = combineReducers({
    loginReducer,
    cartReducer,
    productReducer
    // Thêm nhiều reducer ở đây
})

export default allReducer;