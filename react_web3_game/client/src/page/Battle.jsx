import React, { useEffect, useState } from "react";
import styles from "../styles";
import { Alert } from "../components";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import {
  attack,
  attackSound,
  defense,
  defenseSound,
  player01 as playero1Icon,
  player02 as player02Icon,
} from "../assets";
import { playAudio } from "../utils/animation";
import { useParams } from "react-router-dom";
const Battle = () => {
  const { contract, gameData, walletAddress, showAlert, setShowAlert } =
    useGlobalContext();
  const [player1, setPlayer1] = useState({});
  const [player2, setPlayer2] = useState({});
  const { battleName } = useParams();
  const navigate = useNavigate();

  return (
    <div className={`${styles.flexBetween} ${styles.gameContainer} astral`}>
      <h1 className="text-xl ">{battleName}</h1>
    </div>
  );
};

export default Battle;
