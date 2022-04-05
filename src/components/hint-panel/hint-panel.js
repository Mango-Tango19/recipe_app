import { useCallback, useEffect, useMemo, useState } from "react"
import LoadingIndicator from "../loading-indicator/loadingIndicator"

const HintPanel = ({hint}) => {

    const [ listIngridients, setListIngridients ] = useState(null)


    const request = async () => {
        const result = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        return await result.json()
    }

    const getIngridients = useCallback( () => {
        request()
        .then(data =>  setListIngridients(data.meals))
        .catch(err => err)

    }, [])

    useEffect(() => {
        let busy = false
        if (!busy) {
            getIngridients()
        }
        return () => busy = true
       
    }, [getIngridients])




    const renderHints = (ingridientsArr) =>  {
        
         const filteredIngridients = ingridientsArr.filter((item) => {
            const capitalaiseHint = hint.charAt(0).toUpperCase() + hint.slice(1);
            //return item.strIngredient.split().join().includes(capitalaiseHint)
            return item.strIngredient.indexOf(capitalaiseHint) > -1
        })

        let arr = filteredIngridients.slice(0, 5)

        return arr.map((item) => {
            return <p key={item.idIngredient}>{ item.strIngredient}</p>
        })

    }


    return  listIngridients ?  renderHints(listIngridients) : <LoadingIndicator />
}
export default HintPanel