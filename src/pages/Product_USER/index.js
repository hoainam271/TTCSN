import { useState,useEffect } from "react";
import { get } from "../../utils/request";
import { getProductList } from "../../services/productService";
import ProductItem from "./productItem";
import "./products.scss"
export function Products(){
    const [data,setData]= useState([]);
    useEffect(() => {
        const fetchApi = async () =>{
            const response= await getProductList();
            setData(response);
        }
        fetchApi();
    },[])
    console.log(data);
    
    return (
        <>
        <h2>DANH SÁCH SẢN PHẨM</h2>
        <>
        {data.length >0 && (
            <div className="product">
            {data.map((item) =>(
                <ProductItem key={item.id} item={item}/>
            ))}
        </div>
        )}
        
        </>
        </>
    )
}
export default Products;