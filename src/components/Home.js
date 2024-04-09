import MetaData from "./layout/Metadata";
import useFetchData from "../hooks/useFetchData";
import { getProductsThunk } from "../slices/productSlice";
import Loader from "./layout/Loader";
import Product from "./product/Product";
import Pagination from "./layout/Pagination";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Filters from "./layout/Filters";

function Home(props) {

  const [params] = useSearchParams()

  const page = useSelector((state) => state.pagination.page);
  const keyword = params?.get("name") || '';


  const queryParams = params.toString()

  const {
    isLoading,
    fetchedData: products,
    error,
  } = useFetchData(getProductsThunk, queryParams);

  console.log("products", products);

  return (
    <>
      <MetaData title="Buy Best Products Online"></MetaData>

      {isLoading && <Loader></Loader>}

      {!isLoading && products?.length && (
        <div className="row">
          { keyword && (
            <div className="col-6 col-md-3 mt-5">
              <Filters></Filters>
            </div>
          )}
          <div className={keyword? "col-6 col-md-9" : "col-6 col-md-12"}>
            <h1 id="products_heading" className="text-secondary">
             {keyword.length ? products.length + " Products found for keyword: " + keyword : "Latest Products"}
            </h1>

            <section id="products" className="mt-5">
              <div className="row">
                {products?.map((item, index) => {
                  return <Product key={index} item={item} columnSize={keyword.length ? 4 : 3}/>;
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
