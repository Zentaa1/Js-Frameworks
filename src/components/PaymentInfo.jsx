import { useState } from "react";

const PaymentInfo = () => {
    const [paymentMethod, setPaymentMethod] = useState("card");

    return (
        <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
            <div className="flex gap-4 mb-6">
                <label className="flex items-center">
                    <input
                        type="radio"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mr-2"
                    />
                    <span className="text-lg">Credit/Debit Card</span>
                </label>

                <label className="flex items-center">
                    <input
                        type="radio"
                        value="paypal"
                        checked={paymentMethod === "paypal"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mr-2"
                    />
                    <span className="text-lg">PayPal</span>
                </label>
            </div>
            {paymentMethod === "card" && (
                <div>
                    <div className="mb-4">
                        <label className="block mb-2">Card Number</label>
                        <input
                            type="text"
                            placeholder="1234 5678 9123 0000"
                            className="w-full p-2 border border-gray-400 rounded-md"
                        />
                    </div>

                    <div className="mb-4 flex gap-4">
                        <div className="w-1/2">
                            <label className="block mb-2">Expiry Date</label>
                            <input
                                type="text"
                                placeholder="MM/YY"
                                className="w-full p-2 border border-gray-400 rounded-md"
                            />
                        </div>

                        <div className="w-1/2">
                            <label className="block mb-2">CVV</label>
                            <input
                                type="text"
                                placeholder="123"
                                className="w-full p-2 border border-gray-400 rounded-md"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2">Cardholder Name</label>
                        <input
                            type="text"
                            placeholder="Name on card"
                            className="w-full p-2 border border-gray-400 rounded-md"
                        />
                    </div>
                </div>
            )}

            {paymentMethod === "paypal" && (
                <div>
                    <p className="text-gray-300 mb-4">You will be redirected to PayPal to complete your purchase.</p>
                </div>
            )}
        </div>
    );
};

export default PaymentInfo;
