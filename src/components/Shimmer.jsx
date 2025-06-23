import useApi from "../hooks/useApi";

const Shimmer = () => {

    const numbers = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30
      ];
      

    return (
            <div className="p-6 flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold text-center text-purple-800 mb-8">🍽 Recipes</h1>
      
      <div className="grid grid-cols-3 gap-6 justify-center items-center">
        {numbers.map((item) => (
          <div className="bg-white rounded-2xl w-90 ">
          <div className="w-full h-48 bg-gray-300 rounded-t-2xl"></div>
          <div className="p-4 space-y-2">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/3"></div>
          </div>
        </div>
        ))}
      </div>
    </div>
    );
  };


export default Shimmer;