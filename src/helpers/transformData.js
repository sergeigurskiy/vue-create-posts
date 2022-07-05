export function transformData(data){
    if(data){
        return Object.keys(data).map(key => {
            let item = data[key]
            item.id = key
            return item
        })
    }
    else {
        return false
    }
}