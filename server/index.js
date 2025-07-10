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
            role: data.role,
            name: data.name || 'Ирина Котова',
            nickname: data.nickname || unknownUser,
            avatar: data.avatar_url || '/default-avatar.jpg',
            age: data.age,
            city: data.city?.name || 'Москва',
            is_private: data.is_private,
            telegram: data.telegram,
            about: data.about,
            points: data.points,
            calling_limit: data.calling_limit,
            going_limit: data.going_limit,
            account_status: data.account_status,
            last_login_at: data.last_login_at,
            created_at: data.created_at,
            updated_at: data.updated_at
        }

        res.json(mocked)
    } catch (e) {
        console.error('Ошибка запроса:', e);
        res.status(500).json({error: 'Ошибка при получении профиля'})
    }
})

app.listen(PORT, () => console.log(`API proxy на http://localhost:${PORT}`));