import MetaData from "./layout/Metadata"
import useFetchData from "../hooks/useFetchData"
import { getProductsThunk } from "../slices/productSlice"
import Product from "./Product/Product"
import { useSelector } from "react-redux"


function Home(props) {

  const { isLoading, fetcheddata: products, error } = useFetchData(getProductsThunk)

  console.log("products", products)

  return (

    <>
      <MetaData title='Buy Best Products Online'></MetaData>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-12">
          <h1 id="products_heading" className="text-secondary">Latest Products</h1>

          <section id="products" className="mt-5">
            <div className="row">
                {
                  products?.map((item, index) => {
                    return (
                      <Product key={index} item={item}/>
                      )
                  })
                }

            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Home