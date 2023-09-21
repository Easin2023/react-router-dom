import { useLoaderData } from "react-router-dom";
import Product from "./Product/Product";

const Products = () => {
     const {products} = useLoaderData();
     // console.log(products)
     return (
          <div className="grid grid-cols-1 mt-10 m-6 gap-4 md:grid-cols-3">
               {
                    products.map(product => <Product key={product.id} product={product}></Product>)
               }
          </div>
     );
};

export default Products;