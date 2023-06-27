import React from 'react'

const Row_add = (Props) => {
    let {Name,Email,Location,Phone,Delete} = Props;
    return (
        
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
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-md">
                    <button className="bg-green-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                        Edit
                    </button>
                    <button className="bg-red-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer ms-2" onClick={Delete}>
                        Delete
                    </button>
                </td>
            </tr>
    )
}

export default Row_add
