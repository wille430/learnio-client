import React from "react";

const TechniqueCard = ({ techniques, setTechniques, index }) => {

    const state = techniques[index]

    const handleClick = (e) => {
        const prevState = techniques
        prevState[index].selected = !prevState[index].selected
        console.log(prevState)
        setTechniques([...prevState])
    }

    return (
        <article className="h-45 p-2 flex flex-col cursor-pointer select-none rounded" onClick={handleClick} style={{
            backgroundColor: state.color || 'lightblue'
        }}>
            <header><div className="text-white">{state.selected ? 'vald' : 'O'}</div></header>
            <div className="p-4 text-center flex-grow flex justify-center items-center">
                <h3>{state.name || 'Technique name'}</h3>
            </div>
        </article>
    );
}

export default TechniqueCard;