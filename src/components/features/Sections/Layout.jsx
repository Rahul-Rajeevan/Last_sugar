import React from "react";
import BreadCrumb from "../../common/Breadcrumbs/BreadCrumb";
import "./layout.css";
import ProductCard from "../../common/ProductCards/ProductCard";

const Layout = ({ image, products }) => {
  return (
    <div>
      <section>
        <div class="containers">
          <img src={image} alt="" />
        </div>
      </section>
      <section>
        <div class="containers">
          <BreadCrumb list={["Home", "Lips"]} />
        </div>
      </section>
      <main>
        <div class="containers" id="products_section">
          <section>
            <div class="dropdown">
              <button
                class="btn btn-dark dropdown-toggle px-5"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By
              </button>
              <ul class="dropdown-menu">
                <li>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Price: High To Low
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Price: Low To High
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Popularity: Customers Top Rated
                    </label>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Popularity: Bestsellers
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section>
            <div class="row row-cols-3 row-gap-3">
              {products.map((e) => (
                <div class="col">
                  <ProductCard />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Layout;
