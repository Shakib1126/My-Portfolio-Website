import React from "react";
import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import HomePage from "./Pages/Homepage";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import { Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
        <Sidebar/>
        < MainContentStyled>

        <div className="lines">
        
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                    <div className="line-4"></div>
        </div>

        <Switch>

        </Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/resume" exact>
            <Resume />
          </Route>
          <Route path="/portfolios" exact>
            <Portfolio />
          </Route>
          <Route path="/blogs" exact>
            <Blog />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        
        </ MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`

    position: relative;
    margin-left: 16.3rem;
    min-height: 100vh;

    .lines{
            position: absolute;
            min-height: 100vh;
            width: 100%;
            display: flex;
            justify-content: space-evenly;

            .line-1, .line-2, .line-3, .line-4{
                width: 1px;
                min-height: 100vh;
                background-color: var(--border-color);
                opacity: 0.3;
            }
        }
    
`;

export default App;
