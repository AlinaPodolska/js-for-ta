const SECONDS_IN_HOUR = 3600
const HOURS_IN_DAY = 24
const DAYS_IN_MONTH = 31

const hours = prompt("Enter hours")
alert(`There are ${hours * SECONDS_IN_HOUR} seconds in ${hours} hours`)

const days = prompt("Enter days")
alert(`There are ${(days * HOURS_IN_DAY) * SECONDS_IN_HOUR} seconds in ${hours} days`)

const months = prompt("Enter months")
alert(`There are ${((months * DAYS_IN_MONTH) * HOURS_IN_DAY) * SECONDS_IN_HOUR} seconds in ${hours} month`)
