import React from "react";
import cl from '../styles/style.module.css';
import Dot from '../Img/dot.svg';

const documents = [
    "Возможновти ИГРУМА",
    "Правила ИГРУМА",
    "Инструкция РУМЕРА",
    "Инструкция МАСТЕРА",
    "Инструкция МЕСТА",
    "Пользовательское соглашение"
]

const Documents = () => {
    return (
        <div className={cl.documents}>
            {documents.map((title, index) => (
                <React.Fragment key={index}>
                    <div className={cl.set}>
                        <img src={Dot} className={cl.dotImg} alt="dot" />
                        <p className={cl.settingsText}>{title}</p>
                    </div>
                    {index < documents.length - 1 && <hr />}
                </React.Fragment>
            ))}
        </div>
    )
}

export default Documents