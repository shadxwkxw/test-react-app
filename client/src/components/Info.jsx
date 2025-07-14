import React from "react";
import cl from '../styles/style.module.css';
import {getTimeInIgroome, formatDate} from '../utils/dateUtils';

const Info = ({profile}) => {
	if (!profile) return null

	const metaData = [
		{value: getTimeInIgroome(profile.created_at), label: "в игруме"},
		{value: profile.calling_limit, label: "встреч"},
		{value: profile.going_limit, label: "румеров"},
	]

	return (
		<div className={cl.info}>
			<p className={cl.name}>румер: {profile.name}</p>
			<div className={cl.metaInfo}>
				<p className={cl.city}>@{profile.nickname}</p>
				<p className={cl.experience}>{formatDate(profile.last_login_at)}</p>
			</div>
			<div className={cl.metaInfo2}>
				{metaData.map((item, index) => (
					<div className={cl.metaBlock} key={index}>
						<p className={cl.metaValue}>{item.value}</p>
						<p className={cl.metaLabel}>{item.label}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Info