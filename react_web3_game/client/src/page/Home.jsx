import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PageHOC, CustomInput, CustomButton } from "../components";
import { useGlobalContext } from "../context";
import { ABI, ADDRESS } from "../contract";
import styles from "../styles";
const Home = () => {
  const { contract, walletAddress, setShowAlert } = useGlobalContext();
  const [playerName, setPlayerName] = useState("");
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      console.log(contract);
      const playerExists = await contract.isPlayer(walletAddress);
      console.log("got executed");
      if (!playerExists) {
        console.log("got executed");
        await contract.registerPlayer(playerName, playerName);
        setShowAlert({
          status: true,
          type: "info",
          message: `${playerName} is being summoned`,
        });
      }
    } catch (error) {
      console.log(error, error.message);
      setShowAlert({
        status: true,
        type: "failure",
        message: "Something went wrong",
      });
      alert(error);
    }
  };
  useEffect(() => {
    const checkForPlayerToken = async () => {
      const playerExists = await contract.isPlayer(walletAddress);
      const playerTokenExists = await contract.isPlayerToken(walletAddress);
      if (playerExists && playerTokenExists) {
        console.log("got into if ");
        navigate("/create-battle");
      }
      console.log(playerExists, playerTokenExists);
    };
    if (contract) checkForPlayerToken();
  }, [contract]);
  return (
    <>
      <div className="flex flex-col">
        <CustomInput
          label="Name"
          placeHolder="Enter your player name"
          value={playerName}
          handleValueChange={setPlayerName}
        />
        <CustomButton
          title="Register"
          handleClick={handleClick}
          restStyles="mt-6"
        />
        <br />
        <p
          className={styles.infoText}
          onClick={() => navigate("/create-battle")}
        >
          Already Registered
        </p>
      </div>
      {/* <p className={styles.infoText} onClick={() => navigate("/create-battle")}>
        Already Registered
      </p> */}
    </>
  );
};
export default PageHOC(
  Home,
  <>
    Welcome to Avax Gods <br /> a web3 NFT Card Game
  </>,
  <>
    Connect your wallet to start playing <br /> the ultimate Web3 Battle Card
    Game
  </>
);
