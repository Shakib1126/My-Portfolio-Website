import React, { useEffect, useRef } from 'react';
import styled from "styled-components";
import Particle from "./../Components/Particle";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import { init } from 'ityped';

function Homepage() {

    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, { 
             showCursor: true,
             backDelay:  1500,
             strings: ['A Developer', 'A Software Engineer','Content Creator' ] });
        }, []) 

    return (
        <HomepageStyled>
              <div className="p-particles-js">
                  <Particle />
              </div>

              <div className="typography">
                  <h1>Hi, I'm <span> Shakib Badarpura,</span></h1>
                  <h3><span ref={textRef}></span></h3>
                  <p>Welcome to my Portfolio.</p>
                  <p>I am a Developer with a background in Django and ReactJS.</p>
                  <p>In other words, I went to college and returned a Programmer!</p>

                  <div className="icons">
                    <a href="https://www.instagram.com/pythonthera.py/"  target="_blank" rel="noreferrer"  className=" icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.instagram.com/pythonthera.py/" target="_blank" rel="noreferrer"  className=" icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://www.instagram.com/pythonthera.py/" target="_blank" rel="noreferrer"  className=" icon i-instagram">
                        <InstagramIcon /> 
                    </a>

              </div>
              </div>

              
            
        </HomepageStyled>
    )
}

const HomepageStyled = styled.header`
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;

        /* .p-particles-js{
            position: absolute;
            
        } */

        .typography{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            width: 80%;

            h3{
                font-size: 30px;
                margin: 3rem 0;
                

                span{
                    color: var(--white-color);
                    font-size: 2.2rem;
                }
                    .ityped-cursor{
                        animation: blink 1s infinite; 
                    }

                    @keyframes blink{
                        50%{
                            opacity: 1;
                        }
                        100%{
                            opacity: 0;
                        }
                    }
                
            }

            p{
                font-size: 18px;
                
            }

            .icons{
                display:flex;
                justify-content: center;
                margin-top: 1.3rem;

                .icon{
                    border:2px solid var(--border-color);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all .4s ease-in-out;

                    &:hover{
                        border:2px solid var(--primary-color);
                        color: var(--primary-color);
                    }

                    &:not(:last-child){
                        margin-right: 1rem;

                    }

                    svg{
                        margin: .5rem;

                    }
                }

                .i-instagram{
                    &:hover{
                        color:#ff00ff;
                        border:2px solid #ff00ff;
                    }
                }

                .i-github{
                    &:hover{
                        color:yellow;
                        border:2px solid yellow;
                    }
                }
            }

        }

        

`;
export default Homepage
