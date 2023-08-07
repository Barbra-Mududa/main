import React, { useEffect, useState } from 'react';
import { XMarkIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

const AddItem = ({ itemData, onFormSubmit, onClose }) => { 
  const [formData, setFormData] = useState(itemData || {
    itemCode: '257427',
    item: '',
    brand: '',
    unitPrice: '0',
    unitOfMeasurement: 'Each',
    hasThreshold: 'true',
  });
  const [popUp, setPopUp] = useState(false)

  useEffect(() => {
    setFormData(itemData || {
      itemCode: '257427',
      item: '',
      brand: '',
      unitPrice: '0',
      unitOfMeasurement: 'Each',
      hasThreshold: 'true',
    })
  }, [itemData])


  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log(formData);

    fetch("/./src/data/data.js", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newFormData) => {
        console.log(newFormData);
        onFormSubmit(newFormData);
        setPopUp(true);
      })
      .catch((error) => {
        console.log('Error submitting item', error);
      });
    event.target.reset();
    // window.location.reload()
  };

  
  // setPopUp(true)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };


  // const handleButonClicked = () => {
  //   setPopUp(true)
  // }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className='mt-4 h-screen'>
        <h2 className='text-xl font-Lato font-bold'>Add Item</h2>
        <div>
          <div className='mt-4'>
            <label>Item Code:</label>
            <input
              type='text'
              name='itemCode'
              className='w-full px-3 py-2 bg-grey/200 border rounded-lg focus:border-2 focus:shadow-sm focus:outline-none'
              placeholder='Enter item code...'
              value={formData.itemCode}
              onChange={handleChange}
              readOnly
              required
            />
          </div>
          <div className='mt-4'>
            <label>Item Description:</label>
            <input
              type='text'
              name='item'
              className='w-full px-3 py-2 border rounded-lg focus:border-2 focus:shadow-sm focus:outline-none'
              placeholder='e.g Pen Black...'
              value={formData.item}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mt-4'>
            <label>Select Brand:</label>
            <select
              name='brand'
              className='w-full px-3 py-2 border rounded-lg focus:border-2 focus:shadow-sm focus:outline-none'
              value={formData.brand}
              onChange={handleChange}
              required
            >
              <option>Kaluma</option>
              <option>Kaluma</option>
              <option>Bic</option>
              <option>Pelikan</option>
            </select>
          </div>
          <div className='mt-4'>
            <label>Set Unit Price(KES):</label>
            <input
              type='number'
              name='unitPrice'
              className='w-full px-3 py-2 border rounded-lg focus:border-2 focus:shadow-sm focus:outline-none'
              value={formData.unitPrice}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mt-4'>
            <label>Select Unit of Measurement(UoM):</label>
            <select
              name='unitOfMeasurement'
              className='w-full px-3 py-2 border rounded-lg focus:border-2 focus:shadow-sm focus:outline-none'
              value={formData.unitOfMeasurement}
              onChange={handleChange}
              required
            >
              <option>Each</option>
            </select>
          </div>
          <div className='mt-4'>
            <label>Has Threshold:</label>
            <select
              name='hasThreshold'
              className='w-full px-3 py-2 border rounded-lg focus:border-2 focus:shadow-sm focus:outline-none'
              value={formData.hasThreshold}
              onChange={handleChange}
              required
            >
              <option value='true'>True</option>
              <option value='false'>False</option>
            </select>
          </div>
          <button
            type='submit'
            className='w-full mt-4 items-center  border border-gray-500 border-solid border-opacity-30 rounded-lg p-2 bg-secondary text-white shadow-md'
          // onClick={handleButonClicked}
          >
            Save to Catalogue
          </button>
          {popUp && (
        <div className="absolute bg-secondary border-l-4 border-grey/500 p-4 mb-4" role="alert">
          <div className="mr-4">
            <InformationCircleIcon className='h-4 w-4' />
          </div>
          <div>
            <span className="block font-semibold">Item added successfully</span>
            <div>
              <h3>Close</h3>
              <button className="mt-2 px-2 py-1 rounded-md bg-grey/500" onClick={() => {
                setPopUp(false);
                onClose(); 
              }}>
                <XMarkIcon className='h-4 w-4' />
              </button>
            </div>
          </div>
        </div>
      )}


        </div>
      </div>
    </form>
  );
};

export default AddItem;

