import React from 'react';
import { Grid, Cell, Card } from 'react-mdl';

const ClientCard = () => {
    return (
        <div>
            <Grid className="intro-client">
                <Cell col={12}>
                    <div className="client-title">
                      <h2>We Provide Services For Those</h2>
                    <h2>Who Want To Connect</h2>  
                    </div>
                    <div className="client-card">
                        <Card style={{Width: '450px', minHeight: '520px', margin: 'auto', backgroundColor: '#7DB8C3', borderRadius: '15px'}}/>
                        <Card style={{Width: '450px', minHeight: '520px', margin: 'auto', backgroundColor: '#7DB8C3', borderRadius: '15px'}}/>
                        <Card style={{Width: '450px', minHeight: '520px', margin: 'auto', backgroundColor: '#7DB8C3', borderRadius: '15px'}}/>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}

export default ClientCard