import React from "react";
import cl from '../styles/style.module.css'

const AboutUser = ({profile}) => {
    return (
        <div className={cl.about}>
            <div className={cl.aboutText}>
                <p>{profile.about}</p>
            </div>
            <hr />
            <div className={cl.telegramInfo}>
                <p>Мой телеграм</p>
                <p className={cl.telegramTag}>@{profile.telegram}</p>
            </div>
        </div>
    )
}

export default AboutUser