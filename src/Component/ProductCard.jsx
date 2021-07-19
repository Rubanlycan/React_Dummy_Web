import React from "react";
import { Card, Button } from "react-bootstrap";

function ProductCard({ itemName, itemPrice, deleteProduct }) {
  return (
    <Card className="p-5 m-3 " style={{ width: "400px" }}>
      <Card.Body>
        <Card.Title>Item Name: {itemName}</Card.Title>

        <Card.Text>Item Price: {itemPrice}</Card.Text>
      </Card.Body>
      <Button onClick={deleteProduct} variant="danger" type="submit">
        Delete
      </Button>
    </Card>
  );
}

export default ProductCard;
