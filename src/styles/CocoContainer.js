import styled from "styled-components";

export const CocoDiv = styled.div`
  padding: 3em;
  height: 38em;
  position: relative;
  @media only screen and (max-width: 1200px) {
    position: relative;
    height: 45em;
  }
  @media only screen and (max-width: 850px) {
    position: relative;
    height: 40em;
  }
  @media only screen and (max-width: 576px) {
    position: relative;
    height: 27em;
  }
`;
export const Main = styled.div`
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);
  box-sizing: content-box;
  width: 46%;
  height: 75%;

  @media only screen and (max-width: 1200px) {
    position: absolute;
    top: -12%;
    left: 50%;
    transform: translate(-50%, 50%);
    box-sizing: content-box;
    width: 80%;
    height: 65%;
  }
  @media only screen and (max-width: 850px) {
    position: absolute;
    top: -3%;
    left: 50%;
    transform: translate(-50%, 50%);
    box-sizing: content-box;
    width: 80%;
    height: 55%;
  }
  @media only screen and (max-width: 576px) {
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, 50%);
    box-sizing: content-box;
    width: 80%;
    height: 43%;
  }
`;
export const Video = styled.video`
  position: fixed;
  box-sizing: content-box;
  width: 100%;
  height: 100%;
  border-radius: 1em;

  @media only screen and (max-width: 1200px) {
    box-sizing: content-box;
    width: 100%;
    height: 100%;
    border-radius: 1em;
  }
  @media only screen and (max-width: 850px) {
    box-sizing: content-box;
    width: 100%;
    height: 100%;
    border-radius: 1em;
  }
  @media only screen and (max-width: 576px) {
    box-sizing: content-box;
    width: 100%;
    height: 100%;
    border-radius: 1em;
  }
`;
export const Canvas = styled.canvas`
  position: fixed;
  border-style: ridge;
  border-radius: 0.5em;
  box-sizing: content-box;
  width: 100%;
  height: 95%;
  -webkit-box-shadow: 15px 15px 3px 1px rgb(0, 0, 0);
  -moz-box-shadow: 15px 15px 3px 1px rgb(6, 7, 7);
  box-shadow: 15px 15px 3px 1px rgb(17, 17, 17);
  @media only screen and (max-width: 1200px) {
    box-sizing: content-box;
    width: 100%;
    height: 95%;
  }
  @media only screen and (max-width: 850px) {
    box-sizing: content-box;
    width: 100%;
    height: 95%;
  }
  @media only screen and (max-width: 576px) {
    box-sizing: content-box;
    width: 100%;
    height: 95%;
  }
`;
export const MainGraphic = styled.div`
  display: flex;
  justify-content: center;
  height: 45em;
  @media only screen and (max-width: 576px) {
    display: none;
  }
`;
export const Graphic = styled.div`
  //padding: 2em 0em 2em 20%;
`;
export const Play = styled.button`
  background: transparent;
  border: 2px solid #0099cc;
  border-radius: 6px;
  height: 2.5em;
  margin: 15% 1em 0em 1em;
  @media only screen and (max-width: 1200px) {
    margin: 25% 1em 0em 1em;
  }
  @media only screen and (max-width: 850px) {
    margin: 30% 1em 0em 1em;
  }
`;
export const Stop = styled.button`
  background: transparent;
  border: 2px solid #0099cc;
  border-radius: 6px;
  height: 2.5em;
  margin: 15% 1em 0em 1em;
  @media only screen and (max-width: 1200px) {
    margin: 25% 1em 0em 1em;
  }
  @media only screen and (max-width: 850px) {
    margin: 30% 1em 0em 1em;
  }
`;
export const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const MessageStyle = styled.div`
  width: 35%;
  margin-top: 1em;
  margin-right: 10%;
`;
