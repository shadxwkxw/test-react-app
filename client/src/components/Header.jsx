import React from 'react';
import Profile from '../Img/avatar.svg';
import Arrow2 from '../Img/arrow2.svg';
import Share from '../Img/share.svg';
import Eye2 from '../Img/eye2.svg';
import Cat from '../Img/cat.svg';
import cl from '../styles/style.module.css';

const Header = ({profile}) => {
	return (
		<div className={cl.header}>
			<img src={Arrow2} className={cl.arrow} alt="Назад" />
			<img
				src={profile.avatar_url || Profile}
				alt="avatar"
				className={cl.avatar}
			/>
			<div className={cl.menu}>
				<img src={Share} className={cl.share} alt="Поделиться" />
				<div className={cl.menuWithText}>
					<img src={Eye2} className={cl.eye2} alt="Это я" />
					<p className={cl.menuText}>Это я</p>
				</div>
				<div className={cl.menuWithText}>
					<img src={Cat} className={cl.cat} alt="Котум" />
					<p className={cl.menuText}>Котум</p>
				</div>
			</div>
		</div>
	)
}

export default Header