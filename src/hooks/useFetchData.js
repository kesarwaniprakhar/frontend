import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const useFetchData = (fetchFunc) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  const [error, setError] = useState(null);

  const page = useSelector((state) => state.pagination.page);

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await dispatch(fetchFunc(page)); //dispatch doesn't return a promise it is synchronous but in this context, awaiting for fetchFunc to complete.
        setFetchedData(data.products);
      } catch (e) {
        console.log("some error occurred in useFetchedData", e);

        toast.error("Something went wrong!", {
          position: "bottom-left",
        });
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [fetchFunc, page, dispatch]);

  return { isLoading, fetchedData, error };
};

export default useFetchData;
