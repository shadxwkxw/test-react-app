import React from "react";
import cl from '../styles/style.module.css'

const UniversalButton = ({Image, Text}) => {
    return (
        <div className={cl.historyBtn}>
            <img src={Image} className={cl.oclock} />
            <p className={cl.oclockText}>{Text}</p>
        </div>
    )
}

export default UniversalButton