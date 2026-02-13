import React from 'react';
import { Star, Truck, ShieldCheck } from 'lucide-react';

interface ProductCardProps {
    id: string;
    name: string;
    image: string;
    price: number;
    unit: string;
    supplier: string;
    rating: number;
    reviews: number;
    deliveryTime: string;
    isBulkDiscount: boolean;
}

import { useCart } from '../context/CartContext';

const ProductCard: React.FC<ProductCardProps> = (props) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            id: props.id,
            name: props.name,
            image: props.image,
            price: props.price,
            unit: props.unit,
            supplier: props.supplier
        });
        // Optional: Show toast notification
    };

    return (
        <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            {/* Image Container */}
            <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img
                    src={props.image}
                    alt={props.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {props.isBulkDiscount && (
                    <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                        خصم كميات
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-secondary-dark line-clamp-2">{props.name}</h3>
                    </div>

                    <div className="flex items-center mb-3 text-sm text-gray-500">
                        <ShieldCheck className="w-4 h-4 mr-1 text-primary" />
                        <span className="mr-1">{props.supplier}</span>
                        <div className="flex items-center mr-auto">
                            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                            <span className="mr-1 text-gray-700 font-medium">{props.rating}</span>
                            <span className="text-gray-400 text-xs">({props.reviews})</span>
                        </div>
                    </div>
                </div>

                <div className="mt-2 pt-3 border-t border-gray-100">
                    <div className="flex justify-between items-end mb-3">
                        <div>
                            <p className="text-sm text-gray-400 mb-1">السعر للوحدة</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-xl font-bold text-secondary-dark">{props.price}</span>
                                <span className="text-sm text-gray-500 font-medium">ريال / {props.unit}</span>
                            </div>
                        </div>

                        <div className="text-right">
                            <div className="flex items-center justify-end text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
                                <Truck className="w-3 h-3 ml-1" />
                                {props.deliveryTime}
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className="w-full bg-secondary-dark text-white py-2 rounded-lg font-medium hover:bg-primary transition-colors flex items-center justify-center gap-2"
                    >
                        إضافة للسلة
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
