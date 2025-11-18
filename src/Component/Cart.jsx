import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useStateContext } from '../context/ContextProvider';
import { cartData } from '../data/dummy';
import { Button } from '.';

const Cart = () => {
  const { currentColor, setIsClicked, initialState } = useStateContext();

  return (
    <div
      className="fixed backdrop-blur-sm inset-0 flex justify-end z-50"
      onClick={() => setIsClicked(initialState)} // close when clicking outside
    >
      <div
        className="h-full w-96 bg-white dark:bg-[#484B52] dark:text-gray-200 p-8 shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // prevent close when inside
      >
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Shopping Cart</p>
          <Button
            icon={<MdOutlineCancel />}
            color="rgb(153, 171, 180)"
            bgHoverColor="light-gray"
            size="2xl"
            borderRadius="50%"
            onClick={() => setIsClicked(initialState)}
          />
        </div>
        {cartData?.map((item, index) => (
          <div key={index} className="flex items-center gap-5 border-b p-4">
            <img className="rounded-lg h-20 w-20" src={item.image} alt="" />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{item.category}</p>
              <div className="flex gap-4 mt-2 items-center">
                <p className="font-semibold text-lg">{item.price}</p>
                <div className="flex items-center border rounded">
                  <p className="p-2 text-red-600 border-r"><AiOutlineMinus /></p>
                  <p className="p-2 text-green-600 border-r">0</p>
                  <p className="p-2 text-green-600"><AiOutlinePlus /></p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-3 mb-3">
          <div className="flex justify-between">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
            <p className="font-semibold">₹890</p>
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">₹890</p>
          </div>
        </div>
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="Place Order"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
