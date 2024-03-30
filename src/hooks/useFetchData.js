import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify"

const useFetchData = ( fetchFunc ) => {
    const [ isLoading, setIsLoading ] = useState(false)
    const [ fetchedData, setFetchedData ] = useState(null);
    const [ error, setError ] = useState(null)

    const dispatch = useDispatch()

    useEffect(()=>{
        const getData = async () => {
            
            try{
                setIsLoading(true)
                const data = await dispatch(fetchFunc())  //dispatch doesn't return a promise it is synchronous but in this context, awaiting for fetchFunc to complete.
                setFetchedData(data)
                
            }catch(e){
                console.log("some error occurred in useFetchedData", e)
                
                toast.error("Something went wrong!", {
                    position: 'bottom-left'
                })

            }finally{
                setIsLoading(false)
            }
        }
            
        getData()
    
    },[fetchFunc])

    return {isLoading, fetchedData, error}
}

export default useFetchData