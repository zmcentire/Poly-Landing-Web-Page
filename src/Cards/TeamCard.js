import React from 'react';
import { Grid, Cell, Card } from 'react-mdl';

const TeamCard = () => {
    return (
        <div>
            <Grid className="team-card">
                <Cell col={12}>
                    <div className="team-title">
                        <h2>Meet Our Team</h2>
                    </div>
                    <div className="team">
                        <Card style={{width: '300px', height: '300px', backgroundColor: '#F4F4F4', margin: 'auto'}}/>
                        <Card style={{width: '300px', height: '300px', backgroundColor: '#F4F4F4', margin: 'auto'}}/>
                        <Card style={{width: '300px', height: '300px', backgroundColor: '#F4F4F4', margin: 'auto'}}/>
                        <Card style={{width: '300px', height: '300px', backgroundColor: '#F4F4F4', margin: 'auto'}}/>
                        <Card style={{width: '300px', height: '300px', backgroundColor: '#F4F4F4', margin: 'auto'}}/>
                        <Card style={{width: '300px', height: '300px', backgroundColor: '#F4F4F4', margin: 'auto'}}/>
                        <Card style={{width: '300px', height: '300px', backgroundColor: '#F4F4F4', margin: 'auto'}}/> 
                        <Card style={{width: '300px', height: '300px', backgroundColor: '#F4F4F4', margin: 'auto'}}/>
                        <Card style={{width: '300px', height: '300px', backgroundColor: '#F4F4F4', margin: 'auto'}}/>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}

export default TeamCard