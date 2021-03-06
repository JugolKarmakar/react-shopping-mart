import React from "react";

import { Button, Card, CardImg } from "react-bootstrap";
import ReactModal from "../ReactModal/ReactModal";
import "./Product.css";

const Product = (props) => {
  const { addToCart } = props;
  const { image, title } = props.product;
  return (
    <div className="col-md-4 g-4">
      <Card className="shadow-lg border-0 p-3 h-100" style={{ width: "18rem" }}>
        <CardImg
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="w-50 mx-auto"
          variant="top"
          src={image}
        />
        <Card.Body>
          <Card.Title className="mb-3">{title}</Card.Title>
          <div className="d-flex justify-content-around mt-auto">
            <Button onClick={addToCart} className="add-cart">
              Add To Cart
            </Button>
            <ReactModal product={props.product}></ReactModal>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
