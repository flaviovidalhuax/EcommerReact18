import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../components/home/Categories";
import ProductCard from "../components/home/ProductCard";
import { getAllproducts } from "../store/slices/products.slice";
import "./styles/Home.css";

const Home = () => {
  const [nameProduct, setNameProduct] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameProduct(e.target.nameProducts.value);
  };

  useEffect(() => {
    dispatch(getAllproducts());
  }, []);

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    const newProducts = products.filter(
      (product) =>
        product.title.includes(nameProduct) &&
        (product.category.id === category || !category)
    );
    setFilterProducts(newProducts);
  }, [nameProduct, category]);

  return (
    <main className="home">
      <form className="home__form" onSubmit={handleSubmit}>
        <div className="home__form-div">
          <input
            className="home__form-input"
            type="text"
            id="nameProduct"
            placeholder="What are you looking for?"
          />
          <button className="home__form-btn">
            <i className="bx bx-search"></i>
          </button>
        </div>
      </form>
      <Categories setCategory={setCategory} />
      <section className="home__containerProducts">
        {filterProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

export default Home;
