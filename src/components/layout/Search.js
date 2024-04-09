import styles from '../../css/header.module.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Search(){

    const [keyword, setKeyword] = useState('')
    const navigate = useNavigate()

    const onSubmitHandler = (event) => {
        
        event.preventDefault()

        if(keyword.trim()){
            navigate(`?name=${keyword}`)
        }else{
            navigate(`/`)
        }
    }

    return (
        <form onSubmit={onSubmitHandler}>
        <div className={styles["input-group"]}>
          <input
            type="text"
            id={styles.search_field}
            aria-describedby="search_btn"
            className="form-control"
            placeholder="Enter Product Name ..."
            name="keyword"
            value={keyword}
            onChange={(event)=>setKeyword(event.target.value)}
          />
          <button id={styles.search_btn} className="btn" type="submit">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </form>
    )
}

export default Search