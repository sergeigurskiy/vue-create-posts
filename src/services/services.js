import createUrl from './axios/axiosCreate'

class Api {
    constructor (instance) {
        this.instance = instance
    }

    async postRequest (body) {
        try {
            const {data} = await this.instance.post('/posts.json', body)
            return data
        }
        catch (err) {
            console.warn(err);
        }
    }
}

export const api = new Api (createUrl('https://vueposter-default-rtdb.firebaseio.com/'))