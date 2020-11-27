import React from "react";
import Layout from "antd/lib/layout/layout";
import errorImage from "../assets/image/error404.png"
import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const ErrorPage = () => {
    return (
        <Layout className="layout" style={{minHeight: "100vh"}}>
            <WrapperImage>
                <img src={errorImage} alt={"errorImage"}/>
            </WrapperImage>
            <GoBackMainPage>
                <NavLink to={"/"}>Go back...</NavLink>
            </GoBackMainPage>
        </Layout>
    )
}

const WrapperImage = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 100px;
`
const GoBackMainPage = styled.div`
  display: flex;
  justify-content: center;
  font-size: 36px;
`