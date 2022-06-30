import {types} from "../types/types";

export const messageTrue = (data) => {
    return {
        type: types.MESSAGE_TRUE,
        payload: data
    }
}
export const messageFalse = () => {
    return {
        type: types.MESSAGE_FALSE
    }
}


export const createUserAction = (data) =>{
    return async function (dispatch) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application-json"
            },
            body: JSON.stringify(data)
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/users', options);

        if (response.status === 404){
            dispatch(messageTrue({text: "не создано", button: "danger"}))
        }
        else {
            dispatch(messageTrue({text: "создано", button: "success"}))
        }
    }
}
