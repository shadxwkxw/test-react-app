import React from "react";
import cl from '../styles/style.module.css'
import Arrow from '../Img/arrow.svg'

const Menus = () => {
    return (
        <div className={cl.menus}>
            <div className={cl.games}>
                <div className={cl.dotText}>
                    <div className={cl.greenDot}></div>
                    <p className={cl.text}>ЗОВЫ</p>
                </div>
                <div className={cl.numberArrow}>
                    <div className={cl.number}>
                        <p className={cl.num}>2</p>
                    </div>
                    <img src={Arrow} className={cl.arrow}/>
                </div>
            </div>
            <hr />
            <div className={cl.games}>
                <div className={cl.dotText}>
                    <div className={cl.orangeDot}></div>
                    <p className={cl.text}>ИДУ</p>
                </div>
                <div className={cl.numberArrow}>
                    <div className={cl.number}>
                        <p className={cl.num}>3</p>
                    </div>
                    <img src={Arrow} className={cl.arrow}/>
                </div>
            </div>
        </div> 
    )
}

export default Menus