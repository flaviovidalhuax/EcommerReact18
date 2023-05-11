import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles/Categories.css";

const Categories = ({ setCategory }) => {
  const [categories, setCategories] = useState([]);
  const [selectCategory, setSelectCategory] = useState("All products");
  const [showMenu, setShowMenu] = useState(false);

  const handleClickCategory = (id, name) => {
    setCategory(id);
    setSelectCategory(name);
    setShowMenu(!showMenu);
  };

  const handleClickMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const URL =
      "https://e-commerce-api.academlo.tech/api/v1/products/categories";
    axios
      .get(URL)
      .then((res) => setCategories(res.data.data.categories))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="categories">
      <div className="categories__content">
        <div className="categories__container">
          <span className="categories__selected">{selectCategory}</span>
          <i
            onClick={handleClickMenu}
            className="bx bxs-chevron-down categories__btn"
          ></i>
        </div>
        <ul className={`categories__list ${showMenu ? "active__menu" : ""}`}>
          <li
            className="categories__item"
            onClick={() => handleClickCategory("", "All products")}
          >
            All products
          </li>
          {categories?.map((category) => (
            <li
              className="categories__item"
              onClick={() => handleClickCategory(category?.id, category?.name)}
              key={category?.id}
            >
              {category?.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Categories;
