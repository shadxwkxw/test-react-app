import React from "react";
import cl from '../styles/style.module.css'

const CreateButtons = () => {
    return (
        <div className={cl.create_my}>
            <div className={cl.createGame}>
                <p className={cl.createText}>СОЗДАТЬ ИГРУМ</p>
            </div>
            <div className={cl.myGames}>
                <p className={cl.createText}>МОИ ИГРУМЫ</p>
            </div>
        </div>
    )
}

export default CreateButtons