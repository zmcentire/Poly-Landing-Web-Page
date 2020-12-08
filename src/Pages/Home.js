import React from 'react';
import IntroCard from '../Cards/IntroCard';
import IntroVideo from '../Cards/IntroVideo';
import ClientCard from '../Cards/ClientCard';
import SolutionCard from '../Cards/SolutionCard';


const Home = () => {
    return (
        <div>
            <IntroCard/>
            <IntroVideo/>
            <ClientCard/>
            <SolutionCard/>
        </div>
    )
}

export default Home