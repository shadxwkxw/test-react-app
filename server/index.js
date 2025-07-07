const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()
const PORT = 3000

app.use(cors())

app.get('/api/profile', async (req, res) => {
    try {
        const response = await axios.get('https://igroom.ru/api/v2/profile/5e800be0-088e-41cb-b549-10ebf4a13591', {
            headers: {accept: 'application/json'}
        })

        const data = response.data.data

        const mocked = {
            id: data.id,
            name: data.name || 'Ирина Котова',
            avatar: data.avatar_url || '/default-avatar.jpg',
            city: data.city?.name || 'Москва',
            age: data.age,
            telegram: data.telegram,
            about: data.about,
            points: data.points
        }

        res.json(mocked)
    } catch (e) {
        console.error('Ошибка запроса:', e);
        res.status(500).json({error: 'Ошибка при получении профиля'})
    }
})

app.listen(PORT, () => console.log(`API proxy на http://localhost:${PORT}`));