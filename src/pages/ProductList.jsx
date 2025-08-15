import React from "react";
import useCart from "../hooks/useCart";

export default function() {
    const {cart, addToCart, updateQuantity, totalItems} = useCart();

    // Function to check if a product is already in the cart
    const getCartItem = (productId) => {
        return cart.find((item) => item.id === productId);
    };

    const products = [
        {
            id: 1,
            name: "Priya OPC 53 Grade Cement 50 Kg Bag",
            image: "/images/products/cement/Priya_OPC_53_Grade_Cement_50_Kg_Bag_new.webp",
            price: 390,
            discount: 10
        },
        {
            id: 2,
            name: "Saint-Gobain Gyproc Xpert Gypsum Punning Plaster 25 Kg Bag",
            image: "/images/products/cement/Saint-Gobain_Gyproc_Xpert_Gypsum_Punning_Plaster_25_Kg.webp",
            price: 320,
            discount: 10
        },
        {
            id: 3,
            name: "Ramco Supergrade PPC Cement 50 Kg Bag",
            image: "/images/products/cement/Ramco_Supergrade_PPC_Cement_50_Kg_Bag_new_3.webp",
            price: 405,
            discount: 12
        },
        {
            id: 4,
            name: "Birla White Cement 25 Kg Bag",
            image: "/images/products/cement/Birla_White_Cement_17b4fb03-ab2b-4e94-8bee-de1e6e30eccc.webp",
            price: 600,
            discount: 10
        },
        {
            id: 5,
            name: "Birla Super OPC 53 Grade Cement 50 Kg Bag",
            image: "/images/products/cement/Birla_Super_OPC_53_Grade_Cement_50_Kg_Bag.webp",
            price: 465,
            discount: 0
        },
        {
            id: 6,
            name: "JSW Enduroplast Ready Mix Plaster 40 Kg Bag",
            image: "/images/products/cement/JSWEnduroplast.webp",
            price: 280,
            discount: 0
        },
        {
            id: 7,
            name: "Maha PPC Cement 50 Kg Bag",
            image: "/images/products/cement/Maha_PPC_Cement_50_Kg_Bag_new.webp",
            price: 370,
            discount: 10
        },
        {
            id: 8,
            name: "Priya PPC Cement 50 Kg Bag",
            image: "/images/products/cement/Priya_PPC_Cement_50_Kg_Bag.webp",
            price: 370,
            discount: 0
        }

    ]
    return (
        <>
            <div className='container mx-auto px-8 py-5 bg-gray-50'>
                <h1 className="text-gray-800 text-3xl pb-4">Cements</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => {
                        const cartItem = getCartItem(product.id);
                        const quantity = cartItem ? cartItem.quantity : 0;
                        return (
                            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="border border-gray-300 m-6 rounded-lg relative h-80 flex items-center justify-center">
                                    {product.discount > 0 && 
                                        <span className="bg-green-600 text-xs text-white px-2 py-1 rounded-md absolute top-2 left-2">{product.discount}% OFF</span>
                                    }
                                    <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain py-3"/>
                                </div>
                                <div className="p-4 flex flex-col flex-grow justify-between">
                                    <h2 className="text-md font-normal text-gray-800 min-h-[48px]">{product.name}</h2>
                                    {product.discount > 0 ? (
                                            <p className="text-gray-600 text-sm mt-2 min-h-[24px]">
                                                <span className="font-semibold">Rs. {Math.round(product.price - ((product.price * product.discount)/100))} </span>
                                                <span className="line-through">Rs. {product.price}</span>
                                            </p>
                                        ):(
                                            <p className="text-gray-600 font-semibold text-sm mt-2 min-h-[24px]">Rs. {product.price}</p>
                                        )
                                    }
                                    <div className="mt-4">
                                        {quantity > 0 ? (
                                            <div className="flex item-center justify-between gap-1 w-full">
                                                <button
                                                    className="flex-1 px-3 py-1 bg-[#EEC31B] text-white rounded-md hover:bg-[#e5b60b] cursor-pointer"
                                                    onClick={()=>updateQuantity(product.id, quantity-5)}
                                                >
                                                    &lt;&lt;
                                                </button>
                                                <button
                                                    className="flex-1 px-3 py-1 bg-[#EEC31B] text-white rounded-md hover:bg-[#e5b60b] cursor-pointer"
                                                    onClick={()=>updateQuantity(product.id, quantity-1)}
                                                >
                                                    -
                                                </button>
                                                <span className="flex-1 px-4 py-1 border text-center rounded-md">{quantity}</span>
                                                <button
                                                    className={`flex-1 px-3 py-1 text-white rounded-md 
                                                        ${quantity >= 20 
                                                            ? "bg-gray-300 cursor-not-allowed"
                                                            : "bg-[#328616] hover:bg-[#173d01] cursor-pointer"
                                                        }
                                                    `}
                                                    disabled={quantity >= 20}
                                                    onClick={()=>updateQuantity(product.id, quantity+1)}
                                                >
                                                    +
                                                </button>
                                                <button
                                                    className={`flex-1 px-3 py-1 text-white rounded-md 
                                                        ${quantity >= 20 
                                                            ? "bg-gray-300 cursor-not-allowed"
                                                            : "bg-[#328616] hover:bg-[#173d01] cursor-pointer"
                                                        }
                                                    `}
                                                    disabled={quantity >= 20}
                                                    onClick={()=>updateQuantity(product.id, quantity+5)}
                                                >
                                                    &gt;&gt;
                                                </button>
                                                </div>
                                        ): (
                                            <button 
                                                className="w-full py-2 px-4 bg-[#328616] hover:bg-[#173d01] text-white rounded-md cursor-pointer" 
                                                onClick={()=>addToCart(product)}>Add
                                            </button>
                                        )
                                    }
                                    </div>
                                </div>
                            </div>
                        )})}
                </div>
            </div>
        </>
    )
}