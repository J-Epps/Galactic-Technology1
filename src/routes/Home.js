import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";

export default function Home(props) {
  let products = [
    props.allProducts[0],
    props.allProducts[12],
    props.allProducts[24]
  ];

  const [imgHeight, setImgHeight] = useState();
  const imageRef = React.createRef();

  const [imgHover, setImgHover] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (
        imageRef.current &&
        imageRef.current.getBoundingClientRect().height > 0
      ) {
        setImgHeight(imageRef.current.getBoundingClientRect().height);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const handleAddToCartClick = (product) => {
    let copyProduct = JSON.parse(JSON.stringify(product));
    copyProduct.qty = 1;
    props.handleAddToCartClick(copyProduct);
  };

  return (
    <div>
      <Hero />
      <div className="home">
        <div className="homeContent">
          <div className="homeTitle">Featured Products</div>
          <div className="categoryListingsWrapper">
            {Object.keys(products).map((product, i) => (
              <Link
                to="/product"
                onClick={() => props.handleProductClick(products[i])}
              >
                <div className="catProdListing" key={product.id}>
                  <div
                    className="catImageContainer"
                    style={{ height: `${imgHeight}px` }}
                  >
                    <img
                      src={products[product].image}
                      className="catProdImage"
                      alt={products[product].name}
                      ref={imageRef}
                      onMouseEnter={() =>
                        setImgHover([true, products[product]])
                      }
                      onMouseLeave={() => setImgHover(false)}
                    ></img>
                    <Link
                      onClick={() => handleAddToCartClick(products[product])}
                    >
                      <div
                        className="catAddToCart"
                        id={products.name}
                        onMouseEnter={() =>
                          setImgHover([true, products[product]])
                        }
                        onMouseLeave={() => setImgHover(false)}
                        style={
                          imgHover && imgHover[1] === products[product]
                            ? { transform: "translateY(-50px)" }
                            : { transform: "none" }
                        }
                      >
                        ADD TO CART +
                      </div>
                    </Link>
                  </div>
                  <div
                    className="catProdNameandPrice"
                    onMouseEnter={() => setImgHover([true, products[product]])}
                    onMouseLeave={() => setImgHover(false)}
                  >
                    <div className="catProdName">{products[product].name}</div>
                    <div className="catProdPrice">
                      ${products[product].price}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
