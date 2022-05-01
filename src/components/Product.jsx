import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import {NavLink} from 'react-router-dom';

const Product = (props) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    })();
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  const filterProducts = (items) => {
    const particularProduct = data.filter((x) => x.category === items);
    setFilter(particularProduct);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("electronics")}
          >
            Electronics
          </button>
        </div>
        {filter.map((product) => {
          return (
            <div className="col-md-3 mb-4">
              <div class="card h-100 text-center p-4" key={product.id}>
                <img
                  src={product.image}
                  class="card-img-top"
                  alt={product.title}
                  height="250px"
                />
                <div class="card-body">
                  <h5 class="card-title text-truncate">{product.title}</h5>
                  <p class="card-text mb-0 fw-bold lead">$ {product.price}</p>
                  <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div className="container py-5 my-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="fw-bolder text-center display-6">Latest Product</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};
export default Product;
