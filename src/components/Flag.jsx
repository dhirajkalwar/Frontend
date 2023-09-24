import React, { useState, useEffect } from "react";

const Flag = () => {
    const allRegNo = [
        888, 889, 894, 896, 897, 898, 899, 900, 835, 833, 834, 886, 1701, 1702,
        1703, 1704, 1705, 1706, 1707, 1708, 885, 879, 880, 881, 892, 893, 2173,
        2185, 2202, 2203, 2204, 2205, 840, 2171, 2209, 2212, 2213, 2214, 2215,
        2216, 2220, 2221, 2702, 2707, 2710, 2712, 2134, 2135, 2150, 2152, 2153,
        2154, 2155, 2156, 2157, 2132, 2141, 2142,
    ];
    const [step, setStep] = useState(1);
    const [regNo, setRegNo] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [token, setToken] = useState("");
    const [userName, setUserName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    useEffect(() => {
        if (step === 3) {
            console.log(
                `Email: ${email}, Name: ${name}, Phone Number: ${phoneNumber}`
            );
        }
    }, [step, email, name, phoneNumber]);

    const handleRegSubmit = (e) => {
        e.preventDefault();
        if (allRegNo.includes(parseFloat(regNo))) {
            setStep(step + 1);
        } else {
            alert("Invalid Reg No .......");
        }
    };

    const handleEmailNameFlagSubmit = (e) => {
        e.preventDefault();
        if (token === import.meta.env.VITE_APP_M4) {
            setStep(step + 1);
        } else {
            alert("Invalid Flag of Machine 4");
        }
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="flex justify-center items-center min-h-screen bg-black">
                        <div className="w-full max-w-md p-6 mx-auto bg-gray-900 text-green-400 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">
                                Verification
                            </h2>
                            <div className="mb-4">
                                <label className="block mb-2">
                                    ENTER REG NO:
                                </label>
                                <input
                                    type="text"
                                    value={regNo}
                                    onChange={(e) => setRegNo(e.target.value)}
                                    required
                                    className="w-full border p-2 rounded bg-gray-800 text-green-400"
                                />
                            </div>
                            <button
                                type="submit"
                                onClick={handleRegSubmit}
                                className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold py-2 px-4 rounded"
                            >
                                Verify
                            </button>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="flex justify-center items-center min-h-screen bg-black">
                        <div className="w-full max-w-md p-6 mx-auto bg-gray-900 text-green-400 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">
                                Provide Email, Name, and Flag
                            </h2>
                            <div className="mb-4">
                                <label className="block mb-2">Email:</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full border p-2 rounded bg-gray-800 text-green-400"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">
                                    Phone Number:
                                </label>
                                <input
                                    type="tel"
                                    value={phoneNumber}
                                    onChange={(e) =>
                                        setPhoneNumber(e.target.value)
                                    }
                                    required
                                    className="w-full border p-2 rounded bg-gray-800 text-green-400"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Name:</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full border p-2 rounded bg-gray-800 text-green-400"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">
                                    TryHackMe Username:
                                </label>
                                <input
                                    type="text"
                                    value={userName}
                                    onChange={(e) =>
                                        setUserName(e.target.value)
                                    }
                                    required
                                    className="w-full border p-2 rounded bg-gray-800 text-green-400"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Flag:</label>
                                <input
                                    type="text"
                                    value={token}
                                    onChange={(e) => setToken(e.target.value)}
                                    required
                                    className="w-full border p-2 rounded bg-gray-800 text-green-400"
                                />
                            </div>
                            <button
                                type="submit"
                                onClick={handleEmailNameFlagSubmit}
                                className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold py-2 px-4 rounded"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="flex justify-center items-center min-h-screen bg-black">
                        <div className="w-full max-w-md p-6 mx-auto bg-gray-900 text-green-400 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4 text-center">
                                Thank you for providing your information!
                            </h2>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return <div>{renderStep()}</div>;
};

export default Flag;
