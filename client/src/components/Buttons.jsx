import React from "react";
import Settings from '../Img/settings.svg'
import cl from '../styles/style.module.css'

const Buttons = ({profile}) => {
    return (
        <div className={cl.btns}>
            <div className={cl.cityBtn}>
                <p className={cl.cityText}>{profile.city}</p>
            </div>
            <div className={cl.settingsBtn}>
                <img src={Settings} className={cl.settingsImg}/>
                <p className={cl.settingsText}>РЕДАКТ</p>
            </div>
        </div>
    )
}

export default Buttons