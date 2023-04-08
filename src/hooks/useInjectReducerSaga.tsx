import { useInjectReducer, useInjectSaga } from 'redux-injectors'

import { isServer } from 'utils'

export const useInjectReducerSaga = (key: string, reducer: any, saga: any) => {
    reducer && !isServer && useInjectReducer({ key, reducer })
    saga && !isServer && useInjectSaga({ key, saga })
    return null
}
