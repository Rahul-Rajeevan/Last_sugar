import React from "react";
import styles from "./ProductCard.module.css";
import "./products.css"

const ProductCard = () => {
  return (
    <div class="card">
      <img
      style={{ width: "160px",display:"block",margin:"auto"}}
        src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F01_332ccf25-8e0f-4b40-be7b-3e322eeeb653.jpg%3Fv%3D1712590471&w=384&q=75"
        class="card-img-top"
        alt="..."
        loading="lazy"
      />
      <div class="card-body">
        <p>Matte Attack Transferproof Lipstick</p>
        <p>15 shades</p>
        <h5>₹749</h5>
        <div class={styles.card_btn}>
          <div className={styles.box}>
            <span class="material-symbols-outlined">favorite</span>
          </div>
          <a href="#" class="btn btn-dark px-4">
            SELECT SHADE
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
