  export const Search=(term,data,category)=>{
    try{
        let res=data.filter(item=>item[category].toLowerCase().match(term.toLowerCase()))
        return res

    }
    catch{
        return []
    }
       
  }
