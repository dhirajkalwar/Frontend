import React, { useState, useEffect } from "react";

const Flag = () => {
  const allRegNo = [
    888, 889, 894, 896, 897, 898, 899, 900, 835, 833, 834, 886, 1701, 1702,
    1703, 1704, 1705, 1706, 1707, 1708, 885, 879, 880, 881, 892, 893, 2173,
    2185, 2202, 2203, 2204, 2205, 840, 2171, 2209, 2212, 2213, 2214, 2215,
    2216, 2220, 2221, 2702, 2707, 2710, 2712, 2134, 2135, 2150, 2152, 2153,
    2154, 2155, 2156, 2157, 2132, 2141, 2142
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
      console.log(`Email: ${email}, Name: ${name}, Phone Number: ${phoneNumber}`);
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
          <form
            onSubmit={handleRegSubmit}
            className="flex flex-col items-center justify-center gap-10 mt-5 text-white"
          >
            <h2>Verification</h2>
            <label>
              ENTER REG NO:
              <input
                type="text"
                value={regNo}
                onChange={(e) => setRegNo(e.target.value)}
                required
                className="bg-[#121212] border ml-5 rounded-md p-1"
              />
            </label>
            <button type="submit" className="p-1 border rounded-md">
              Verify
            </button>
          </form>
        );
      case 2:
        return (
          <form
            onSubmit={handleEmailNameFlagSubmit}
            className="flex flex-col items-center justify-center gap-10 mt-5 text-white"
          >
            <h2>Provide Email, Name, and Flag</h2>
            <div className="flex flex-col gap-3">
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-[#121212] border ml-5 rounded-md p-1"
                />
              </label>
              <label>
                Phone Number:
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="bg-[#121212] border ml-5 rounded-md p-1"
                />
              </label>
              <label>
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-[#121212] border ml-5 rounded-md p-1"
                />
              </label>
              <label>
                TryHackMe Username:
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  className="bg-[#121212] border ml-5 rounded-md p-1"
                />
              </label>
              <label>
                Flag:
                <input
                  type="text"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  required
                  className="bg-[#121212] border ml-5 rounded-md p-1"
                />
              </label>
              <button type="submit" className="p-1 border rounded-md">
                Submit
              </button>
            </div>
          </form>
        );
      case 3:
        return (
          <p className="mt-5 text-4xl text-center">
            Thank you for providing your information!
          </p>
        );
      default:
        return null;
    }
  };

  return <div className="multistep-form">{renderStep()}</div>;
};

export default Flag;
