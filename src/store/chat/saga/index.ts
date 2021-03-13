import {call, put, takeLatest} from 'redux-saga/effects'
import getService from '@services/index'
import {IService} from '@services/model'
import {ChatAction} from '../index'

const service: IService = getService()

export function* getList(action: ReturnType<typeof ChatAction.getList>) {
    try {
        const response = yield call(service.chatService.getList, action.payload)

        yield put(ChatAction.getListSuccess(response))
    } catch (error) {
        console.error(error)
    }
}

export function* rootSaga() {
    yield takeLatest([ChatAction.getList], getList)
}
