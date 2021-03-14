import moment from 'moment'
import {isToday} from '@helpers/date/is-today'
import {inWeekRange} from '@helpers/date/in-week-range'

export const getDateViewForChatList = (date: string): string => {
    const dateConverted = moment(date)

    if (isToday(dateConverted)) {
        return moment(dateConverted).format('hh:mm A')
    }

    if (inWeekRange(dateConverted)) {
        return moment(dateConverted).format('ddd')
    }

    return moment(dateConverted).format('DD.MM.YY')
}
