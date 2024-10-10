import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import "./CartPage.css";

export default function CartPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { cartItems, removeFromCart, updateCartItemQuantity } = useCart();
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);

    const handleApplyCoupon = () => {
        if (couponCode === 'DISCOUNT10') {
            setDiscount(0.1);
        } else {
            setDiscount(0);
        }
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const calculateTotal = () => {
        return calculateSubtotal() * (1 - discount);
    };

    return (
        <div className="cart-container">
            {cartItems.length === 0 ? (
                <div className="empty-cart">
                    <h2>Your Cart is empty</h2>
                    <p>Time to start shopping!</p>
                    <Link to='/ShopPage'>
                        <button className="shop-btn">Shop</button>
                    </Link>
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        <h2>My Bag</h2>
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} />
                                <div className="cart-item-details">
                                    <h4>{item.name}</h4>
                                    <p>Price: ₹{item.price}</p>
                                    <div className="quantity">
                                        <label>Quantity: </label>
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            min="1"
                                            onChange={(e) => updateCartItemQuantity(item.id, parseInt(e.target.value))}
                                        />
                                    </div>
                                    <p>Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="delete-btn">Delete</button>
                            </div>
                        ))}

                        {/* Coupon Code Section */}
                        <div className="coupon-section">
                            <input
                                type="text"
                                value={couponCode}
                                placeholder="Enter coupon code"
                                onChange={(e) => setCouponCode(e.target.value)}
                            />
                            <button onClick={handleApplyCoupon}>Apply Coupon</button>
                        </div>
                    </div>

                    {/* Right Side - Payment Summary */}
                    <div className="cart-summary">
                        <h3>Order Summary</h3>
                        <div className="summary-item">
                            <span>Subtotal:</span>
                            <span>₹{calculateSubtotal().toFixed(2)}</span>
                        </div>
                        <div className="summary-item">
                            <span>Discount:</span>
                            <span>₹{(calculateSubtotal() * discount).toFixed(2)}</span>
                        </div>
                        <div className="summary-item total">
                            <span>Total:</span>
                            <span>₹{calculateTotal().toFixed(2)}</span>
                        </div>
                        <button className="checkout-btn">Proceed to Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
}
