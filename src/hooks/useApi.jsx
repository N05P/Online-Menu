import React, { useEffect } from 'react'
import { useState } from 'react'

const useApi = () => {

    const [apidata,setData] = useState([])

    useEffect(()=>{
        RecipieApi()
   },[]);

    async function RecipieApi(){
        try{
            const api = await fetch("https://dummyjson.com/recipes");
            const data = await api.json();
            setData(data.recipes);
        }
        catch(error){
            console.log(error);
        }

    }
  return apidata;
}

export default useApi