import { useState } from "react";

const ShippingDetails = () => {
    const [shippingInfo, setShippingInfo] = useState({
        fullName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    return (
        <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Shipping Details</h3>
            <div className="mb-4">
                <label className="block mb-2">Full Name</label>
                <input
                    type="text"
                    name="fullName"
                    placeholder="John Doe"
                    value={shippingInfo.fullName}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-400 rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Address</label>
                <input
                    type="text"
                    name="address"
                    placeholder="1234 Main St"
                    value={shippingInfo.address}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-400 rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">City</label>
                <input
                    type="text"
                    name="city"
                    placeholder="New York"
                    value={shippingInfo.city}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-400 rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Postal Code</label>
                <input
                    type="text"
                    name="postalCode"
                    placeholder="10001"
                    value={shippingInfo.postalCode}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-400 rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Country</label>
                <input
                    type="text"
                    name="country"
                    placeholder="United States"
                    value={shippingInfo.country}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-400 rounded-md"
                />
            </div>
        </div>
    );
};

export default ShippingDetails;
