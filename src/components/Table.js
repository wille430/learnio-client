import React from 'react';
import TableButton from "components/TableButton"


const Table = ({ headers }) => {
    return (
        <div classname="w-full ">
            <table className="mx-auto border-solid border-2 border-gray-400 bg-gray-100 table-fixed" style={{
                width: '90%',
            }}>
                <tr className="border-solid border-2 border-gray-400 text-sm m-1">
                    <th className="w-1/16">Curcle</th>
                    <th className="w-3/16">Course Name</th>
                    <th className="w-7/16 flex justify-start">Description</th>
                    <th className="w-2/16">Active Techniques</th>
                    <th className="w-2/16">Deadline</th>
                    <th className="w-1/16">...</th>
                </tr>
                <tr>
                    {
                        headers.map(header => {
                            return <th className="text-xs m-1"> {header}
                            </th>
                        })
                    }
                </tr>
                <tr className="flex justify-center col-span-6">
                    <TableButton />
                </tr>
            </table>
        </div>
    )
}

export default Table;