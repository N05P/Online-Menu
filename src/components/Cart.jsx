import React from 'react'
import { useSelector } from 'react-redux';
import { Heart } from 'lucide-react';
import Empty from './Empty';
import { useDispatch } from 'react-redux';
import { removeItem } from '../utils/redux/AddSlice';

const Menu = ({Item}) => {
  
    const likedItems = useSelector(state => state.additems);
    
    const dispatch = useDispatch();

    function handleRemove(item){
      dispatch(removeItem(item))
    }
  
    return (
      <>
        {Item.length === 0 ? (
          <Empty />
        ) : (
          <div className="p-6 flex justify-center items-center flex-col">
            <h1 className="text-3xl font-bold text-center text-purple-800 mb-8">🍽 Recipes</h1>
  
            <div className="grid grid-cols-3 gap-6 justify-center items-center relative">
              {Item.map((item) => (
                <div
                  key={item.id}
                  className="relative bg-white rounded-2xl w-90 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-2"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-contain"
                  />
                 
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-purple-700 mb-2">{item.name}</h2>
                    <p className="text-sm text-gray-600 mb-1">
                      🍽 <span className="font-medium">Cuisine:</span> {item.cuisine}
                    </p>
                    <p className="text-sm text-gray-600">
                      ⏱ <span className="font-medium">Prep Time:</span> {item.prepTimeMinutes} mins
                    </p>
                    <button className='bg-red-500 p-2' onClick={()=>handleRemove(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    );
  };



const Cart = () => {

 
    const select = useSelector((Store)=>Store.additems)


  return (
    <div>
        {
           <Menu Item={select}></Menu>
        }
    </div>
  )
}

export default Cart