import React, { useState, useRef, useEffect } from "react";
// import Getlocalstoreage  from "./Getlocalstoreage";
export default function Inputfield() {
  // const { withd, balan, depos } = Getlocalstoreage;
  //  state declaration
  const msg = "Please enter a valid number";
  const [deposit, setDeposite] = useState(0);
  const [balance, setBalance] = useState(0);
  const [storevlue, setStorevalue] = useState();
  const [withdraw, setwithdraw] = useState(0);
  const [storeminusvalue, setMinusvalue] = useState();
  //  deposite site
  const depositeFunbtn = () => {
    if (storevlue > 0) {
      setDeposite((deposit) => deposit + storevlue);
      setBalance(() => balance + storevlue);
    } else {
      alert(msg);
    }

    // storevlue > 0
    //   ? setDeposite((deposit) => deposit + storevlue)(
    //     setBalance(() => balance + storevlue)

    //     )
    //   : alert("Please enter a valid number");
    clearinput();
  };

  const inputHandler = (e) => {
    setStorevalue(() => Number(e.target.value));
  };
  // withdraw site
  const withdrawinputHandler = (e) => {
    setMinusvalue(() => Number(e.target.value));
  };
  const withdrawbtnHandler = () => {
    if (storeminusvalue == 0) {
      alert(msg);
    } else if (storeminusvalue <= balance) {
      setwithdraw(() => withdraw + storeminusvalue);
      setBalance(() => balance - storeminusvalue);
    } else {
      alert("your  current  amount is less than entered amount ");
    }

    clearinput();
    // storeminusvalue <= balance
    //   ? setwithdraw(() => withdraw + storeminusvalue)(
    //       setBalance(() => balance - storeminusvalue)
    //     )
    //   : alert("your  current  amount less than entered amount ")
    // clearinput();
  };
  // input clear site
  const clearinput = () => {
    setStorevalue("");
    setMinusvalue("");
  };

  let focus = useRef(null);
  useEffect(() => {
    focus.current.focus();
  }, []);
  // setLocalstorage   site
  const array = [withdraw, balance, deposit];
  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(array));
  }, []);
  //   let focuson = useRef(null);
  //   useEffect(() => {
  //     focuson.current.focus();
  //   }, []);
  return (
    <div>
      <header>
        <h1 className="text-5xl text-center mt-16">
          Let's get some
          <span className="font-semibold text-purple-600">Money</span>!!!
        </h1>
      </header>
      <main className=" w-3/4 mx-auto">
        {/* <!-- balance and transaction --> */}
        <section className="mt-8">
          <div className="grid grid-cols-3 gap-4 text-white">
            <div className="bg-blue-300 p-8 rounded shadow hover:shadow-lg">
              <h3 className="text-2xl">Deposit</h3>
              <h4 className="text-4xl">
                $<span id="deposit-amount">{deposit || "00"}</span>
              </h4>
            </div>
            <div
              className={`${
                withdraw > 0 ? "bg-red-300" : "bg-green-300 "
              } p-8 rounded shadow hover:shadow-lg `}
            >
              <h3 className="text-2xl">Withdraw</h3>
              <h4 className="text-4xl">
                $<span id="withdraw-amount">{withdraw || "00"}</span>
              </h4>
            </div>
            <div
              className={`${
                balance > 100 ? "bg-yellow-300" : "bg-red-300"
              } p-8 rounded shadow hover:shadow-lg`}
            >
              <h3 className="text-2xl">Balance</h3>
              <h4 className="text-4xl">
                $<span id="balance-amount">{balance || "00"}</span>
              </h4>
            </div>
          </div>
          {/* <!-- Withdraw and deposit money --> */}
          <section className="mt-4">
            <h3 className="text-3xl text-center mb-8">Deposit and Withdraw</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-purple-100 rounded p-8">
                <h3 className="text-2xl mb-4">Please Deposit</h3>
                <input
                  onChange={inputHandler}
                  ref={focus}
                  value={storevlue}
                  id="deposit-input"
                  className="border block border-gray-400 rounded w-3/4 mb-4 px-2"
                  type="text"
                  placeholder="Enter your deposit amount in $..."
                />
                <button
                  onClick={depositeFunbtn}
                  id="deposit-btn"
                  className="bg-yellow-600 px-4 rounded py-2 text-white font-medium"
                >
                  Deposit
                </button>
              </div>
              <div className="bg-red-100 rounded p-8">
                <h3 className="text-2xl mb-4">Please Withdraw</h3>
                <input
                  onChange={withdrawinputHandler}
                  value={storeminusvalue}
                  ref={focus}
                  id="withdraw-input"
                  className="border block border-gray-400 rounded w-3/4 mb-4 px-2"
                  type="text"
                  placeholder="Enter your withdraw amount in $..."
                />
                <button
                  onClick={withdrawbtnHandler}
                  id="withdraw-btn"
                  className="bg-yellow-600 px-4 rounded py-2 text-white font-medium"
                >
                  Withdraw
                </button>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
