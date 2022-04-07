import { useCallback, useEffect, useState } from "react";
import LoadingIndicator from "../loading-indicator/loadingIndicator";
import "./hint-panel.css";

const HintPanel = ({ hint }) => {
  const [listIngridients, setListIngridients] = useState(null);
   const [ filteredItems, setFilteredItems ] = useState([])

  const request = async () => {
    const result = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    );
    return await result.json();
  };

  const getIngridients = useCallback(() => {
    request()
      .then((data) => setListIngridients(data.meals))
      .catch((err) => err);
  }, []);

  useEffect(() => {
    let busy = false;
    if (!busy) {
      getIngridients();
    }
    return () => (busy = true);
  }, [getIngridients]);

  const filterIngridients = useCallback((ingridientsArr) => {
    const filteredIngridients = ingridientsArr?.filter((item) => {
      const capitalaiseHint = hint.charAt(0).toUpperCase() + hint.slice(1);
      return item.strIngredient.indexOf(capitalaiseHint) > -1;
    });
    return filteredIngridients.slice(0, 5);
  }, [hint]);

  useEffect(() => {
     if (listIngridients) {
        let arr = filterIngridients(listIngridients)
        setFilteredItems(arr)
     }
  }, [filterIngridients, listIngridients]);

  const removeFromHintsList = (e, hintItem) => {
    e.preventDefault();
    console.log(hintItem)
    let removedOneItemArr = filteredItems.filter((item) => {
        return item.idIngredient !== hintItem.idIngredient
    })
    setFilteredItems(removedOneItemArr)
  };

  const renderHints = (filteredItems) => {

    if (filteredItems.length === 0) {
      return <p>OMG! We don't know this type of food 😵</p>;
    }

    return filteredItems.map((hintItem) => {
      return (
        <button
          onClick={(e) => removeFromHintsList(e, hintItem)}
          className='dropdown-item'
          key={hintItem.idIngredient}
        >
          {hintItem.strIngredient}
        </button>
      );
    });
  };

  return filteredItems ? (
    <div className='hint-list'>{renderHints(filteredItems)}</div>
  ) : (
    <LoadingIndicator />
  );
};
export default HintPanel;
