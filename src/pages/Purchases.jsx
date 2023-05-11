import axios from "axios";
import React, { useEffect, useState } from "react";
import PurchasesCard from "../components/purchases/PurchasesCard";
import getConfig from "../utils/configAxios";
import "./styles/Purchases.css";

const Purchases = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/purchases";
    axios
      .get(URL, getConfig())
      .then((res) => {
        const newPurchase = res.data.data.purchases.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setPurchases(newPurchase);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="purchases">
      <h2>My purchases</h2>
      <section className="purchases__list">
        {purchases.map((purchase) => (
          <PurchasesCard key={purchase.id} purchase={purchase} />
        ))}
      </section>
    </main>
  );
};

export default Purchases;
