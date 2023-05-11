import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductInfo from "../components/productid/ProductInfo";
import SimilarProducts from "../components/productid/SimilarProducts";
import "./styles/ProductId.css";

const ProductId = () => {
  const [product, setProduct] = useState();
  const [categories, setCategories] = useState();
  const { id } = useParams();
//https://e-commerce-api.academlo.tech
  useEffect(() => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/products/${id}`;
    axios
      .get(URL)
      .then((res) => {
        setProduct(res.data.data.product);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const URL =
      "https://e-commerce-api.academlo.tech/api/v1/products/categories";
    axios
      .get(URL)
      .then((res) => setCategories(res.data.data.categories))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="productId">
      <section className="productId__path">
        <Link to="/" className="productId__home">
          Home
        </Link>
        <i className="productId__arrow bx bx-chevron-right"></i>
        <h4 className="productId__nameProduct">{product?.title}</h4>
      </section>
      <ProductInfo product={product} />
      <SimilarProducts product={product} categories={categories} />
    </article>
  );
};

export default ProductId;
