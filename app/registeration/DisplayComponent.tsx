import React from 'react';
import {inputTypes} from "@/types/props";

function DisplayComponent(props:{regData:inputTypes[]}) {
    return (
            <div className="bg-white p-8 rounded shadow-md text-black">
                <h2 className="text-2xl font-semibold mb-4">All Registrations</h2>

                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Sr
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            First Name
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Last Name
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            User-Name
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Phone
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            City
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Country
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {
                        props.regData.map((item, index)=>{
                            return(<tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">{index + 1} </td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.f_name} </td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.l_name} </td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.username} </td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.email} </td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.phone} </td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.city} </td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.country} </td>
                            </tr>)
                        })
                    }

                    </tbody>
                </table>
            </div>
    );
}

export default DisplayComponent;