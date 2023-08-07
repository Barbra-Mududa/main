import React, { useEffect, useState } from 'react';
import { ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Layout from '../components/layout/Layout';
import Items from '../components/requests/Items';


const Catalog: React.FC= () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/items")
    .then((res) => res.json())
    .then((r) => setFormData(r) )
    .catch((error) => {
      console.log('Error fetching', error)
    });
  },[])

  const handleDelete = async (e) => {
    const id = e.currentTarget.id;
    await fetch("http://localhost:3000/items" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setFormData(formData.filter((data) => data.id !== id));
  };

  const handleEdit = (item) => {
    setFormData((prevData) =>
      prevData.map((data) => (data.id === item.id ? item : data))
    );
  };


  return (
    <Layout>
      <div className="flex flex-col flex-grow h-full">
        {formData.length === 0 ? (
          <div className=' justify-center items-center'>
            <div className='font-lato'>
              <h2 className='text-base font-semibold text-center'>You have no recorde to show</h2>
              <p className='text-sm font-normal text-center'>Add items to your catalog to get started</p>
            </div><button
              className='w-fit mt-4 px-8 flex items-center  border border-gray-500 border-solid border-opacity-30 rounded-lg p-2 bg-secondary text-white'>
              Get started
              <ArrowRightIcon className='w-4 h-4 ml-4 ' />
            </button>
          </div>
        ) : (
          <div className='w-full flex flex-col'>
            <div className='relative w-80%'>
              <input type='text'
                className='w-90% px-3 py-2 border rounded-lg focus:border-2 focus:shadow-sm focus:outline-none pl-10'
                placeholder='Search name, brand'
              />
              <MagnifyingGlassIcon className='h-6 w-6 text-grey/500 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none' fill="none" viewBox='0 0 24 24' />
            </div>
            <div>
              <h3 className='text-base text-sm text-grey/500 mt-4 mb-4'>Showing 2 items </h3>
            </div>
            <Items formData={formData} handleDelete={handleDelete} handleEdit={handleEdit} />
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Catalog;
// Type '(item: ItemData) => void' is not assignable to type '(id: string) => void'.
//   Types of parameters 'item' and 'id' are incompatible.
//     Type 'string' is not assignable to type 'ItemData'.ts(2322)
// Items.tsx(16, 3): The expected type comes from property 'handleEdit' 
//   which is declared here on type 'IntrinsicAttributes & ItemsProps'
// (property) ItemsProps.handleEdit: (id: string) => void& ItemsProps'
