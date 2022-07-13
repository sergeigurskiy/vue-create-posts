export function storageGenerate(data, id){
    if(data && data.length){
        return data.map((elem) => {
            if(elem.id === id){
                return {...elem, saveStorage:true}
            }
            return {...elem}
        })
    }
}
export function getStorage (key) {
    return localStorage.hasOwnProperty(key) ? JSON.parse(localStorage.getItem(key)) : []
}
export function setStorage (key, props) {
    return localStorage.setItem(key, JSON.stringify(props))
}