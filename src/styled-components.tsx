import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavButton = styled.div`
  background: #000000;
  border: none;
  border-radius: 2rem;
  padding: 0.2rem;
  margin-top: 0.7rem;
  margin-left: 3.7rem;
  margin-right: 3.7rem;
  text-decoration: none;
  color: whitesmoke;
  font-size: 1rem;
  &:hover {
    color: rgb(31, 255, 160);
  }
`;
export const LogoButton = styled.button`
  background: #000000;
  border: none;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 0.5rem;
  margin-right: 2rem;
  padding-left: 3.5rem;
  text-decoration: none;
  color: rgb(31, 255, 160);
  font-size: 3.5rem;
`;
export const Logo1 = styled.div`
  position: absolute;
  font-size: 3.6rem;
`;
export const Logo2 = styled.div`
  position: relative;
  margin-left: 0.2rem;
`;
export const JoinButton = styled(Link)`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 5rem;
  border: none;
  border-radius: 3rem;
  padding: 0.4rem;
  color: black;
  font-size: 1.2rem;
  text-decoration: none;
  background-color: rgb(31, 255, 160);
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  transition-delay: none;
  &:hover {
    color: black;
    font-weight: bold;
    width: 6rem;
  }
`;
export const TeamButton = styled(Link)`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 7rem;
  border: none;
  border-radius: 3rem;
  padding: 0.4rem;
  color: black;
  font-size: 1.2rem;
  text-decoration: none;
  background-color: rgb(31, 255, 160);
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  transition-delay: none;
  &:hover {
    color: black;
    font-weight: bold;
    width: 8rem;
  }
`;
export const ScrollUpButton = styled.div`
  position: fixed;
  width: 100%;
  left: 90%;
  bottom: 2rem;
  height: 1rem;
  font-size: calc(2rem + 1.5vw);
  z-index: 1;
  cursor: pointer;
  color: rgb(31, 255, 160);
`;
export const ToggleDiv = styled.div`
  padding-right: 2vw;
`;
export const ToggleButton = styled.div`
  border: 1px solid black;
  outline: black;
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  padding: none;
  margin: none;
  color: rgb(31, 255, 160);
  background-color: black;
`;
