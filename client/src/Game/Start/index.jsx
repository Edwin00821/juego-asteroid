import React, { useState } from "react";
import styled from "styled-components";

const StartContainer = styled.div`
  width: 300px;
  height: auto;
  position: fixed;
  z-index: 2;
  left: calc(50% - 190px);
  background: rgb(0, 0, 0);
  top: 50px;
  padding: 40px;
  border-radius: 3px;
  box-shadow: 3px 3px 7px 4px orange;
  color: white;
  font-family: "Russo One", sans-serif;

  letter-spacing: 2px;
`;

const Mid = styled.div``;

const Play = styled.button`
  transition: 0.5s;
  width: 100%;
  font-family: "Russo One", sans-serif;
  font-size: 24px;
  background: rgba(0, 0, 0, 0);
  border: 2px solid orange;
  color: orange;
  border-radius: 3px;
  &:hover {
    background: orange;
    color: black;
  }
  bottom: 10px;
  height: 50px;
  margin-top: 50px;
`;

const Leave = styled.a`
  display: inline-block;
  justify-content: space-around;
  transition: 0.5s;
  width: 100%;
  font-family: "Russo One", sans-serif;
  font-size: 21px;
  background: rgba(0, 0, 0, 0);
  border-radius: 3px;
  bottom: 10px;
  margin-top: 50px;
  color: red;
  border: 2px solid red;
  &:hover {
    color: black;
    background: red;
    text-decoration: none;
  }
  text-decoration: none;
  padding: 20px 0;
  text-align: center;
`;

const H1 = styled.h1`
  font-weight: normal;
  font-size: 40px;
  margin-top: 0;
`;

const MultiPlayerStart = styled.button`
  transition: 0.5s;
  width: 100%;
  font-family: "Russo One", sans-serif;
  font-size: 24px;
  background: rgba(0, 0, 0, 0);
  border: 2px solid orange;
  color: orange;
  border-radius: 3px;
  &:hover {
    background: orange;
    color: black;
  }
  bottom: 10px;
  height: 50px;
  margin-top: 50px;
`;

const UserForm = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  top: 0;
  left: 0;
  color: white;
  font-family: "Russo One", sans-serif;
  font-size: 24px;
  z-index: 1000;
  background: rgba(0, 0, 0);
`;
const UserInput = styled.input`
  transition: 0.5s;
  width: 100%;
  font-family: "Russo One", sans-serif;
  font-size: 24px;
  background: rgba(0, 0, 0, 0);
  border: 2px solid orange;
  color: orange;
  border-radius: 3px;
  &:hover {
    background: orange;
    color: black;
  }
  bottom: 10px;
  height: 50px;
  margin-top: 50px;
`;

//largeAsteroidsKilled: largeAsteroidsKilled,
// mediumAsteroidsKilled: mediumAsteroidsKilled,
//smallAsteroidsKilled: smallAsteroidsKilled,
const Start = ({ start, startMltiplayer }) => {
  const [userName, setUserName] = useState(localStorage.getItem("user"));
  const [multiPlayer, setMultiPlayer] = useState(false);

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    if (e.keyCode === 13) {
      console.log("se inicio el juego multijugador ");
      localStorage.setItem("user", userName);
      startMltiplayer();
    }
  };

  const handleClick = (e) => {
    console.log(e);
    e.preventDefault();
    setMultiPlayer(true);
  };

  return (
    <StartContainer>
      <Mid>
        <H1>ASTEROIDS</H1>
      </Mid>
      <p>shoot: spacebar</p>
      <p>turn left: left arrow key</p>
      <p>turn right: right arrow key</p>
      <p>accelerate: up arrow key</p>
      <Play onClick={start}>Start</Play>
      <MultiPlayerStart onClick={handleClick}>Multiplayer</MultiPlayerStart>
      {multiPlayer && (
        <UserForm>
          <label htmlFor="User">User: </label>
          <UserInput
            type="text"
            name="User"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onKeyUp={handleSubmit}
            onKeyDown={handleSubmit}
            autoFocus
          />

          <Leave href="/">Leave</Leave>
        </UserForm>
      )}
    </StartContainer>
  );
};

export default Start;
