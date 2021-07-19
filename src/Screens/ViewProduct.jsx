import React from "react";
import ProductCard from "../Component/ProductCard";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../Redux/Product/ProductActions";
const ViewProduct = () => {
  const { productInfo } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const onDelete = (index) => {
    dispatch(deleteProduct(index, productInfo));
    alert("deleted successfully");
  };
  return (
    <>
      <div className="row justify-content-center p-5 ">
        {productInfo.length > 0 ? (
          productInfo.map((item, index) => (
            <ProductCard
              key={index.toString()}
              itemName={item.name}
              itemPrice={item.price}
              deleteProduct={() => onDelete(index)}
              index={index}
            />
          ))
        ) : (
          <h1 className="m-5 text-center">no products added</h1>
        )}
      </div>

      <Link to="/addProduct" className={"mx-auto"}>
        <Button variant="primary" className={"w-25 m-5 "} type="button">
          Add Product here
        </Button>
      </Link>
    </>
  );
};

export default ViewProduct;
