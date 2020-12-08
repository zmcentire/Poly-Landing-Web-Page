import React from 'react';
import { Grid, Cell } from 'react-mdl';

const SolutionCard = () => {
    return (
        <div>
            <Grid>
                <Cell col={12}>
                    <div className="solution-title">
                        <h2>How We Help You</h2>
                    </div>
                    <div className="solution">
                        <h3>Our Solution</h3>
                        <p>
                            One of the most significant challenges companies, 
                            cities, and schools face is creating an environment 
                            where people can comfortably engage with one another. 

                            As administrators look to increase involvement within 
                            their institutions, social media has become the foundation 
                            upon which they rely for engagement. 

                            Although social media acts as a communication enhancer, 
                            it is the culprit of in-genuine online engagement. Such a lack 
                            of ingenuity fosters loneliness and isolation among 
                            adults and students.
                        </p>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}

export default SolutionCard