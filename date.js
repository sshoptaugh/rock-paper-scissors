const d = new Date()
const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
const year = d.getFullYear()

document.getElementById('date').innerHTML = monthList[d.getMonth()] + " " + year