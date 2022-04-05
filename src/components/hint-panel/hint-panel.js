import { useCallback, useEffect, useState } from "react"
import LoadingIndicator from "../loading-indicator/loadingIndicator"

const HintPanel = ({hint}) => {

    const [ listIngridients, setListIngridients ] = useState(null)

    const searchByIngridient = useCallback( async() => {

        const result = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)

        const data = await result.json()
        setListIngridients(data.meals)

    }, [])

    useEffect(() => {
        searchByIngridient()
    }, [searchByIngridient, hint])


    const renderHints = (ingridientsArr) => {
        
        // const filteredIngridients = ingridientsArr.filter((item) => {
          
        //     const capitalaiseHint = hint.charAt(0).toUpperCase() + hint.slice(1);
        //     //item.strIngredient.incudes(hint)
        //     if (typeof item.strIngredient === 'string') {
        //         console.log(item.strIngredient)
        //         return item.strIngredient.incudes(capitalaiseHint)
        //     }
        //     console.log( 'NOT A STRING  ==>' + typeof(item.strIngredient) + item.strIngredient) 
        //     return null
        // })

        let arr = ingridientsArr.slice(0, 5)

        return arr.map((item) => {
            return <p key={item.idIngredient}>{ item.strIngredient}</p>
        })

    }


    return  listIngridients ?  renderHints(listIngridients) : <LoadingIndicator />
}
export default HintPanel