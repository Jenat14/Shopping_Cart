import { useState, useEffect } from "react";
import { hourglass } from "ldrs";
import { Button } from "@/components/ui/Button";
import { toast } from "sonner";
import Cart from "../assets/cart.png";
import Detail from "./Detail";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
hourglass.register();

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
};

const AddToCart = (product: Product) => {
  const CartItem = localStorage.getItem("cart");
  const cart: Product[] = CartItem ? JSON.parse(CartItem) : [];
  const existingProductIndex = cart.findIndex((item) => item.id === product.id);
  if (existingProductIndex !== -1) {
    const existingProduct = cart[existingProductIndex];
    if (existingProduct.quantity + product.quantity > 5) {
      toast("Quantity exceeded. Maximum is 5.");
    } else {
      cart[existingProductIndex].quantity += product.quantity;
      toast("Item Added to Cart.");
    }
  } else {
    cart.push(product);
    toast("Item Added to Cart.");
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(cart);
};

export default function Product() {
  const [result, setResult] = useState<Product[] | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) =>
        setResult(
          json.map((product: Product) => ({
            ...product,
            quantity: 1,
          }))
        )
      )
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const showProductDetail = (product: Product) => {
    setSelectedProduct(product);
    
  };
  const updateQuantity = (id: number, newQuantity: number) => {
    setResult((prevResult) =>
      prevResult
        ? prevResult.map((product) =>
            product.id === id ? { ...product, quantity: newQuantity } : product
          )
        : prevResult
    );
  };

  return (
    <div className="container p-5 relative">
      {selectedProduct && (
        <div className="fixed bg-white shadow-lg border p-5 rounded-lg left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[90%] md:max-w-[700px] h-auto md:h-[500px] z-50">
          <Detail product={selectedProduct} />
          <Button
            variant="default"
            onClick={() => setSelectedProduct(null)}
            className="mt-4"
          >
            Close
          </Button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {result ? (
          result.map((product) => (
            <Card
              key={product.id}
              className="text-center flex flex-col justify-between"
            >
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex p-4 flex-col items-center justify-center">
                <img
                  className="h-[150px]"
                  src={product.image}
                  alt={product.title}
                />
                <p>Price: ${product.price}</p>
                <p>Category: {product.category}</p>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
              <div className="flex items-center space-x-2">
                    <Button variant="outline"  onClick={() =>
                      updateQuantity(
                        product.id,
                        Math.max(1, product.quantity - 1)
                      )
                    }>
                      -
                    </Button>
                    <input
                      type="number"
                      readOnly
                      value={product.quantity}
                      className="w-12 text-center h-10 border border-gray-300 rounded"
                    />
                    <Button variant="outline"  onClick={() =>
                      updateQuantity(
                        product.id,
                        Math.min(5, product.quantity + 1)
                      )
                    }>
                      +
                    </Button>
                  </div>
                <div className="flex items-center gap-3 justify-center">
                    <Button
                      variant="destructive"
                      onClick={() => AddToCart(product)}
                    >
                      Add to cart{" "}
                      <img className="ml-2 h-[70%]" src={Cart} alt="Cart Icon" />
                    </Button>
                    <Button
                      variant="default"
                      onClick={() => showProductDetail(product)}
                    >
                      See more
                    </Button>
                </div>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
            <l-hourglass size="40" speed="1.75" color="black"></l-hourglass>
          </div>
        )}
      </div>
    </div>
  );
}
