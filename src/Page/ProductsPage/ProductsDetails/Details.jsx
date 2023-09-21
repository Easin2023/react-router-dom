import { useLoaderData } from "react-router-dom";
const Details = () => {
     const details = useLoaderData();
     const {description,images,price} = details;
  return (
     <div className="mx-6 border-2 p-10 mt-10 rounded-xl">
          <div className="flex">
               <img className="w-1/3 pr-4 " src={images[0]} alt="" />
               <img className="w-1/3 pr-4 " src={images[1]}  alt="" />
               <img className="w-1/3 pr-4 " src={images[2]}  />
          </div>
          <p className="mt-8 text-4xl">
               {description}
          </p>
          <p className="text-4xl font-bold mt-5">
               ${price}
          </p>
     </div>
  );
};

export default Details;
