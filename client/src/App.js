import React, { useState, useEffect } from "react";

const App = () => {
	const [profile, setProfile] = useState(null);

	console.log(profile)
	useEffect(() => {
		fetch("http://localhost:3000/api/profile")
		.then((res) => res.json())
		.then(setProfile)
		.catch(console.error);
	}, [])


  	if (!profile) return <div className="loading">Загрузка...</div>;

	return (
		<div className="container">
			<div className="header">
				<img
					src={profile.avatar_url || "/default-avatar.jpg"}
					alt="avatar"
					className="avatar"
				/>
				<div className="header-info">
					<h1 className="name">{profile.name}</h1>
					<p className="city">{profile.city}</p>
				</div>
			</div>

			<div className="about">
				<h2>Обо мне</h2>
				<p>{profile.about || "Мастер с большим опытом работы. Люблю животных и свою работу."}</p>
			</div>
		</div>
	)
}

export default App