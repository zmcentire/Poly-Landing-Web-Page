import React from 'react';
import MissionStatement from '../Cards/MissionStatement';
import FounderCard from '../Cards/FounderCard';
import ProblemCard from '../Cards/ProblemCard';
import SolutionCard from '../Cards/SolutionCard';
import TeamCard from '../Cards/TeamCard';

const About = () => {
    return (
        <div>
            <MissionStatement/>
            <FounderCard/>
            <ProblemCard/>
            <SolutionCard/>
            <TeamCard/>
        </div>
    )
}

export default About