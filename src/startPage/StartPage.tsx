import React from "react";
import Layout from 'antd/lib/layout/layout';
import styled from "styled-components";

export const StartPage = () => {
    return (
        <Layout className="layout" style={{minHeight: "100vh"}}>
            <StartPageWrapper>
                <Hello>Hello</Hello>
                <Description>Tabs are provided at the top for navigating the application :)</Description>
            </StartPageWrapper>

        </Layout>
    )
}

const StartPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
`
const Hello = styled.h1`
  font-size: 36px;
`
const Description = styled.span`
  font-size: 26px;
`