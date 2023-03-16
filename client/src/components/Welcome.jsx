import React, { useContext, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Welcome = () => {
  const {
    currentAccount,
    connectWallet,
    getAvailableOptions,
    addToAvailableOptions,
    isLoading,
    buyPower,
    getAllTransactions,
  } = useContext(TransactionContext);

  const [availablePower, setAvailablePower] = useState({
    powerSource: "",
    amountOfPower: "",
    pricePerKW: "",
    duration: "",
    timeToStart: "",
  });

  const [buyAvailablePower, setBuyAvailablePower] = useState({
    receiverAddress: "",
    amountOfPower: "",
    id: "",
  });

  const handleBuyAvailablePowerChange = (e) =>
    setBuyAvailablePower((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const handleAddToAvailablePowerChange = (e) =>
    setAvailablePower((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const handleAddToAvailableOptions = async (e) => {
    const { powerSource, amountOfPower, pricePerKW, duration, timeToStart } =
      availablePower;

    e.preventDefault();

    await addToAvailableOptions({
      powerSource,
      amountOfPower,
      pricePerKW,
      duration,
      timeToStart,
    });

    const greg = await getAvailableOptions();

    setAvailableOptions(greg);
  };

  const handleBuyPower = async (e) => {
    e.preventDefault();
    const { receiverAddress, amountOfPower, id } = buyAvailablePower;
    const availableOptions = await getAvailableOptions();
    console.log(availableOptions);
    const available = availableOptions?.find((option) => option.id._hex === id);

    await buyPower({
      receiverAddress,
      amountOfPower: amountOfPower,
      pricePerKW: available.pricePerKW,
    });
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send & Buy Energy <br /> across the world
          </h1>
        {/*   <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the Decentralized Energy World. Buy and sell Decentralized
            energy easily on Krypt.
          </p> */}
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}

        {/*   <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Decentralized
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Transparent
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div> */}
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Wallet Address
                </p>
              </div>
            </div>
          </div>

          <div className="sm:w-98 w-full flex flex-row justify-between items-start">
            <form
              onSubmit={handleAddToAvailableOptions}
              className="mr-5 p-5 sm:w-94 w-full flex flex-col justify-start items-center blue-glassmorphism"
            >
              <input
                placeholder="Power Source"
                name="powerSource"
                type="text"
                onChange={(e) => handleAddToAvailablePowerChange(e)}
                required
                className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
              />

              <input
                placeholder="KW Power"
                name="amountOfPower"
                step={1}
                type="number"
                required
                onChange={(e) => handleAddToAvailablePowerChange(e)}
                className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
              />

              <input
                placeholder="Price per KW"
                name="pricePerKW"
                step={0.0001}
                type="number"
                required
                onChange={(e) => handleAddToAvailablePowerChange(e)}
                className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
              />

              <input
                placeholder="Time"
                name="timeToStart"
                type="time"
                required
                onChange={(e) => handleAddToAvailablePowerChange(e)}
                className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
              />

              <input
                placeholder="Duration"
                name="duration"
                type="text"
                required
                onChange={(e) => handleAddToAvailablePowerChange(e)}
                className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
              />

              <div className="h-[1px] w-full bg-gray-400 my-2" />

              {isLoading ? (
                <h6 className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer">
                  Loading
                </h6>
              ) : (
                <button
                  type="submit"
                  onClick={handleAddToAvailableOptions}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Sell Energy
                </button>
              )}
            </form>

            <form
              onSubmit={handleBuyPower}
              className="p-5 sm:w-94 w-full flex flex-col justify-start items-center blue-glassmorphism"
            >
              <input
                placeholder="ID"
                name="id"
                type="text"
                onChange={(e) => handleBuyAvailablePowerChange(e)}
                className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
              />

              <input
                placeholder="kW Power"
                name="amountOfPower"
                type="number"
                onChange={(e) => handleBuyAvailablePowerChange(e)}
                className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
              />

              <input
                placeholder="Address To"
                name="receiverAddress"
                type="text"
                onChange={(e) => handleBuyAvailablePowerChange(e)}
                className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
              />

              <div className="h-[1px] w-full bg-gray-400 my-2" />

              {isLoading ? (
                <h6 className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer">
                  Loading
                </h6>
              ) : (
                <button
                  type="submit"
                  onClick={handleBuyPower}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Purchase Energy
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
