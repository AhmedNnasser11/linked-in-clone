import { Link } from "react-router-dom"
import styled from "styled-components";

const Login = () => {
    return (
        <Container>
            <Nav>
                <Link to="/">
                    <img src="/images/login-logo.svg" alt="" />
                </Link>
                <div>
                    <Join>
                        Join now
                    </Join>
                    <SignIn>Signin</SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome To LinkedIn Clone</h1>
                    <img src="/images/login-hero.svg" alt="linkedin-clone" />
                </Hero>
                <Form>
                    <Google>
                        <img src="/images/google.svg" alt="" />
                        Sign in with Google
                    </Google>
                </Form>
            </Section>
        </Container>
    )
}


const Container = styled.section`
    padding: 0px;
`;

const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;

    & > a{
        width: 135px;
        height: 34px;
        @media(max-width: 768px){
            padding: 0 5px;
        }
    }
`;
const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    color: rgba(0,0,0,0.6);
    margin-right: 12px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    &:hover{
        background-color: rgba(0, 0, 0, .08);
        color: rgba(0 ,0 ,0 , .9);
        transition: all 200ms ease-in-out;
        text-decoration: none;
    }
`;

const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    border-radius: 24px;
    transition-duration: 167ms;
    font-size: 16px;
    font-weight: 400;
    line-height: 40px;
    padding: 10px 24px;
    cursor: pointer;
    text-align: center;
    background-color: rgba(0,0,0,0);
    transition: all 200ms ease-in-out;

    &:hover{
        color: #0a66c2;
        background-color: rgba(112, 181, 249, .15);
        text-decoration: none;
        transition: all 200ms ease-in-out;
    }
`;

const Section = styled.section`
    display: flex;
    align-content: start;
    min-height: 700px;
    padding-bottom: 130px;
    padding-top: 40px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1120px;
    align-items: center;
    margin: auto;
    @media(max-width: 768px){
        margin: auto;
        min-height: 0px;
    }
`;

const Hero = styled.main`
    width: 100%;
    h1{
        padding-bottom: 0;
        width: 55%;
        font-size: 65px;
        color: #2977c9;
        font-weight: 200px;
        line-height: 70px;
        @media(max-width: 768px){
            text-align: center;
            font-size: 20px;
            width: 100%;
            line-height: 2;
        }
    }

    img{
        width: 700px;
        height: 670px;
        position: absolute;
        bottom: -2px;
        right: -150px;
        @media(max-width: 768px){
            top: 230px;
            width: initial;
            height: initial;
            position: initial;
        }
    }

`;

const Form = styled.div`
    margin-top: 100px;
    width: 400px;
    @media(max-width: 760px){
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
    }
`;

const Google = styled.button`
    display: flex;
    justify-content: center;
    background-color: #fff;
    align-items: center;
    height: 50px;
    width: 100%;
    border-radius: 20px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
    vertical-align: middle;
    transition-duration: 167ms;
    font-size: 20px;
    color: rgba(0,0,0,.6);
    cursor: pointer;

    &:hover{
        transition-duration: 167ms;
        background-color: rgba(297,297,297,.25);
        color: rgba(0,0,0,.75);
    }

`;

export default Login
