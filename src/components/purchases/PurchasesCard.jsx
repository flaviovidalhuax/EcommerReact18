import React from "react";
import { changeDateFormat } from "../../utils/date";
import ProductPurchase from "./ProductPurchase";
import "./styles/PurchasesCard.css";

const PurchasesCard = ({ purchase }) => {
  return (
    <article className="purchasesCard">
      <h2 className="purchasesCard__date">
        {changeDateFormat(purchase.createdAt)}
      </h2>
      <hr className="purchasesCard__line" />
      <section className="purchasesCard__list">
        {purchase.cart.products.map((productPurchase) => (
          <ProductPurchase
            key={productPurchase.id}
            productPurchase={productPurchase}
          />
        ))}
      </section>
    </article>
  );
};

export default PurchasesCard;
