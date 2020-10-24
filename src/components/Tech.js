import React from "react"
import styled from "styled-components"

import ReactIcon from "./assets/ReactIcon.svg"
import NativeIcon from "./assets/nativeIcon.svg"
import GatsbyIcon from "./assets/gatsbyIcon.svg"
import GraphQlIcon from "./assets/graphqlcon.svg"
import TsIcon from "./assets/tsIcon.svg"
import NodeIcon from "./assets/nodeIcon.svg"

const WrapperTech = styled.section`
  margin-top: 200px;
  h2 {
    font-size: 55px;
    text-align: center;
    background: -webkit-linear-gradient(#4ef9fe, #0696ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 1000px) {
      font-size: 35px;
    }
  }
`
const TechContener = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  height: 100%;
  width: 80%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: left;
  div {
    margin: 60px 90px;
    img {
      height: 130px;
      margin-bottom: 30px;
    }
    h4 {
      font-size: 28px;
      white-space: nowrap;
    }
  }
  @media (max-width: 800px) {
    div {
      margin: 50px 60px;
      img {
        height: 100px;
      }
    }
  }
`

class Tech extends React.Component {
  render() {
    return (
      <WrapperTech>
        <h2>Technologies</h2>
        <TechContener>
          <div>
            <img src={ReactIcon} alt="computer icon"></img>
            <h4>React</h4>
          </div>
          <div>
            <img src={NativeIcon} alt="computer icon"></img>
            <h4>React Native</h4>
          </div>
          <div>
            <img src={GatsbyIcon} alt="computer icon"></img>
            <h4>Gatsby</h4>
          </div>
          <div>
            <img src={GraphQlIcon} alt="computer icon"></img>
            <h4>GraphQl</h4>
          </div>
          <div>
            <img src={TsIcon} alt="computer icon"></img>
            <h4>TypeScript</h4>
          </div>
          <div>
            <img src={NodeIcon} alt="computer icon"></img>
            <h4>Node</h4>
          </div>
        </TechContener>
      </WrapperTech>
    )
  }
}

export default Tech
