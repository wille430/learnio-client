import React from 'react';
import TechniqueCard from './TechniqueCard';

const TechniqueList = ({techniques, setTechniques}) => {
    return (
        <section className="grid gap-4" style={{
            gridTemplateColumns: 'repeat(auto-fill,  minmax(150px, 1fr))'
        }}>
            {techniques.map((x, i) => <TechniqueCard techniques={techniques} setTechniques={setTechniques} index={i} key={techniques[i].value} />)}
        </section>
    );
}

export default TechniqueList;