import React from "react";
import Image from "next/image";


type IProducts = {
  category: string;
  description: string;
  id: string;
  thumbnail: string;
  price: number;
  title: string;
};

type ProductProps = {
  product: IProducts;
};


const Products = ({ product }: ProductProps) => {
    return(
        <>
              <a href="#" className="group" key={product.id}>
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <Image src={product.thumbnail} 
                    alt={product.title} 
                    className="h-[350px] w-full object-cover object-center group-hover:opacity-75"
                    layout="responsive"
                    width="100%"
                    height="100px"
                  />
                </div>
                <h3 className="mt-4 mb-0 text-sm text-gray-700">{product.title}</h3>
                <span className="text-md capitalize">{product.category}</span>
                <p className=" text-lg font-medium text-gray-900">${product.price}</p>
              </a>
        </>

    )
}

export default Products;