import React, { useEffect, useState } from 'react';
import './List.css';
import axios from "axios";

const List = ({url}) => {


  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        console.error("Error: Unable to fetch data.");
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      if (response.data.success) {
        await fetchList();
        alert("Food removed successfully!");
      } else {
        alert("Error: Unable to remove food.");
        console.error("Error: Unable to remove food");
      }
    } catch (error) {
      alert("Error: Unable to remove food.");
      console.error("Error removing food: ", error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []); // Empty dependency array ensures it runs only once after the component mounts

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => (
          <div key={index} className="list-table-format">
            <img src={`${url}/images/` + item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <p onClick={() => removeFood(item._id)} className='cursor'>X</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
