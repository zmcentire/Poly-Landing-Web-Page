import React from 'react';
import IntroCard from '../Cards/IntroCard';
import IntroVideo from '../Cards/IntroVideo';
import ClientCard from '../Cards/ClientCard';
import SolutionCard from '../Cards/SolutionCard';
import TeamCard from '../Cards/TeamCard';


const Home = () => {
    return (
        <div>
            <IntroCard/>
            <IntroVideo/>
            <ClientCard/>
            <SolutionCard/>
            <TeamCard/>
        </div>
    )
}

export default Home