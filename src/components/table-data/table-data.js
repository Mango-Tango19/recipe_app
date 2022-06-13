const TableData = ({ dataObj }) => {


  const renderTableRows = (dataObj) => {

    // let key = "strIngredient1";
    // let key2 = "strMeasure1";
  
    // console.log(dataObj[key] + " " + dataObj[key2]);

//     let rowsArr = []

// for (let i = 0; i++; i < 3) {
//     let ingridient = 'strIngredient' + i
//     let amount = 'strMeasure' + i

//     let element =   <tr>
//     <th scope='row'>{ dataObj[ingridient] }</th>
//     <td>{ dataObj[amount] }</td>
//   </tr>

// rowsArr.push(element)


// } 

// debugger

    return  <tr>
    <th scope='row'>hello</th>
    <td>goodbye</td>
  </tr>
  };

  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>Ingridients</th>
          <th scope='col'>Amount</th>
        </tr>
      </thead>
      <tbody>{renderTableRows(dataObj)}</tbody>
    </table>
  );
};

export default TableData;
