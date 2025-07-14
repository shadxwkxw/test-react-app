import React from "react";
import cl from '../styles/style.module.css'
import Yes from '../Img/yes.svg'
import Close from '../Img/close.svg'
import Note from '../Img/note.svg'

const AccountSettings = () => {
    return (
        <div className={cl.accountSettings}>
            <div className={cl.mySub}>
                <img src={Yes} className={cl.mySubImg} />
                <p className={cl.accountText}>Мои подписки</p>
            </div>
            <hr />
            <div className={cl.blackList}>
                <img src={Close} className={cl.blackListImg} />
                <p className={cl.accountText}>Черный список</p>
            </div>
            <hr />
            <div className={cl.note}>
                <img src={Note} className={cl.noteImg} />
                <p className={cl.accountText}>Закладки</p>
            </div>
        </div>
    )
}

export default AccountSettings