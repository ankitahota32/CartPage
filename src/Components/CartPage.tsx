import React, { useState } from "react";
import { Minus, Plus, Search, ShoppingCart, Star, User, X } from "lucide-react";

// Types
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  inStock: boolean;
}

// Dummy Data
const initialProducts: Product[] = [
  {
    id: "1",
    name: "Aloevera",
    price: 76,
    image:
      "https://www.sparindia.com/_next/image?url=https%3A%2F%2Fmcprod.sparindia.com%2Fmedia%2Fcatalog%2Fproduct%2F7%2F1%2F71V_Q59-NuL__SX679__1.jpg%3Fquality%3D80%26bg-color%3D255%2C255%2C255%26fit%3Dbounds%26height%3D%26width%3D&w=48&q=100",
    quantity: 2,
    inStock: true,
  },
  {
    id: "2",
    name: "Kwality Walls Slow Churn Pink Guava Icecream Tub 500ML",
    price: 375,
    image:
      "https://www.sparindia.com/_next/image?url=https%3A%2F%2Fmcprod.sparindia.com%2Fmedia%2Fcatalog%2Fproduct%2F4%2F0%2F40313862_1-kwality-walls-slow-churn-pink-guava-ice-cream_1_1.jpg%3Fquality%3D80%26bg-color%3D255%2C255%2C255%26fit%3Dbounds%26height%3D%26width%3D&w=96&q=100",
    quantity: 1,
    inStock: true,
  },
  {
    id: "3",
    name: "Baskin Robbins Ic Mississippi Mud Tub 450ML",
    price: 410,
    image:
      "https://www.sparindia.com/_next/image?url=https%3A%2F%2Fmcprod.sparindia.com%2Fmedia%2Fcatalog%2Fproduct%2F4%2F0%2F40126056_3-baskin-robbins-ice-cream-mississippi-mud_1_2.jpg%3Fquality%3D80%26bg-color%3D255%2C255%2C255%26fit%3Dbounds%26height%3D%26width%3D&w=96&q=100",
    quantity: 1,
    inStock: true,
  },
  {
    id: "4",
    name: "Amul Processed Cheese Slices (Pack)",
    price: 440,
    image:
      "https://www.sparindia.com/_next/image?url=https%3A%2F%2Fmcprod.sparindia.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fm%2Famul-processed-cheese-slices-750-g-pack-product-images-o490808039-p490808039-0-202305302000_1_1.jpg%3Fquality%3D80%26bg-color%3D255%2C255%2C255%26fit%3Dbounds%26height%3D%26width%3D&w=96&q=100",
    quantity: 1,
    inStock: true,
  },
];

// Product Card Component
function ProductCard({
  product,
  onUpdateQuantity,
  onRemove,
}: {
  product: Product;
  onUpdateQuantity: (id: string, newQuantity: number) => void;
  onRemove: (id: string) => void;
}) {
  return (
    <div className="flex items-center justify-between py-4 border-b">
      <div className="flex items-center gap-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-20 h-20 rounded-md object-cover"
        />
        <div>
          <h3 className="font-medium">{product.name}</h3>
          <p className="text-lg font-semibold">₹{product.price}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center border rounded-md">
          <button
            onClick={() => onUpdateQuantity(product.id, product.quantity - 1)}
            disabled={product.quantity <= 1}
            className="p-2 hover:bg-gray-100 disabled:opacity-50"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-4">{product.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(product.id, product.quantity + 1)}
            className="p-2 hover:bg-gray-100"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        <button className="p-2 hover:text-gray-600">
          <Star className="w-5 h-5" />
        </button>
        <button
          onClick={() => onRemove(product.id)}
          className="p-2 hover:text-red-600"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

// Coupon Component
interface CouponProps {
  imageUrl: string;
  couponMessage: string;
  description: string;
}

const Coupon: React.FC<CouponProps> = ({
  imageUrl,
  couponMessage,
  description,
}) => {
  return (
    <div className="bg-white flex justify-between items-center rounded-[12px] border border-[#ESE7E6] p-[16px] mt-4 cursor-pointer">
      <div className="flex items-center">
        {/* Coupon Image */}
        <img
          alt="info"
          loading="eager"
          width="50"
          height="50"
          decoding="async"
          className="object-cover m-2"
          srcSet={`${imageUrl}?w=6489-75 1x, ${imageUrl}?w=12880-75 2x`}
          src={`${imageUrl}?w=12880-75`}
          style={{ color: "transparent", width: "50px", height: "50px" }}
        />

        {/* Coupon Text */}
        <div>
          <div className="text-green-600 text-[14px] font-[700]">
            {couponMessage}
          </div>
          <div className="text-[#657672] text-[14px] font-[400]">
            {description}
          </div>
          <div className="text-brand text-[12px] font-[500] pt-1"></div>
        </div>
      </div>

      {/* Arrow Icon */}
      <div>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="text-[1em]"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M12 17l5-5-5-5V7l7 7-7 7z"></path>
        </svg>
      </div>
    </div>
  );
};

// Main Component
export default function CartPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setProducts(
      products.map((p) => (p.id === id ? { ...p, quantity: newQuantity } : p))
    );
  };

  const removeProduct = (id: string) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const totalQuantity = products.reduce((sum, p) => sum + p.quantity, 0);
  const subtotal = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const handlingFee = 4;
  const total = subtotal + handlingFee;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-red-600">
              SPAR
            </a>
            <div className="flex items-center gap-4 md:gap-8">
              <div className="relative hidden md:block">
                <input
                  type="search"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border rounded-md w-full md:w-64"
                />
                <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
              </div>
              <a href="/cart" className="relative">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalQuantity}
                </span>
              </a>
              <a href="/profile" className="hidden md:block">
                <User className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">My Cart</h1>
            <p className="text-sm text-gray-600">{totalQuantity} items</p>
          </div>

          {/* Product List and Bill/Coupon Section - Flex Layout */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Product List */}
            <div className="flex-1 bg-white rounded-lg shadow p-4 md:p-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeProduct}
                />
              ))}
            </div>

            {/* Coupon and Bill Details Section */}
            <div className="w-full lg:w-80 bg-white rounded-lg shadow-lg p-6">
              {/* Coupon Section */}
              <Coupon
                imageUrl="https://www.sparindia.com/assets/images/checkout/coupon.png"
                couponMessage="You Unlocked 1 Coupon!"
                description="Save more with coupons"
              />

              {/* Bill Details */}
              <h2 className="text-lg md:text-xl font-bold mb-4">
                Bill Details
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between py-3 border-b border-dashed text-gray-700">
                  <span className="font-medium">Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-dashed text-gray-500">
                  <span>Handling Fee</span>
                  <span>₹{handlingFee}</span>
                </div>
                <div className="flex justify-between py-4 font-semibold text-lg md:text-xl border-b border-dashed">
                  <span>To Pay</span>
                  <span>₹{total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
