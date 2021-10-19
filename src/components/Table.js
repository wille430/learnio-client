import React from 'react';
import TableButton from "components/TableButton"

const Table = ({ headers, rows }) => {
    return (
        <div classname="w-full ">
            <table className="mx-auto border-solid border-2 border-gray-400 bg-gray-100 table-fixed" style={{
                width: '90%',
            }}>
                <tr className="border-solid border-2 border-gray-400 text-sm m-1">
                    {/* <th className="w-1/16">Curcle</th>
                    <th className="w-3/16">Course Name</th>
                    <th className="w-7/16 text-left">Description</th>
                    <th className="w-2/16">Active Techniques</th>
                    <th className="w-2/16">Deadline</th>
                    <th className="w-1/16">...</th> */}
                    {
                        headers.map(header => {
                            return <th className="text-xs mx-1 text-left">{header}</th>
                        })
                    }
                </tr>
                <tr>
                    {
                        headers.map(header => {
                            return <th className="text-xs mx-1">{header}</th>
                        })
                    }
                </tr>
                <tr>
                    <td colSpan="5" className="text-center py-2">
                        <TableButton />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Table;