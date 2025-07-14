import React, { useState, useEffect } from "react";
import Oclock from './Img/oclock.svg';
import Door from './Img/door.svg';
import cl from './styles/style.module.css';
import Header from "./components/Header";
import Info from "./components/Info";
import Buttons from './components/Buttons';
import Menus from "./components/Menus";
import CreateButtons from './components/CreateButtons';
import UniversalButton from './components/UniversalButton';
import AccountMenu from './components/AccountMenu';
import AccountSettings from './components/AccountSettings';
import AboutUser from './components/AboutUser';
import Documents from './components/Documents';

const App = () => {
	const [profile, setProfile] = useState(null);
	const historyText = "ИСТОРИЯ ВСТРЕЧ";
	const leaveFromProfile = "Выйти из профиля";

	useEffect(() => {
		fetch("http://localhost:3000/api/profile")
			.then((res) => res.json())
			.then(setProfile)
			.catch(console.error)
	}, [])

	if (!profile) return <div className="loading">Загрузка...</div>;

	return (
		<div className={cl.container}>
			<Header profile={profile} />
			<Info profile={profile} />
			<Buttons profile={profile} />
			<Menus />
			<CreateButtons />
			<UniversalButton Image={Oclock} Text={historyText} />
			<AccountMenu />
			<AccountSettings />
			<AboutUser profile={profile} />
			<Documents />
			<UniversalButton Image={Door} Text={leaveFromProfile} />
		</div>
	)
}

export default App