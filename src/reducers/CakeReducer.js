import { BUY_CAKE, RESTOCK_CAKE } from './../constant/CakeConstant'

const initialState = {
    cakes: 10,
    error: undefined
}

const CakeReducer = (state = initialState, action) => {
    switch (action.type) {

        case BUY_CAKE:

            if (state.cakes - action.payload >= 0) {

                return {
                    ...state,
                    cakes: state.cakes - action.payload,
                    error:
                        state.cakes - action.payload > 0 && state.cakes - action.payload < 3
                            ?
                            `Only ${state.cakes - action.payload} Cake Left !`
                            :
                            state.cakes - action.payload === 0 ? 'Please Restock !' : null
                }
            } else break
                

        case RESTOCK_CAKE:
            return {
                ...state,
                cakes: state.cakes + action.payload,
                error: undefined
            }

        default: return state;
    }
}

export default CakeReducer;