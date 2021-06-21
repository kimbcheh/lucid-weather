import dayjs from 'dayjs'

dayjs().format()

export function convertDate(date) {
 return dayjs.unix(date).format('D/M ddd')
}

export function convertTime(time) {
 return dayjs.unix(time).format('h:mm a')
}
