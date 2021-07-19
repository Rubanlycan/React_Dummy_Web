import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addNewProduct } from "../Redux/Product/ProductActions";
import { useDispatch } from "react-redux";

const AddProduct = () => {
  const [form, setForm] = React.useState({ name: "", price: "" });

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(addNewProduct(form));
    setForm({ name: "", price: "" });
    alert("Added successfully");
  };
  const changehandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <Form className="mx-auto w-50 mt-5">
      <h1 className="header fw-bold text-center">Maximess</h1>
      <Form.Group className="mb-3">
        <Form.Label>Item Name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          value={form.name}
          onChange={changehandler}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Item Price</Form.Label>
        <Form.Control
          type="text"
          name={"price"}
          value={form.price}
          onChange={changehandler}
        />
      </Form.Group>

      <Button
        onClick={onSubmit}
        variant="primary"
        className={"mx-3"}
        type="button"
      >
        Add Product
      </Button>
      <Link to="/viewProduct"> View Product</Link>
    </Form>
  );
};

export default AddProduct;
