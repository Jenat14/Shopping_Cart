import { useState, useEffect } from "react";
import { hourglass } from 'ldrs'
hourglass.register()

type Product = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string
};

export default function Product() {
  const [result, setResult] = useState<Product[] | null>(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setResult(json))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  console.log({ result });

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {result ? (
          result.map(product => (
            <div key={product.id} className="product">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Category: {product.category}</p>
              <img src={product.image} alt={product.title} />
            </div>
          ))
        ) : (
                <div className="h-[100vh] w-[100vw] flex justify-center items-center">
                    <l-hourglass
                    size="40"
                    bg-opacity="0.1"
                    speed="1.75"
                    color="black"
                    ></l-hourglass>
                </div>
        )}
      </div>
    </div>
  );
}
