import React, {useState} from "react";
import Layout from "antd/lib/layout/layout";
import Button from "antd/lib/button";
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    UserOutlined
} from "@ant-design/icons";
import styled from "styled-components";
import Menu from "antd/lib/menu";
import SubMenu from "antd/lib/menu/SubMenu";
import Avatar from "antd/lib/avatar/avatar";
import {Skeleton, Steps} from "antd";

export const StepPage = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [collapseMenuMenu, setCollapseMenuMenu] = useState(true);
    const [step, setStep] = useState(0);

    const toggleButtonMenu = () => {
        setToggleMenu(!toggleMenu);
        setCollapseMenuMenu(!collapseMenuMenu);
    }

    const nextStep = () => {
        setStep(step => step + 1);
    }

    const again = () => {
        setStep(0);
    }

    const disabledButtonNext = () => {
        if (step === 3) {
            return true;
        }
    }
    const disabledButtonAgain = () => {
        if (step !== 3) {
            return true;
        }
    }

    const {Step} = Steps;

    return (
        <Layout className="layout" style={{minHeight: "100vh"}}>
            <WrapperStepPage>
                <Button type="primary" onClick={toggleButtonMenu} style={{marginLeft: 10}}>
                    {React.createElement(toggleMenu ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button>

                <WrapperNameAndName>
                    <Avatar icon={<UserOutlined/>}/>
                    <Name>Artem E.</Name>
                </WrapperNameAndName>
            </WrapperStepPage>
            <WrapperMenu>
                <Menu
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={collapseMenuMenu}
                    style={{minHeight: "100vh"}}
                >
                    <Menu.Item key="1" icon={<PieChartOutlined/>}>
                        Option 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined/>}>
                        Option 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ContainerOutlined/>}>
                        Option 3
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<MailOutlined/>} title="Navigation One">
                        <Menu.Item key="5"><Skeleton active/></Menu.Item>
                        <Menu.Item key="6"><Skeleton active/></Menu.Item>
                        <Menu.Item key="7"><Skeleton active/></Menu.Item>
                        <Menu.Item key="8"><Skeleton active/></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<AppstoreOutlined/>} title="Navigation Two">
                        <Menu.Item key="9"><Skeleton active/></Menu.Item>
                        <Menu.Item key="10"><Skeleton active/></Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11"><Skeleton active/></Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
                <WrapperStepsItem>
                    <ItemSteps1>
                        <h1>Setup Instructions</h1>
                        <TitleGuide>Let's get started by following this guide</TitleGuide>
                        <Steps direction="vertical" size="small" current={step}>
                            <Step title="Install the app on Your Clover dashboard"/>
                            <Step
                                title="Create page for Mapping Rules <show visually the integration
                                process of item information. Like a flow chart or something. And links to below"
                            />
                            <Step
                                title="View and understand the mapping rules for items."
                                description={`View and understand the mapping rules for itemsads`}
                            />
                        </Steps>
                        <Button onClick={nextStep} disabled={disabledButtonNext()}>Next step</Button>
                        <Button style={{color: "red"}} onClick={again} disabled={disabledButtonAgain()}>Test
                            again</Button>
                    </ItemSteps1>
                    <ItemSteps2>
                        <ItemSkeleton>
                            <Skeleton avatar active/>
                            <ChildSkeleton><Skeleton avatar active/></ChildSkeleton>
                            <Skeleton avatar active/>
                        </ItemSkeleton>
                        <ItemSkeleton>
                            <Skeleton avatar active/>
                            <ChildSkeleton><Skeleton avatar active/></ChildSkeleton>
                            <Skeleton avatar active/>
                        </ItemSkeleton>
                    </ItemSteps2>
                </WrapperStepsItem>
            </WrapperMenu>
        </Layout>
    )
}

const WrapperStepPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #001529;
  height: 50px;
`
const WrapperNameAndName = styled.div`
  display: flex;
  flex-direction: row;
`
const Name = styled.div`
  color: #fff;
  font-size: 18px;
  padding: 0 14px;
`
const WrapperStepsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 84%;
`
const ItemSteps1 = styled.div`
  margin: 50px 50px 10px 50px;
  min-height: 250px;
  min-width: 96%;
  background-color: #fff;
  border-radius: 12px;
  padding: 30px;
`
const ItemSteps2 = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 50px 10px 50px;
  min-height: 250px;
  min-width: 96%;
  background-color: #fff;
  border-radius: 12px;
`
const ItemSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  width: 44%;
  padding: 30px;
`
const ChildSkeleton = styled.div`
  margin: 50px 0;
`
const WrapperMenu = styled.div`
  display: flex;
  justify-content: space-between;
`
const TitleGuide = styled.h3`
  margin-bottom: 30px;
`