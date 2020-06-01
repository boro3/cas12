import { SAY_HELLO } from './../constant/SayHelloConstant'

export const SayHello = () => {
    return {
        type: SAY_HELLO,
        payload: 'Hello Action Test!'
    }
}