import createUrl from './axios/axiosCreate'

class Api {
    constructor (instance) {
        this.instance = instance
    }

    async getRequest () {
        try {
            return response(this.instance.get('/posts.json'))
        }
        catch (err) {
            console.warn(err);
        }
    }

    async postRequest (body) {
        try {
            return response(this.instance.post('/posts.json', body))
        }
        catch (err) {
            console.warn(err);
        }
    }
}

async function response (reqData) {
    const {data} = await reqData
    return data
}

export const api = new Api (createUrl('https://vueposter-default-rtdb.firebaseio.com'))