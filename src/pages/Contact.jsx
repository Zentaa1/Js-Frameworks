import { useState } from "react";
import { Helmet } from "react-helmet";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        subject: "",
        email: "",
        body: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required.";
        } else if (formData.fullName.length < 3) {
            newErrors.fullName = "Full name must be at least 3 characters.";
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required.";
        } else if (formData.subject.length < 3) {
            newErrors.subject = "Subject must be at least 3 characters.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid.";
        }

        if (!formData.body.trim()) {
            newErrors.body = "Message is required.";
        } else if (formData.body.length < 3) {
            newErrors.body = "Message must be at least 3 characters long.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted successfully:", formData);
            alert("Your message has been sent!");
            setFormData({ fullName: "", subject: "", email: "", body: "" });
        }
    };

    return (
        <div className="min-h-screen bg-primary text-white flex items-center justify-center p-4">
            <Helmet>
                <title>ShopExtra - Contact us</title>
                <meta name="description" content="Contact us at shopextra if you have any questions."/>
            </Helmet>
            <form
                onSubmit={handleSubmit}
                className="p-6 rounded-lg shadow-lg w-full max-w-lg"
            >
                <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
                <div className="mb-4">
                    <label className="block mb-2">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-400 rounded-md text-black"
                        placeholder="Your Full Name"
                    />
                    {errors.fullName && (
                        <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Subject</label>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-400 rounded-md text-black"
                        placeholder="Subject"
                    />
                    {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-400 rounded-md text-black"
                        placeholder="Your Email"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Message</label>
                    <textarea
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-400 rounded-md h-32 text-black"
                        placeholder="Your Message"
                    ></textarea>
                    {errors.body && (
                        <p className="text-red-500 text-sm mt-1">{errors.body}</p>
                    )}
                </div>
                <button
                    type="submit"
                    className="bg-customOrange text-white py-2 px-4 rounded-md hover:bg-opacity-80 transition"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactUs;
