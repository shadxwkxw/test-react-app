import React from "react";
import cl from '../styles/style.module.css'
import Eye from '../Img/eye.svg'
import Menu from '../Img/menu.svg'

const AccountMenu = () => {
    return (
        <div className={cl.accountSettings}>
            <div className={cl.account1}>
                <img src={Eye} className={cl.accountImg1} />
                <p className={cl.accountText}>Публичный аккаунт</p>
            </div>
            <hr />
            <div className={cl.account2}>
                <img src={Menu} className={cl.accountImg2} />
                <p className={cl.accountText}>Взрослый</p>
            </div>
        </div>
    )
}

export default AccountMenu