import React from 'react';
import ArrowButton from 'components/ArrowButton';
import { Link } from 'react-router-dom';

const TechniqueContainer = ({ children, title, description, url }) => {
    return (
        <article className="border-solid border-2 border-gray-300 m-1 h-48 w-3/5 mx-auto mt-8 mb-8">
            <h2 className="ml-2">{title}</h2>
            <div className="ml-4 w-2/5 h-3/5 text-sm mt-3">{description}</div>
            <div className="w-full text-right pr-2">
                <Link to={url}>
                    <ArrowButton />
                </Link>
            </div>
        </article>
    );

}


export default TechniqueContainer;



