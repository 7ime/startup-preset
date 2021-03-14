import moment, {Moment} from 'moment'

export const inWeekRange = (verify: string | Date | Moment) => {
    return moment(verify).isBetween(moment().subtract(7, 'days'), moment())
}
