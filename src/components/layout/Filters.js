import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import categories_constants from "../../constants";
import { useRef } from "react";
import { useEffect } from "react";

function Filters() {
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');

  console.log("min & max", minValue, maxValue)

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  setPriceQueryParams(searchParams, "price[gte]", minValue)
  setPriceQueryParams(searchParams, 'price[lte]', maxValue);

  useEffect(()=>{
    let params = new URLSearchParams(window.location.href)
    console.log("complete search params", params.get('price[gte]'), params.get('price[lte]'))
    setMinValue(params.get('price[gte]'))
    setMaxValue(params.get('price[lte]'))
  },[])


  const checkBoxClickHandler = (event) => {

    let checkBoxes = document.getElementsByName(event.target.name)

    checkBoxes.forEach((ele)=>{
      if(ele !== event.target) ele.checked = false
    })

    if(event.target.checked){
      searchParams.set(event.target.name, event.target.value)
    }else{
      searchParams.delete(event.target.name)
    }

    navigate(window.location.pathname + '?' + searchParams.toString())
    
  };

  const submitHandler = (event) => {
    event.preventDefault();

    navigate(window.location.pathname + '?' + searchParams.toString())
    
  };

  const defaultChecked = (checkBoxType, checkBoxValue) => {
    const value = searchParams.get(checkBoxType)
    if(value === checkBoxValue) return true
    return false
  }

  return (
    <div className="border p-3 filter">
      <h3>Filters</h3>
      <hr />
      <h5 class="filter-heading mb-3">Price</h5>
      <form
        id="filter_form"
        class="px-2"
        onSubmit={submitHandler}
      >
        <div class="row">
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Min ($)"
              name="min"
              value={minValue}
              onChange={(event) => setMinValue(event.target.value)}
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Max ($)"
              name="max"
              value={maxValue}
              onChange={(event) => setMaxValue(event.target.value)}
            />
          </div>
          <div class="col">
            <button
              type="submit"
              class="btn btn-primary"
            >
              GO
            </button>
          </div>
        </div>
      </form>
      <hr />
      <h5 class="mb-3">Category</h5>

        {
            categories_constants.map((category, index)=>{
                return (
                    <div key={index} class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="category"
                      id={`checkbox` + index}
                      defaultChecked={defaultChecked('category', category)}
                      value={category}
                      onClick={checkBoxClickHandler}
                    />
                    <label class="form-check-label" htmlFor={`checkbox` + index}>
                      {category}
                    </label>
                  </div>
                )
            })
        }

      <hr />
      <h5 class="mb-3">Ratings</h5>

      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          name="ratings"
          id="check7"
          value="5"
        />
        <label class="form-check-label" for="check7">
          <span class="star-rating">★ ★ ★ ★ ★</span>
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          name="ratings"
          id="check8"
          value="4"
        />
        <label class="form-check-label" for="check8">
          <span class="star-rating">★ ★ ★ ★ ☆</span>
        </label>
      </div>
    </div>
  );
}

const setPriceQueryParams = (searchParams, key, value) => {

    console.log("all searchParmas", searchParams.toString())

  if (value && searchParams.has(key)) {
    searchParams.set(key, value);
  } else if (value && !searchParams.has(key)) {
    searchParams.append(key, value);
  } else {
    searchParams.delete(key);
  }

  
};

export default Filters;
