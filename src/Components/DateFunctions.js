import dayjs from 'dayjs'

dayjs().format()

export function convertDate(date) {
 return dayjs.unix(date).format('ddd D/M')
}

export function convertTime(time) {
 return dayjs.unix(time).format('h:mm a')
}
