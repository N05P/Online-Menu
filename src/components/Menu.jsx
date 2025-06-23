import React from 'react';
import useApi from '../hooks/useApi';
import Shimmer from './Shimmer';
import { Heart } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLike } from '../utils/redux/LikedSlice';


const Menu = () => {
  const ap = useApi();
  const dispatch = useDispatch();

  function handleAddItem(itemId){
    dispatch(toggleLike(itemId))
  }

  const likedItems = useSelector(state => state.liked.likedItems);

  return (
    <>
      {ap.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="p-6 flex justify-center items-center flex-col">
          <h1 className="text-3xl font-bold text-center text-purple-800 mb-8">🍽 Recipes</h1>

          <div className="grid grid-cols-3 gap-6 justify-center items-center relative">
            {ap.map((item) => (
              <div
                key={item.id}
                className="relative bg-white rounded-2xl w-90 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-2"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-contain"
                />
                <Heart
                  className={`absolute top-2 right-2 w-6 h-6 cursor-pointer ${
                    likedItems.includes(item.id) ? 'text-red-500 fill-red-500' : 'text-gray-400'
                  }`}
                  onClick={() => handleAddItem(item.id)}
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-purple-700 mb-2">{item.name}</h2>
                  <p className="text-sm text-gray-600 mb-1">
                    🍽 <span className="font-medium">Cuisine:</span> {item.cuisine}
                  </p>
                  <p className="text-sm text-gray-600">
                    ⏱ <span className="font-medium">Prep Time:</span> {item.prepTimeMinutes} mins
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};



export default Menu;
