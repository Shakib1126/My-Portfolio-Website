import React from 'react'
import styled from 'styled-components';
import { MainLayout } from '../Styles/Layout';
import Title from "./../Components/Title";
import Services from "./../Components/Services";
import ImageSection from '../Components/ImageSection';
import Review from '../Components/Review';


function About() {
    return (
        <MainLayout>
            <Aboutstyled>
            <div className="p-particles-js">
              </div>
                <Title title={'About Me'} span={'About Me'}/>
                <ImageSection />
                <Services />
                <Review />
            </Aboutstyled>

        </MainLayout>
        
    )
}

const Aboutstyled = styled.div`

`;


export default About
