import { $CombinedState, CombinedState, configureStore, Store } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'
import { createReducer } from './rootReducer'
import { createInjectorsEnhancer } from 'redux-injectors'
import rootSaga from './rootSaga'

const env = process.env.APP_ENV

const makeStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const runSaga = sagaMiddleware.run

    const enhancers = [
        createInjectorsEnhancer({
            createReducer,
            runSaga
        })
    ]

    const store = configureStore({
        reducer: createReducer(),
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat([sagaMiddleware]),
        devTools: env === 'dev' || env === 'local',
        enhancers
    })

    // Run your sagas on server
    // ;(store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga)

    runSaga(rootSaga)
    return store
}

type CleanState<T> = T extends CombinedState<infer S> ? { [K in keyof S]: CleanState<S[K]> } : T

export type AppStore = ReturnType<typeof makeStore>
export type AppState = CleanState<
    ReturnType<AppStore['getState']> & {
        readonly [$CombinedState]?: undefined
    }
>

export const wrapper = createWrapper<Store<AppState>>(makeStore)
