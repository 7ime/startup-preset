import moment, {Moment} from 'moment'

export const isToday = (verify: string | Date | Moment) => {
    return moment().isSame(verify, 'days')
}
