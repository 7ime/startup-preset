import {createSelector} from '@reduxjs/toolkit'
import {IAppState} from '../../app-reducer'

const getState = (state: IAppState) => state.chat

export const getUsedList = createSelector(getState, state => state.usedList)
