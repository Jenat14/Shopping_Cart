type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
};

type DetailProps = {
    product: Product;
};
export default function Detail({product}:DetailProps) {
    return (
        <div className="container p-2">
            <div className="flex gap-3">
            <img src={product.image} alt={product.title} className="w-[300px] h-[400px]" />
                <div>
                    <h2 className="font-bold text-xl mb-4">{product.title}</h2>
                    <p>Category: {product.category}</p>
                    <p className='text-justify my-4 max-h-[200px] overflow-y-auto'>{product.description}</p>
                    <p className='text-lg font-bold'>Price: ${product.price}</p>
                </div>
            </div>
        </div>
    );
};
