export default class Service  {

    randomUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

    async getData (url) {
        const res = await fetch(url)

        if (!res.ok || res.status !== 200) {
            throw new Error(`Request failed with status code ${res.status}`) 
        } 
        return await res.json()
    }

    getRandomrecipe =  async () => {
        const res = await this.getData(this.randomUrl)
        return res
    }
}