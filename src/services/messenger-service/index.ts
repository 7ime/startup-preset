import {IFetcher} from '@api/fetcher/model'
import {IMessengerService} from './model'
import {injectPropertyFetcher} from '@toolbox/injects/injects-fetcher'

export default class MessengerService implements IMessengerService {

    @injectPropertyFetcher
    private fetcher!: IFetcher
}
