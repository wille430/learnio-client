import React from 'react';
import ArrowButton from 'components/ArrowButton';
import { Link } from 'react-router-dom';
import InfoButton from './InfoButton';

const TechniqueContainer = ({ children, title, description, url, infoText }) => {
    return (
        <article className="border-solid rounded-lg shadow border-2 border-gray-300 m-1 h-48 flex flex-col p-4">
            <div className="w-full flex justify-between">
                <h2>{title}</h2>
                <InfoButton title={infoText} />
            </div>
            <div className="flex-grow text-sm text-gray-400">
                <label className="text-black">Techniques: </label>
                <span>{description}</span>
            </div>
            <div className="w-full text-right pr-2">
                <Link to={url}>
                    <ArrowButton />
                </Link>
            </div>
        </article>
    );

}


export default TechniqueContainer;



