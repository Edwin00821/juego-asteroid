import React from "react";
import styled from "styled-components";
// import NumberCounter from "number-counter";

const GameoverContainer = styled.div`
  width: 300px;
  height: auto;
  position: fixed;
  z-index: 2;
  left: calc(50% - 150px);
  background: rgb(0, 0, 0);
  top: 50px;
  padding: 40px;
  border-radius: 3px;
  box-shadow: 3px 3px 7px 4px orange;
  color: white;
  font-family: "Russo One", sans-serif;

  letter-spacing: 2px;
`;

const StartOver = styled.button`
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

const H1 = styled.h1`
  font-weight: normal;
`;

const H4 = styled.h4`
  font-weight: normal;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

//largeAsteroidsKilled: largeAsteroidsKilled,
// mediumAsteroidsKilled: mediumAsteroidsKilled,
//smallAsteroidsKilled: smallAsteroidsKilled,

const GameOver = ({ finalState }) => {
  return (
    <GameoverContainer>
      <H1>Game Over!</H1>
      <H4>
        <Flex>
          <span>Final Score:</span>
          <span>
            <p>{finalState.score}</p>
            {/* <NumberCounter end={finalState.score} delay={0.5} /> */}
          </span>
        </Flex>
      </H4>
      <Flex>
        <span>Small Asteroids: </span>
        <span>
            <p>{finalState.score}</p>
          {/* <NumberCounter end={finalState.smallAsteroidsKilled} delay={0.5} /> */}
        </span>
      </Flex>
      <Flex>
        <span>Medium Asteroids: </span>
        <span>
            <p>{finalState.mediumAsteroidsKilled}</p>
          {/* <NumberCounter end={finalState.mediumAsteroidsKilled} delay={0.5} /> */}
        </span>
      </Flex>
      <Flex>
        <span>Large Asteroids:</span>
        <span>
            <p>{finalState.largeAsteroidsKilled}</p>
          {/* <NumberCounter end={finalState.largeAsteroidsKilled} delay={0.5} /> */}
        </span>
      </Flex>
      <StartOver type="submit">Play Again!</StartOver>
    </GameoverContainer>
  );
};

export default GameOver;
