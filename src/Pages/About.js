import React from 'react'
import styled from 'styled-components';
import { MainLayout } from '../Styles/Layout';
import Title from "./../Components/Title";

function About() {
    return (
        <MainLayout>

            <Aboutstyled>
                <Title title={'About Me'} span={'About Me'}/>
            </Aboutstyled>

        </MainLayout>
        
    )
}

const Aboutstyled = styled.div`

`;


export default About
