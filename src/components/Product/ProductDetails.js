import { useState } from "react"
import { useLocation } from "react-router-dom"
import StarRatings from "react-star-ratings"
import { useSelector } from 'react-redux';

function ProductDetails(props) {

const item = useSelector((state) => state.product.currentProduct)

const [activeImg, setActiveImg] = useState(item?.images[0]?.url)

console.log("item in ProductDetails", activeImg)

return (
    <div className="row d-flex justify-content-around">
        <div className="col-12 col-lg-5 img-fluid" id="product_image">
            <div className="p-3">
                <img
                    className="d-block w-100"
                    src={activeImg}
                    alt={item?.name}
                    width="340"
                    height="390"
                />
            </div>
            <div className="row justify-content-start mt-5">
            {
                item.images.map((itemImage, index)=>{
                    return (                
                        <div className="col-2 ms-4 mt-2" onClick={()=>{setActiveImg(itemImage?.url)}}>
                            <a role="button">
                                <img
                                    className="d-block border rounded p-3 cursor-pointer"
                                    height="100"
                                    width="100"
                                    src={itemImage?.url}
                                    alt={item.name}
                                />
                            </a>
                        </div>
                )
                })

            }
            </div>
        </div>

        <div className="col-12 col-lg-5 mt-5">
            <h3>Lorem Ipsum</h3>
            <p id="product_id">Product # item?._id</p>

            <hr />

            <div className="d-flex">
                <StarRatings
                    rating={item?.ratings}
                    starRatedColor="#ffb829"
                    numberOfStars={5}
                    name="rating"
                    starDimension="1.8rem"
                    startSpacing="1px"
                />
                <span id="no-of-reviews" className="pt-1 ps-2"> ({item?.numOfReviews})Reviews </span>
            </div>
            <hr />

            <p id="product_price">{item?.price}</p>
            <div className="stockCounter d-inline">
                <span className="btn btn-danger minus">-</span>
                <input
                    type="number"
                    className="form-control count d-inline"
                    value="1"
                    readonly
                />
                <span className="btn btn-primary plus">+</span>
            </div>
            <button
                type="button"
                id="cart_btn"
                className="btn btn-primary d-inline ms-4"
                disabled=""
            >
                Add to Cart
            </button>

            <hr />

            <p>
                Status: <span id="stock_status" className={item?.stock > 0 ? "greenColor": "redColor"}>In Stock</span>
            </p>

            <hr />

            <h4 className="mt-2">Description:</h4>
            <p>{item?.description}</p>
                <hr />
            <p id="product_seller mb-3">Sold by: <strong>${item?.seller}</strong></p>
        
                <div className="alert alert-danger my-5" type="alert">
                    Login to post your review.
                </div>
        </div>
    </div>
    )
} 
    
export default ProductDetails