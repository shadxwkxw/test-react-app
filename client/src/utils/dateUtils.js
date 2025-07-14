export const getPlural = (n, forms) => {
	const mod10 = n % 10, mod100 = n % 100
	if (mod10 === 1 && mod100 !== 11) return forms[0]
	if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return forms[1]
	return forms[2]
}

export const formatDate = (isoDate) => {
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

export const getTimeInIgroome = (createdAt) => {
	const createdDate = new Date(createdAt)
	const now = new Date()

	const diffMs = now - createdDate
	const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
	const diffMonths = Math.floor(diffDays / 30)
	const diffYears = Math.floor(diffMonths / 12)

	if (diffYears > 0) return `${diffYears} ${getPlural(diffYears, ['год', 'года', 'лет'])}`
	if (diffMonths > 0) return `${diffMonths} ${getPlural(diffMonths, ['месяц', 'месяца', 'месяцев'])}`

	const diffWeeks = Math.floor(diffDays / 7)
	if (diffWeeks > 0) return `${diffWeeks} ${getPlural(diffWeeks, ['неделя', 'недели', 'недель'])}`
	return `${diffDays || 1} ${getPlural(diffDays || 1, ['день', 'дня', 'дней'])}`
}