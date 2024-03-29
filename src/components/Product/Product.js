function Product({ item }) {

    return (
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-3 rounded">
                <img
                    className="card-img-top mx-auto"
                    src={item.images[0].url}
                    alt=""
                />
                <div
                    className="card-body ps-3 d-flex justify-content-center flex-column"
                >
                    <h5 className="card-title">
                        <a href="">{item.name}</a>
                    </h5>
                    <div className="ratings mt-auto d-flex">
                        <div className="product-rating">
                            <span className="product-star">&#9733;</span>
                            <span className="product-star">&#9733;</span>
                            <span className="product-star">&#9733;</span>
                            <span className="">&#9733;</span>
                            <span className="">&#9733;</span>
                        </div>
                    </div>
                    <span>Reviews (0)</span>
                    <p className="card-text mt-2">${item.price}</p>
                    <a href="" id="view_btn" className="btn btn-block">
                        View Details
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Product