import React, { useState } from 'react';
import { PencilSquareIcon, XMarkIcon } from '@heroicons/react/24/outline';
import AddItem from '../addItems/AddItem';

function Items({ formData, handleEdit, handleDelete }) {
  const [editForm, setEditForm] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [formDat, setFormData] = useState([]);


  const edit = (item) => {
    setItemSelected(item);
    setEditForm(true);
  };

  const handleFormSubmit = (newFormData) => {
    setFormData((prevData) =>
      prevData.map((data) => (data.id === newFormData.id ? newFormData : data))
    );
  };
 
  const handleCloseClick = () => {
    setEditForm(false)
  }

  return (
    <div>
      {formData.map((data) => (
        <div key={data.id}>
          <div className='w-full lg:w-11/12 bg-white shadow-md lg:shadow-none border border-grey/200 rounded-md flex flex-col lg:flex-row p-5 justify-between lg:items-center mb-3'>
            <div className='flex flex-col lg:flex-row justify-between lg:items-center items-start lg:w-10/12 grid grid-cols-4 gap-4 mt-4'>
              <div className='w-full  flex flex-col '>
                <div className='text-grey/500'>{data.itemCode}</div>
                <div className='font-semibold'>{data.item}</div>
              </div>

              <div className='w-full flex flex-col '>
                <div className='text-grey/500'>Brand</div>
                <div className='font-semibold'>{data.brand}</div>
              </div>

              <div className='w-full flex flex-col '>
                <div className='text-grey/500 '>UoM</div>
                <div className='font-semibold'>{data.unitOfMeasurement}</div>
              </div>
              <div className='w-full flex flex-col'>
                <div className='text-grey/500'>Unit Price</div>
                <div className='font-semibold'>KES {data.unitPrice}</div>
              </div>
            </div>

            <div className='flex flex-col lg:flex-row lg:justify-end lg:w-6/12'>
              <div className='flex items-center justify-end my-5 lg:my-0 lg:py-1 lg:w-6/12'>
                <button className='rounded-full mr-2' onClick={() => edit(data)}>
                  <PencilSquareIcon className='h-6 w-6 text-secondary' />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {editForm && itemSelected && (
        <div className='fixed h-full top-0 right-0 left-0 flex items-start justify-end'>
          <div className='flex flex-row w-2/6  bg-white p-4 rounded-lg'>
            <AddItem itemData={itemSelected} onFormSubmit={handleFormSubmit} onClose={handleCloseClick}/>
          </div>
          <button className="absolute top-3 right-4 shadow-sm shadow-white items-center justify-center border border-gray-400 rounded-full py-1 px-1"
            onClick={handleCloseClick}>
            <XMarkIcon className='w-4 h-4 bg-grey-200' />
          </button>
        </div>
      )}
    </div>
  );
}

export default Items;
