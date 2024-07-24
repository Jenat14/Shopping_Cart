import { useState, useEffect } from "react";
import { hourglass } from 'ldrs'
import { Button } from "@/components/ui/Button"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/Card";
hourglass.register()

type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
};

const AddToCart = (product: Product) => {
    const CartItem = localStorage.getItem("cart");
    const cart: Product[] = CartItem ? JSON.parse(CartItem) : [];

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart))
    console.log(cart);
}

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
        <div className="container p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {result ? (
                    result.map(product => (
                        <Card key={product.id} className="text-center flex flex-col justify-between">
                            <CardHeader>
                                <CardTitle>{product.title}</CardTitle>
                                <CardDescription className="h-[20px] truncate">{product.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col items-center justify-center">
                                <img className="h-[150px]" src={product.image} alt={product.title} />
                                <p>Price: ${product.price}</p>
                                <p>Category: {product.category}</p>
                            </CardContent>
                            <CardFooter className="flex items-center gap-3 justify-center">
                                <Button variant="destructive" onClick={() => AddToCart(product)}>Add to cart <img className="ml-2 h-[70%]" src="src/assets/cart.png" alt="Cart Icon" /></Button>
                                <Button variant="default">See more</Button>
                            </CardFooter>
                        </Card>
                    ))
                ) : (
                    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
                        <l-hourglass
                            size="40"
                            speed="1.75"
                            color="black"
                        ></l-hourglass>
                    </div>
                )}
            </div>
        </div>
    )
}
