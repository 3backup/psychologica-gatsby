import React from "react";
import { styled } from "linaria/react";

const Button = styled.button`
  background: #005650;
  height: 3.75rem;
  min-width: 17.5rem;
  border-radius: 15px
  backdrop-filter: blur(4px);
  border-radius: 15px;
  border:none;
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s;
  &:hover{
    background-color: #fff;
    color: #005650;
    border: 1px solid #005650;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default Button;
