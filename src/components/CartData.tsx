import React from "react";
import { Button } from "@/components/ui/Button";

type Product = {
    id: number,
    title: string,
    price: number,
    image: string
};

type CartDataProps = {
    cartProducts: Product[];
};

const CartData: React.FC<CartDataProps> = ({ cartProducts }) => {
    const totalItems = cartProducts.reduce((total) => total + 1, 0);
    const totalPrice = cartProducts.reduce((total, product) => total + product.price, 0);

    return (
        <div className="text-center flex gap-3 justify-evenly my-4">
            <div className="bg-gray-200 w-[400px] p-4 rounded-lg">
                <p>Total Items: {totalItems}</p>
            </div>
            <div className="bg-gray-200 w-[400px] p-4 rounded-lg">
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            </div>
            <Button className="h-auto w-[400px]" disabled={totalItems === 0} variant="destructive">Proceed to by {totalItems} item(s) </Button>
        </div>
    );
};

export default CartData;
