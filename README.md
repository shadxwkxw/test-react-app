# React + express task

Это одностраничное приложение, реализованное на React.
Основные функции и особенности:

- Загрузка данных по API.
- Добавлены прелоадеры при загрузке товаров и отправке заказа для улучшения UX.
- Тексты и названия товаров адаптированы для корректного отображения даже если они длинные (перенос, ограничение по строкам).
- Код структурирован и написан с учётом расширяемости и поддержки.
- Проект создан с использованием CRA (Create React App) с возможностью последующего добавления SSR (Server Side Rendering) для улучшения SEO и скорости загрузки.

---

## Технологии

- React
- CSS Modules / Styled Components
- API
- Express.js
- axios

---

## Установка и запуск

Убедитесь, что у Вас установлен Docker и Docker Compose.

1. Клонировать репозиторий  
```bash
git clone https://github.com/shadxwkxw/test-react-app.git
cd test-react-app
```

2. Собрать и поднять контейнеры
```bash
docker-compose up --build
```

3. Открыть в браузере http://localhost:8080

---

## Команды Docker

Остановить Docker:

```bash
docker-compose down
```

Пересобрать без кэша

```bash 
docker-compose build --no-cache
```

---

## Контакты

- Email: kompoti4ff@mail.ru
- GitHub: https://github.com/shadxwkxw
- Telegram: @kxwarvta

---