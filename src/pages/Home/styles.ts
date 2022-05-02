import styled from "styled-components";
import { Link } from "react-router-dom";

export const HandBook = styled.div`
  padding-top: 3.3vmax;
  padding-bottom: 3.3vmax;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  margin-top: 3.3vmax;
  
  h1 {
    cursor: pointer;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.2em;
    text-decoration-skip: auto;
    font-size: 3.3vmax;
    font-weight: normal;
    text-decoration-skip-ink: auto;
  }

  a {
    text-decoration: none;
    color: #000000;
  }
`