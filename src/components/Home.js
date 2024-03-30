import MetaData from "./layout/Metadata";
import useFetchData from "../hooks/useFetchData";
import { getProductsThunk } from "../slices/productSlice";
import Loader from "./layout/Loader";
import Product from "./product/Product";
import { useEffect } from "react";
import Pagination from "./layout/Pagination";

function Home(props) {
  const {
    isLoading,
    fetchedData: products,
    error,
  } = useFetchData(getProductsThunk);

  console.log("products", products);

  return (
    <>
      <MetaData title="Buy Best Products Online"></MetaData>

      {isLoading && <Loader></Loader>}

      {!isLoading && products?.length && (
        <div className="row">
          <div className="col-12 col-sm-6 col-md-12">
            <h1 id="products_heading" className="text-secondary">
              Latest Products
            </h1>

            <section id="products" className="mt-5">
              <div className="row">
                {products?.map((item, index) => {
                  return <Product key={index} item={item} />;
                })}
              </div>
            </section>
          </div>
        </div>
      )}

      <Pagination></Pagination>
    </>
  );
}

export default Home;
