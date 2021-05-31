import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from "./../Styles/Layout";
import Title from "./../Components/Title";
import ServiceCard from "./../Components/ServiceCard";
import design from "./../img/design.svg";
import intelligence from "./../img/intelligence.svg";
import gamedev from "./../img/game-dev.svg";

function Services() {
    return (
        <InnerLayout>
            <Servicesstyled>
                <Title title={'Servives'} span={'Services'} />
                <div className="services">
                    <ServiceCard image={design}
                     title={'Web Development'}
                     paragraph={' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, natus quas vero enim'} />

            

            <div className="mid-card">
                <ServiceCard image={intelligence}
                     title={'Artificial Intelligence'}
                     paragraph={' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, natus quas vero enim'} />
            </div>
            <ServiceCard image={gamedev}
                     title={'Game Development'}
                     paragraph={' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, natus quas vero enim'} />
                </div>
            </Servicesstyled>
        </InnerLayout>
    )
}

const Servicesstyled = styled.div`

.services{
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;

    .mid-card{
        margin: 0 1.2rem;
    }
}

`;

export default Services
