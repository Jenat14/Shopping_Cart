import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";
import cart from "../assets/cart-black.png";
import CartData from "./CartData";
import Detail from "./Detail";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
type Product = {
  id: number;
  quantity: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;

};

export default function cartProduct() {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const CartItems = localStorage.getItem("cart");
    if (CartItems) {
      setCartProducts(JSON.parse(CartItems));
    }
  }, []);
  const showProductDetail = (product: Product) => {
    setSelectedProduct(product);
  };

  const Remove = (removedProduct: Product) => {
    const updatedCart = cartProducts.filter(
      (product) => product.id !== removedProduct.id
    );
    setCartProducts(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast("Item Removed from Cart.");
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    const updatedCart = cartProducts.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setCartProducts(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      <CartData cartProducts={cartProducts} />
      {selectedProduct && (
      <div className="fixed bg-white shadow-lg border p-5 rounded-lg left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[90%] md:max-w-[700px] h-auto md:h-[500px] z-50">
          <Detail product={selectedProduct} />
          <Button variant="default" onClick={() => setSelectedProduct(null)}>
            Close
          </Button>
        </div>
      )}
      <div className="flex flex-col items-center justify-center">
        {cartProducts.length > 0 ? (
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {cartProducts.map((product) => (
                <Card
                  key={product.id}
                  className="text-center flex flex-col justify-between"
                >
                  <CardHeader>
                    <CardTitle>{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center">
                    <img
                      className="h-[150px]"
                      src={product.image}
                      alt={product.title}
                    />
                    <p>Price: ${product.price}</p>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-3">
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" onClick={() =>
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
                    <Button variant="outline" onClick={() =>
                          updateQuantity(
                            product.id,
                            Math.min(5, product.quantity + 1)
                          )
                        }>
                      +
                    </Button>
                  </div>
                    <div  className="flex items-center gap-3 justify-center">
                      <Button
                        variant="destructive"
                        onClick={() => Remove(product)}
                      >
                        Remove
                      </Button>
                      <Button
                        variant="default"
                        onClick={() => showProductDetail(product)}
                      >
                        View Product
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-screen">
            <img src={cart} alt="Cart Icon" className="mb-4" />
            <p className="font-bold text-lg">Your Cart is Empty</p>
          </div>
        )}
      </div>
    </>
  );
}
