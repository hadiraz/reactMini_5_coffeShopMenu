import React , {useContext} from 'react'
import Data from "./data"
import {CurrentCategoryValue , CurrentCategorySet} from "./App"
function Menu() {
    const currentCategory = useContext(CurrentCategoryValue);
    
    const setCurrent = useContext(CurrentCategorySet);
    return (
        <section className="menu-item-container">
            <ul className="menu-item-box">
                {
                    Data.map((value,index)=>{
                         if(value.category === currentCategory || currentCategory === "all"){
                        return (<li key={value.id}>
                                <div className="image-box">
                                    <img src={value.img} alt={value.title}/>
                                </div>
                                <div className="item-detail">
                                    <div className="top-detail">
                                        <p className="item-name">
                                            {value.title}
                                        </p>
                                        <p className="item-price">
                                            ${value.price}
                                        </p>
                                    </div>
                                    <div className="bottom-detail">
                                        <p>{value.desc}</p>
                                    </div>
                                </div>
                        </li>)
                       }
                    })
                }
            </ul>
        </section>
    )
}

export default Menu
