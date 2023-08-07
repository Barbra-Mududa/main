import React, { useState } from 'react';
import { ArrowLeftIcon, SignalIcon, FolderPlusIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import AddItem from '../addItems/AddItem';

const Header = () => {
  const navigate = useNavigate();
  const [openAddItem, setOpenAddItem] = useState(false)

  const handleOpenClick = () => {
    setOpenAddItem(true)
  }
  const handleCloseClick = () => {
    setOpenAddItem(false)
  }

  return (
    <nav className='h-fit flex flex-col'>
      <div className='flex justify-start'>
        <button
          className='mx-3 mt-3 text-grey-200 hover:bg-red-100 rounded-lg w-[30px]'
          onClick={() => navigate(-1)}
        >
          <ArrowLeftIcon className='w-6 h-6' />
        </button>
      </div>
      <div className='flex justify-between items-center py-3 border border-b border-r-0 border-l-0 border-t-0 border-gray-300 px-5'>
        <div className="mb-3">
          <h2 className='font-lato text-xl '>Catalog</h2>
        </div>
        <div className='flex-grow flex justify-end space-x-4'>
          <button className='flex items-center border border-gray-500 border-solid border-opacity-30 rounded-lg'>
            Configure Thresholds
            <SignalIcon className='w-4 h-4 text-gray-500 ml-2' />
          </button>
          <button className='flex items-center border border-gray-500 border-solid border-opacity-30 rounded-lg p-2'>
            Bulk Upload
            <FolderPlusIcon className='w-4 h-4 text-gray-500 ml-2' />
          </button>
          <button
            className='flex items-center border border-gray-500 border-solid border-opacity-30 rounded-lg p-2 bg-secondary text-white'
            onClick={handleOpenClick}>
            <PlusIcon className='w-4 h-4 ml-2' />
            Add Items
          </button>
          {openAddItem && (
            <div className='fixed h-full top-0 right-0 left-0 flex items-start justify-end'>
              <div className='flex flex-row w-2/6  bg-white p-4 rounded-lg'>
                <AddItem onFormSubmit={() => {}} onClose={handleCloseClick}/>
                <button className="absolute top-3 right-4 shadow-sm shadow-white items-center justify-center border border-gray-400 rounded-full py-1 px-1"
                  onClick={handleCloseClick}>
                  <XMarkIcon className='w-4 h-4 bg-grey-200' />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
