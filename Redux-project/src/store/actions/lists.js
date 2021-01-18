
//Action adalah function untuk return object
export const add = (title) => {
    return { //return harus object
        type: "ADD", //wajib ada type umumnya pake huruf besar
        payload: title //data yang akan dikirim ke reducer
    }
}
export const del = (id) => {
    return { //return harus object
        type: "DEL", //wajib ada type umumnya pake huruf besar
        payload: id //data yang akan dikirim ke reducer
    }
}