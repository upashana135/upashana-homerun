import useCart from "../../hooks/useCart";

export default function(){
    const {totalItems} = useCart();
    return(
        <div className="bg-white shadow-md sticky top-0 z-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-between py-2">
                    <div className="w-1/5 sm:w-1/4 lg:w-1/10">
                        <img src="images/Logo_8.avif" alt="Logo" className="max-h-12" />
                    </div>

                    <div className="w-3/5 sm:w-2/4 lg:w-1/2">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="hidden sm:block w-1/7 text-[#EEC31C]">
                        <p className="text-sm font-semibold">Delivery in 60 minutes</p>
                        <p className="text-xs text-gray-500">Select Location</p>
                    </div>

                    <div className="hidden sm:block w-1/7 text-center bg-[#EEC31C] p-2 rounded-sm">
                        <p className="text-sm">Hello, Upashana</p>
                    </div>

                    <div className="relative w-1/12 flex justify-center bg-red-100 p-1 rounded-md">
                        <img src="images/cart-icon-14.png" alt="Cart" className="h-8 w-8 object-contain cursor-pointer"/>
                        {totalItems > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                                {totalItems}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}