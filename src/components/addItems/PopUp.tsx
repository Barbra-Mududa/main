import React, { useState } from 'react';
import { InformationCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';

const PopUp: React.FC = () => {
  const [closePopUp, setClosePopUp] = useState<boolean>(false);

  const handleCloseClick = () => {
    setClosePopUp(false);
  };

  return (
    <div className="flex flex-row border-l-4 border-grey-500 p-4 justify-between" role="alert">
      <div>
        <InformationCircleIcon className="h-4 w-4" />
      </div>
      <div>
        <h3>Items added successfully</h3>
      </div>
      <div className="flex flex-row">
        <h3>Close</h3>
        <button onClick={handleCloseClick}>
          <XMarkIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default PopUp;
