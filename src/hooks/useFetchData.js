import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';

const useFetchData = ( fetchFunc ) => {
    const [ isLoading, setIsLoading ] = useState(false)
    const [ fetcheddata, setFetchedData ] = useState(null);
    const [ error, setError ] = useState(null)

    const dispatch = useDispatch()

    useEffect(()=>{
        const getData = async () => {
            
            try{
                setIsLoading(true)
                const data = await dispatch(fetchFunc())  //dispatch doesn't return a promise it is synchronous but in this context, awaiting for fetchFunc to complete.
                setFetchedData(data)
                
            }catch(e){
                console.log("some error occurred whie fetching inside useEffect", e)
                setError("Something went wrong!")
            }finally{
                setIsLoading(false)
            }
        }
            
        getData()
    
    },[fetchFunc])

    return {isLoading, fetcheddata, error}
}

export default useFetchData