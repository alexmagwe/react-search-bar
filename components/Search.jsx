import React,{useState,useEffect} from 'react';
import SearchBar from './SearchBar.jsx'
import  Results from './Results'
import {useSearch} from './hooks/myhooks'

const Search = (props) => {
    let [ref,desc]=['Unit code','name']//change this to what your data returns,ref is what will be searched for as user types, desc is what will bew displayed
    const [results,setResults]=useState([])
    const [searchTerm,setSearchTerm]=useState('')
    useSearch(searchTerm,props.source,setResults)

     const handleSearch=e=>{
        setSearchTerm(e.target.value)
     }

    const handleClose = (el) => {        
        setResults([])
        setSearchTerm('')
    };
    return (
        <div className='search-container'>
            <SearchBar form={{handleSearch,searchTerm,ref}}/>
            {results.length>0 && searchTerm.length>0?(<Results props={{handleClose,results,ref,desc}}/>):null}
        </div>
    );
};

export default Search;
