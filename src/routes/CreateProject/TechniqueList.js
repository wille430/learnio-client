import React from 'react';
import TechniqueCard from './TechniqueCard';

const TechniqueList = ({techniques, setTechniques}) => {
    return (
        <section className="grid gap-4" style={{
            gridTemplateColumns: 'repeat(auto-fill,  minmax(150px, 1fr))'
        }}>
            <TechniqueCard techniques={techniques} setTechniques={setTechniques} index={0} key={techniques[0].value} />
            <TechniqueCard techniques={techniques} setTechniques={setTechniques} index={1} key={techniques[1].value} />
            <TechniqueCard techniques={techniques} setTechniques={setTechniques} index={2} key={techniques[2].value} />
        </section>
    );
}

export default TechniqueList;