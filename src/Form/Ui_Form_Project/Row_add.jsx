import React from 'react'

const Row_add = (Props) => {
    let { Name, Email, Location, Phone, Delete, Edit } = Props;
    return (
        <>
            <tr>

                <td className="px-5 py-5 border-b border-gray-200 bg-white text-md">
                    {Name}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-md">
                    {Email}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-md">
                    {Location}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-md">
                    {Phone}
                </td>
                <td className="px-5 py-5 border-b  bg-white text-md">
                    <button className="bg-green-600 p-2 px-4 border-2 rounded-md text-white font-bold hover:bg-white hover:text-green-600 hover:border-green-600 hover:border-2" onClick={Edit}>
                        Edit
                    </button>
                    <button className="bg-red-500 p-2 border-2 font-bold text-white rounded-md hover:bg-white hover:text-red-500 hover:border-red-500 hover:border-2" onClick={Delete}>
                        Delete
                    </button>
                </td>
            </tr>
        </>
    )
}

export default Row_add
