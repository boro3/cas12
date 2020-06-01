import {BUY_CAKE , RESTOCK_CAKE} from './../constant/CakeConstant'
export const buyCake = (cake) =>{
    return{
        type: BUY_CAKE,
        payload: cake
    }
}

export const restockCake = (cake) =>{
    return{
        type: RESTOCK_CAKE,
        payload: cake
    }
}