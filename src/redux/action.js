import { DATA,SHOW_DATA } from "./actionTypes"

export const data = (payload) => ({
    type:DATA,
    payload
})
export const showData = (payload) => ({
    type:SHOW_DATA,
    payload
})