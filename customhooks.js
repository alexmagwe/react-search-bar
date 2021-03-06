
import { useState,useEffect } from 'react'
import {Search} from '../helpers'

export const useSearch=(value,source,setResults,category="code",min=2)=>{

	useEffect(()=>{
    	if (value.length>3){
        let results=Search(value,source,category)
        console.log(results)
        setResults(results)
    }

},[value,source,category,setResults])

}


