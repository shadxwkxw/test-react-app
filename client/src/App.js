import React, { useState, useEffect } from "react";
import Profile from './Img/avatar.svg';
import Arrow2 from './Img/arrow2.svg';
import Arrow from './Img/arrow.svg';
import Share from './Img/share.svg';
import Eye2 from './Img/eye2.svg';
import Cat from './Img/cat.svg';
import Settings from './Img/settings.svg';
import Oclock from './Img/oclock.svg';
import Eye from './Img/eye.svg';
import Menu from './Img/menu.svg';
import Yes from './Img/yes.svg';
import Note from './Img/note.svg';
import Close from './Img/close.svg';
import cl from './styles/style.module.css';

const App = () => {
	const [profile, setProfile] = useState(null);

	const formatDate = (isoDate) => {
		const date = new Date(isoDate)
		return new Intl.DateTimeFormat('ru-RU', {
			day: 'numeric',
			month: 'long',
			hour: '2-digit',
			minute: '2-digit',
			hour12: false,
			timeZone: 'UTC',
		}).format(date)
	}

	const getTimeInIgroome = (createdAt) => {
		const createdDate = new Date(createdAt)
		const now = new Date()

		const diffMs = now - createdDate
		const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
		const diffMonths = Math.floor(diffDays / 30)
		const diffYears = Math.floor(diffMonths / 12)

		if (diffYears > 0) {
			return `${diffYears} ${getPlural(diffYears, ['год', 'года', 'лет'])}`
		} else if (diffMonths > 0) {
			return `${diffMonths} ${getPlural(diffMonths, ['месяц', 'месяца', 'месяцев'])}`
		} else {
			const diffWeeks = Math.floor(diffDays / 7)
			if (diffWeeks > 0) {
				return `${diffWeeks} ${getPlural(diffWeeks, ['неделя', 'недели', 'недель'])}`
			} else {
				return `${diffDays || 1} ${getPlural(diffDays || 1, ['день', 'дня', 'дней'])}`
			}
		}
	}

	const getPlural = (n, forms) => {
		const mod10 = n % 10, mod100 = n % 100
		if (mod10 === 1 && mod100 !== 11) return forms[0]
		if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return forms[1]
		return forms[2]
	}

	useEffect(() => {
		fetch("http://localhost:3000/api/profile")
			.then((res) => res.json())
			.then(setProfile)
			.catch(console.error)
	}, [])

	if (!profile) return <div className="loading">Загрузка...</div>;

	return (
		<div className={cl.container}>
			<div className={cl.header}>
				<img src={Arrow2} className={cl.arrow} alt="Назад" />
				<img
					src={profile.avatar_url || Profile}
					alt="avatar"
					className={cl.avatar}
				/>
				<div className={cl.menu}>
					<img src={Share} className={cl.share} />
					<div className={cl.menuWithText}>
						<img src={Eye2} className={cl.eye2} />
						<p className={cl.menuText}>Это я</p>
					</div>
					<div className={cl.menuWithText}>
						<img src={Cat} className={cl.cat} />
						<p className={cl.menuText}>Котум</p>
					</div>
				</div>
			</div>

			<div className={cl.info}>
				<p className={cl.name}>румер: {profile.name}</p>
				<div className={cl.metaInfo}>
					<p className={cl.city}>@{profile.nickname}</p>
					<p className={cl.experience}>{formatDate(profile.last_login_at)}</p>
				</div>
				<div className={cl.metaInfo2}>
					<div className={cl.metaBlock}>
						<p className={cl.metaValue}>{getTimeInIgroome(profile.created_at)}</p>
						<p className={cl.metaLabel}>в игруме</p>
					</div>
					<div className={cl.metaBlock}>
						<p className={cl.metaValue}>{profile.calling_limit}</p>
						<p className={cl.metaLabel}>встреч</p>
					</div>
					<div className={cl.metaBlock}>
						<p className={cl.metaValue}>{profile.going_limit}</p>
						<p className={cl.metaLabel}>румеров</p>
					</div>
				</div>
			</div>

			<div className={cl.btns}>
				<div className={cl.cityBtn}>
					<p className={cl.cityText}>{profile.city}</p>
				</div>
				<div className={cl.settingsBtn}>
					<img src={Settings} className={cl.settingsImg}/>
					<p className={cl.settingsText}>РЕДАКТ</p>
				</div>
			</div>

			<div className={cl.menus}>
				<div className={cl.zovs}>
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
				<div className={cl.go}>
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

			<div className={cl.create_my}>
				<div className={cl.createGame}>
					<p className={cl.createText}>СОЗДАТЬ ИГРУМ</p>
				</div>
				<div className={cl.myGames}>
					<p className={cl.createText}>МОИ ИГРУМЫ</p>
				</div>
			</div>

			<div className={cl.historyBtn}>
				<img src={Oclock} className={cl.oclock} />
				<p className={cl.oclockText}>ИСТОРИЯ ВСТРЕЧ</p>
			</div>

			<div className={cl.accountMenu}>
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
			
			<div className={cl.accountMenu}>
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
		</div>
	)
}

export default App