import React,{useState, useEffect} from "react";
import Table from "react-bootstrap/Table";
import SortableData from "./sortableTable";

const products = () => {


    const [tableData, setTableData] = useState([]);
    const { items, requestSort, sortConfig } = SortableData(tableData);
    const url="https://hplussport.com/api/products/order/price/sorc/qty/100";
    const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          console.log(json);
          setTableData(json);
        } catch (error) {
          console.log("error", error);
        }
      };
      useEffect(()=>{
        fetchData();
      },[])
  return (
    <Table responsive>
      <thead>
        <tr>
          <th onClick={() => requestSort('id')}>OrderID</th>
          <th onClick={() => requestSort('name')}>Name</th>
          <th onClick={() => requestSort('description')}>description</th>
          <th onClick={() => requestSort('price')}>Price</th>
          
        </tr>
      </thead>
      <tbody>
        {items && items.map((table, key)=>(
            <tr key={key}>
                <td>{table.id}</td>
                <td>{table.name}</td>
                <td>{table.description}</td>
                <td>{table.price}</td>
            </tr>
        ))}       
      </tbody>
    </Table>
  );
};

export default products;
