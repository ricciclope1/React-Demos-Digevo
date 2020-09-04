import styled from "styled-components";

export const Principal = styled.div`
  font-family: "VremenaGroteskRegular", sans-serif;
  background-color: #f8f8f8;
  height: 30%;
  display: flex;

  @media only screen and (max-width: 1200px) {
    display: flex;
    height: 60%;
    padding: 0.8em;
  }
  @media only screen and (max-width: 850px) {
    display: block;
    height: 40%;
    padding: 1em;
  }
  @media only screen and (max-width: 576px) {
    display: block;
    height: 35%;
    padding: 1em;
  }
`;
export const Icon = styled.div`
  padding-left: 6em;
  animation: animacion 0.4s 3;
  font-size: large;
  .ic {
    margin-right: 1em;
  }
  a {
    text-decoration: none;
    margin-right: 1em;
  }
  @media only screen and (max-width: 850px) {
    margin: -0.5em -1em;
  }
  @media only screen and (max-width: 576px) {
    margin: -1em 0.5em;
  }
`;

export const Global = styled.div`
  width: 30%;

  h1 {
    margin: 1.5em 3.5em;
    font-weight: 700;
    font-size: 1.8em;
  }

  @keyframes animacion {
    0% {
      color: #000;
      transform: translateY(15%);
    }
    33% {
      color: rgb(13, 224, 183);
      transform: translateY(-15px);
    }
    66% {
      color: rgb(106, 27, 154);
      transform: translateY(-15px);
    }
    100% {
      color: rgb(36, 103, 217);
      transform: translateY(15px);
    }
  }
  @media only screen and (max-width: 1200px) {
    h1 {
      width: 70%;
      margin-top: 20%;
    }
  }
  @media only screen and (max-width: 850px) {
    margin: -4.2em -2em;
    padding-top: 1em;
    h1 {
      margin-top: 30%;
      width: 100%;
    }
  }
  @media only screen and (max-width: 576px) {
    margin: -4em -3.5em;
    h1 {
      margin-top: 60%;
    }
  }
`;

export const Description = styled.div`
  margin: 1.5em 3em;
  background-color: #77ddf9;
  height: 100%;
  width: 40%;
  overflow: auto;
  p {
    margin: 1.5em 1.5em;
    font-size: 1.1em;
    text-align: justify;
  }
  @media only screen and (max-width: 1200px) {
    margin: 3em 3em;
    width: 70%;
    overflow: auto;
  }
  @media only screen and (max-width: 850px) {
    margin: 6em 3em;
    width: 75%;
    overflow: auto;

    p {
      font-size: 1em;
    }
  }
  @media only screen and (max-width: 576px) {
    margin: 5em 3em;
    width: 65%;
    overflow: auto;
  }
`;
