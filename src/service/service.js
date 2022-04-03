export default class Service  {

    baseUrl = 'https://www.themealdb.com/api/json/v1/1/'


    ingridientUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast'

    async getData (url) {
        const res = await fetch(url)

        if (!res.ok || res.status !== 200) {
            throw new Error(`Request failed with status code ${res.status}`) 
        } 
        return await res.json()
    }

    getRandomrecipe =  async () => {
        return await this.getData(`${this.baseUrl}random.php`)
    }

    getRecipesByIngridient = async (ingridient) => {
       return await this.getData(`${this.baseUrl}/filter.php?i=${ingridient}`)

    }
}