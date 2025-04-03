import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url){
    
      let [products, setProducts] = useState([]);
      let [error, setError] = useState("");
      let [isLoading, setIsLoading] = useState(false);

     useEffect(() => {
      let fetchApi = async () => {
        setIsLoading(true);
        try {
        //    let response = await fetch(url);
        let response = await axios.get(url);
           setProducts(response.data);
        } catch (error) {
           setError(error.message);
        } finally {
           setIsLoading(false);
        }
      };

      fetchApi();
     }, [url]);

     return { products, error, isLoading,setProducts };
}
export default useFetch;