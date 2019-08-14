import React from "react";
import styled from "styled-components";

const Browser = styled.div`
  padding: 18px 0em;
  border: 1px solid rgba(85, 85, 85, 0.6);
  border-radius: 3px;
  margin: 16px 0;
  padding-top: 0;
`;

const BrowserBar = styled.div`
  height: 20px;
  width: 100%;
  border-radius: 3px 3px 0 0;
  background-color: rgba(85, 85, 85, 0.6);
  margin-bottom: 16px;
  position: relative;
`;

const TrafficLights = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #fdbd41;
  position: absolute;
  top: 5px;
  left: 20px;

  &:before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #fc605b;
    position: absolute;
    top: 0;
    left: -15px;
  }

  &:after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #33c748;
    position: absolute;
    top: 0;
    left: 15px;
  }
`;

const BrowserContent = styled.div`
  width: 100%;
  padding: 0 1em;
  margin: 0;
`;

export default ({ children }) => (
  <Browser>
    <BrowserBar>
      <TrafficLights />
    </BrowserBar>
    <BrowserContent>{children}</BrowserContent>
  </Browser>
);
