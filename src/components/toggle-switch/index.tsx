import React from "react"
import styled from "@emotion/styled"

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    // make this round
    border-radius: 34px;

    :before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: 0.4s;
      // make this round
      border-radius: 50%;
    }
  }
`

const Toggle: React.FC = () => {
  return (
    <Switch>
      <input type="checkbox" onClick={() => console.log("clicked")} />
      <span className="slider" />
    </Switch>
  )
}

export default Toggle
