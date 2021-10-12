import React from 'react';


const Table = ({ headers }) => {
    return (
        <div classname="w-full">
            <table className="mx-auto border-solid border-2 border-black" style={{
                width: '90%'
            }}>
                <tr>
                    {
                        headers.map(header => {
                            return <th className="border-solid border-2 border-black mx-auto"> {header} </th>
                        })
                    }
                </tr>
            </table>
        </div>
    )
}

export default Table;