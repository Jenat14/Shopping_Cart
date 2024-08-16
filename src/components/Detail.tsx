type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type DetailProps = {
  product: Product;
};

export default function Detail({ product }: DetailProps) {
  return (
    <div className="container p-2 mx-auto">
      <div className="flex flex-col md:flex-row gap-3">
        <img
          src={product.image}
          alt={product.title}
          className="w-full max-w-[200px] h-[200px] md:max-w-[300px] md:h-[400px] object-contain mx-auto md:mx-0"
        />
        <div className="mt-4 md:mt-0">
          <h2 className="font-bold text-lg md:text-xl mb-2 md:mb-4">{product.title}</h2>
          <p className="text-sm md:text-base">Category: {product.category}</p>
          <p className="text-sm md:text-base text-justify my-2 md:my-4 max-h-[150px] md:max-h-[200px] overflow-y-auto">
            {product.description}
          </p>
          <p className="text-base md:text-lg font-bold">Price: ${product.price}</p>
        </div>
      </div>
    </div>
  );
}
