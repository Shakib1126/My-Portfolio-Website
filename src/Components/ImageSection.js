import React from 'react'
import styled from 'styled-components';
import resume from "./../img/resume1.jpg";
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionstyled>

            <div className="left-content">
                <img src={resume} alt="resume"/>
            </div>
            <div className="right-content">
                <h4>I am <span>Lorem Ipsum</span></h4>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, natus quas vero enim     
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Shakib Badarpura</p>
                        <p>: 23</p>
                        <p>: Indian </p>
                        <p>: English, Hindi, Gujarati </p>
                        <p>: Mumbai, India</p>
                        <p>: Freelance</p>
                    </div>
                </div>
                <PrimaryButton title={'Download Cv'} />
            </div>
            
        </ImageSectionstyled>
    )
}

const ImageSectionstyled = styled.div`
margin-top: 5rem;
    display: flex;
    
    .left-content{
        width: 100%;
        
        
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        padding-left: 1.5rem;
        h4{
            font-size: 1.7rem;
            color: var(--white-color);
            span{
                font-size: 1.7rem;
                color: var(--primary-color);
            }
        }
        .paragraph{
            padding: 1rem 0;
            font-size: 1.1rem;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            
            
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                    font-size: 1rem;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                    font-size: 1rem;
                    
                }
            }
        }
    }
`;


export default ImageSection
