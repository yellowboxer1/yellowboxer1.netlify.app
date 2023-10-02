import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import jumbImg from "../assets/jumbotron.jpg";
import { useMediaQuery } from "react-responsive";

import "./home.css";

function Home() {
  let [mode, setMode] = useState("");
  let [quotesCnt, setQuotesCnt] = useState(0);
  const quotes = [
    '긍정적인 사고로 끊임없이 공부하는',
    '사용자의 입장에서 생각하는',
    '팀원들과의 의사소통을 즐기는',
    '꿈꾸며 나아가는',
  ];

  const mobileQuotes = [
    `긍정적인 사고로
    끊임없이 공부하는`,
    `사용자의 입장에서
    생각하는`,
    `팀원들과의 
    의사소통을 즐기는`,
    `꿈꾸며 나아가는`,
  ];
  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  useEffect(() => {
    if (isPc) setMode("isPc");
    else if (isMobile) setMode("isMobile");
  }, [isMobile, isPc]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuotesCnt((c) => (c + 1) % quotes.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [quotes.length]);

  return (
    <>
      <JumbotronContainer id="Home">
        <Image>
          <Contents pos={"leftTop"} mode={mode}>
            안녕하세요!
          </Contents>
          {mode === "isPc"
            ? quotes.map((quote, index) => (
                <Quotes
                  stat={index === quotesCnt ? "active" : "hide"}
                  mode={mode}
                >
                  '{quote}'
                </Quotes>
              ))
            : mobileQuotes.map((quote, index) => (
                <Quotes
                  stat={index === quotesCnt ? "active" : "hide"}
                  mode={mode}
                >
                  '{quote}'
                </Quotes>
              ))}
          <Contents pos={"rightBot"} mode={mode}>
            기획자 박건호입니다.
          </Contents>
        </Image>
      </JumbotronContainer>
    </>
  );
}

const JumbotronContainer = styled.div`
  position: relative;
  z-index: auto;
`;

const Image = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  background-attachment: fixed;
  background-image: url(${jumbImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Contents = styled.h1`
  font-size: ${(props) => (props.mode === "isPc" ? "52px" : "35px")};
  color: white;
  letter-spacing:0.05em;
  font-family: 'ChosunNM';
  text-align: ${(props) => (props.pos === "rightBot" ? "right" : "")};

  ${(props) =>
    props.mode === "isPc" && props.pos === "leftTop"
      ? css`
          margin: 285px 0 0 265px;
        `
      : null};
  ${(props) =>
    props.mode === "isPc" && props.pos === "rightBot"
      ? css`
          margin: 0 265px 230px 0;
        `
      : null};

  ${(props) =>
    props.mode === "isMobile" && props.pos === "leftTop"
      ? css`
          margin: 165px 0 0 2rem;
        `
      : null};
  ${(props) =>
    props.mode === "isMobile" && props.pos === "rightBot"
      ? css`
          margin: 0 2rem 110px 0;
        `
      : null};

  display: inline-flex;
  justify-content: ${(props) => (props.pos === "rightBot" ? "end" : "")};
`;

const Quotes = styled.h1`
  font-size: ${(props) => (props.mode === "isPc" ? "48px" : "36px")};
  white-space: pre-line;
  text-align: center;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  margin: 0;
  letter-spacing:2px;
  font-family: 'ChosunNM';
  margin-top: 25px;

  transition: opacity 0.5s ease-out;

  ${(props) =>
    props.stat === "active"
      ? css`
          display: inline-block;
          opacity: 1;
        `
      : css`
          opacity: 0;
        `}
`;

export default Home;
