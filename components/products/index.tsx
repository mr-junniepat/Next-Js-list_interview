import React from "react";
import Image from "next/image";

function Products(props: { index: React.Key | null | undefined; item: { category: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }; }){
    return(
        <>

      <a href="#" className="group" key={props.index}>
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <Image src={props?.item.image} 
            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." 
            className="h-[350px] w-full object-cover object-center group-hover:opacity-75"
            layout="responsive"
            width="100%"
            height="100px"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{props?.item.title}</h3>
        <span>{props?.item.category}</span>
        <p className="mt-1 text-lg font-medium text-gray-900">${props?.item.price}</p>
      </a>

        </>
    )
}

export default Products;