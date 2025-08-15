export default function(){
    const features = [
        { src: "images/features/timer.png", label: "Delivery in Minutes" },
        { src: "images/features/money.png", label: "Low Prices" },
        { src: "images/features/delivery.png", label: "Pay on Delivery" },
        { src: "images/features/cart.png", label: "No Minimum Order" },
        { src: "images/features/combo.png", label: "Combo Store" },
        { src: "images/features/discounts.png", label: "Deals of the Week" }
    ]
    return (
        <div className="my-2 py-2">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-6 sm:gap-6">
            {features && features.map((feature) => (
                <div key={feature.src} className="flex-shrink-0 sm:flex-shrink bg-[#ffe072] rounded-lg p-4 aspect-[3/1] flex flex-col items-center justify-center min-w-[140px]">
                    <img src={feature.src} alt={feature.label} className="h-10 w-10 object-contain"/>
                    <p className="text-sm font-medium text-center">{feature.label}</p>
                </div>
            ))}
            </div>
        </div>
    )
}