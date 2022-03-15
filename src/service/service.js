export default class Service  {

    async getData (url) {
        const res = await fetch(url)

        if (!res.ok || res.status !== 200) {
            throw new Error(`Request failed with status code ${res.status}`)
           
        } 
        const data = await res.json()
        return data
    }
}