import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from "axios";

const Add = ({url}) => {
 
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // To store the actual file
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad"
  });

  // Handle input changes
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle file selection and image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file); // Store the actual file
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set the preview to the file data
      };
      reader.readAsDataURL(file);
    }
  };

  // Form submit handler
  const onSubmitHandler = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Check if all fields are filled and an image is selected
    if (!data.name || !data.description || !data.price || !selectedImage) {
      alert('Please fill in all fields and upload an image');
      return;
    }

    try {
      // FormData creation
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('description', data.description);
      formData.append('category', data.category);
      formData.append('price', data.price);
      formData.append('image', selectedImage); // Append the actual image file

      // Send the data to the server
      const response = await axios.post(`${url}/api/food/add`, formData);

      if (response.data.success) {
        // Reset form fields and image preview
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad"
        });
        setImagePreview(null);
        setSelectedImage(null);
        alert('Product added successfully!');
      } else {
        alert('Failed to add product. Please try again.');
      }
    } catch (error) {
      console.error('Error adding product:', error);
      alert('An error occurred. Please check the server connection.');
    }
  };

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <input 
            type="file" 
            id="image" 
            onChange={handleImageChange} 
            accept="image/*" 
            required
          />
          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Preview" />
            </div>
          )}
        </div>

        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input 
            onChange={onChangeHandler} 
            value={data.name} 
            type="text" 
            name='name' 
            placeholder='Type here' 
            required
          />
        </div>

        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea 
            onChange={onChangeHandler} 
            value={data.description}
            name="description" 
            rows="6" 
            placeholder='Write content here' 
            required
          ></textarea>
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select 
              onChange={onChangeHandler}  
              name="category" 
              value={data.category}
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desserts">Desserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input 
              onChange={onChangeHandler} 
              value={data.price} 
              type="number" 
              name='price' 
              placeholder='$20' 
              required
            />
          </div>
        </div>

        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  );
};

export default Add;
