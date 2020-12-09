// Date

const date = new Date()

// Get the month

const Months = [
    'january',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]
const month = date.getMonth()

const currentMonth = Months[month]

// Get the day of the week

const Days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]
const day = date.getDay()

const currentDay = Days[day]

// Get the what date it is

const currentDate = date.getDate()

// Get the full year

const year = date.getFullYear()

const sentence = `Today is ${currentDay.toUpperCase()}, the ${currentDate}rd of  ${currentMonth} ${year}`

console.log(sentence)