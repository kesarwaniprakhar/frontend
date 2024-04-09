import { Link } from "react-router-dom"
import StarRatings from "react-star-ratings"
import { current as currentProduct } from '../../slices/productSlice'
import { useDispatch } from "react-redux"

function Product({ item, columnSize }) {

    const dispatch = useDispatch()

    const onLinkClickHandler = (event) => {
        dispatch(currentProduct(item))
    }

    return (
        <div className={`col-sm-12 col-md-6 col-lg-${columnSize} my-3`}>
            <div className="card p-3 rounded">
                <img
                    className="card-img-top mx-auto"
                    src={item?.images[0].url}
                    alt={item?.name}
                />
                <div
                    className="card-body ps-3 d-flex justify-content-center flex-column"
                >
                    <h5 className="card-title">
                        <Link to={`/products/${item._id}`} onClick={onLinkClickHandler}>{item.name}</Link>
                    </h5>
                    <div className="ratings mt-auto d-flex">
                        <StarRatings
                            rating={item.ratings}
                            starRatedColor="#ffb829"
                            numberOfStars={5}
                            name="rating"
                            starDimension="1.8rem"
                            startSpacing="1px"
                        />
                    </div>
                    <span>Reviews ({item.numOfReviews})</span>
                    <p className="card-text mt-2">${item.price}</p>
                    <Link to={`/products/${item._id}`} id="view_btn" className="btn btn-block" onClick={onLinkClickHandler}>
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Product