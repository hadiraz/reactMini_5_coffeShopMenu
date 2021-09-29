import React, { useContext, useEffect, useState } from 'react'
import Data from "./data"
import {CurrentCategoryValue , CurrentCategorySet} from "./App"
function Categories() {
    const currentCategory = useContext(CurrentCategoryValue);
    const setCurrent = useContext(CurrentCategorySet);

    const checkCategories = () => {
        let categories = ["all"] ;
        Data.map((value,index)=>{
            if(categories.indexOf(value.category) === -1){
                categories.push(value.category);
            }
        });
        return categories ;
    }
   
    const [allCategory , setCategory] = useState(checkCategories);

    useEffect(()=>{
            setCurrent(allCategory[0])
        },[])

    const changeCategory = (e) => {
        const mode = e.target.innerText;
        setCurrent(mode);
        e.target.classList.add("active")
    }
    return (
        <ul className='categories-container'>
            {
                allCategory.map((value,index)=>{
                    return value === currentCategory ?
                        <li key={index} className={`category-item active`}  onClick={e=>changeCategory(e)}>
                        {value}
                    </li>
                    :
                    <li key={index} className={`category-item`}  onClick={e=>changeCategory(e)}>
                    {value}
                </li>
                })
            }
        </ul>
    )
}

export default Categories
