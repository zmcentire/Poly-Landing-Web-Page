import React from 'react';
import { Grid, Cell } from 'react-mdl';
import ReactPlayer from 'react-player';


const IntroCard = () => {
    return (
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="intro">
                <Cell col={12}>
                    <div className="intro-header">
                        <h1>A platform for organizational engagement!</h1>
                        <h4>Poly consolidates your organization’s activities and events all onto one platform. </h4>

                        <div className="intro-video">
                            <ReactPlayer url="https://youtu.be/hABBV5IirGQ"/>
                        </div>
                    </div>

                        <div className="free-route">
                            <button>Try for free</button>
                        </div>

                        
                    
                </Cell>
            </Grid>
        </div>
    )
}

export default IntroCard