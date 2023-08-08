import React, { useState } from 'react';
import { PencilSquareIcon, XMarkIcon } from '@heroicons/react/24/outline';
import AddItem from '../addItems/AddItem';

interface Item {
  id: number;
  itemCode: string;
  item: string;
  brand: string;
  unitOfMeasurement: string;
  unitPrice: string;
}

interface ItemData {
  itemCode: string;
  item: string;
  brand: string;
  unitPrice: string;
  unitOfMeasurement: string;
  hasThreshold?: string;
}

interface ItemsProps{
  items: Item[];
  handleEdit: (item: Item ) => void;
  // handleDelete: (id: string) => void;

}

const Items: React.FC<ItemsProps> = ({ items, handleEdit }) => {
  const [editForm, setEditForm] = useState<boolean>(false);
  const [itemSelected, setItemSelected] = useState<Item | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [formDat, setFormData] = useState<Item[]>([]);


  // const edit = (item: Item) => {
  //   setItemSelected(item);
  //   setEditForm(true);
  // };

  const handleFormSubmit = (id: number, updatedItemData: ItemData) => {
    const updatedItem: Item = {
      ...itemSelected!,
      ...updatedItemData,
    };
    setFormData((prevData) =>
      prevData.map((data) => (data.id === updatedItem.id ? updatedItem : data))
    );
  };
 
  const handleCloseClick = () => {
    setEditForm(false)
  }

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <div className='w-full lg:w-11/12 bg-white shadow-md lg:shadow-none border border-grey/200 rounded-md flex flex-col lg:flex-row p-5 justify-between lg:items-center mb-3'>
            <div className='flex flex-col lg:flex-row justify-between lg:items-center items-start lg:w-10/12 grid grid-cols-4 gap-4 mt-4'>
              <div className='w-full  flex flex-col '>
                <div className='text-grey/500'>{item.itemCode}</div>
                <div className='font-semibold'>{item.item}</div>
              </div>

              <div className='w-full flex flex-col '>
                <div className='text-grey/500'>Brand</div>
                <div className='font-semibold'>{item.brand}</div>
              </div>

              <div className='w-full flex flex-col '>
                <div className='text-grey/500 '>UoM</div>
                <div className='font-semibold'>{item.unitOfMeasurement}</div>
              </div>
              <div className='w-full flex flex-col'>
                <div className='text-grey/500'>Unit Price</div>
                <div className='font-semibold'>KES {item.unitPrice}</div>
              </div>
            </div>

            <div className='flex flex-col lg:flex-row lg:justify-end lg:w-6/12'>
              <div className='flex items-center justify-end my-5 lg:my-0 lg:py-1 lg:w-6/12'>
                <button className='rounded-full mr-2' onClick={() => handleEdit(item)}>
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
          <AddItem
  itemData={{
    itemCode: itemSelected.itemCode,
    item: itemSelected.item,
    brand: itemSelected.brand,
    unitOfMeasurement: itemSelected.unitOfMeasurement,
    unitPrice: itemSelected.unitPrice.toString(),
  }}
  onFormSubmit={(updatedItemData) => handleFormSubmit(itemSelected.id, updatedItemData)}
  onClose={handleCloseClick}
/>

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
