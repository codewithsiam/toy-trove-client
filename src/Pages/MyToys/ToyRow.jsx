import React from 'react';
import { Link } from 'react-router-dom';
import { FaPencilAlt } from "react-icons/fa";

const ToyRow = ({ toy, handleDelete }) => {
    const { _id, toyName, subCategory, sellerName, sellerEmail, price, availableQuantity, picture } = toy || "";


    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-circle w-12 h-12">
                            <img src={picture} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>
                        <div className="text-sm opacity-50">{subCategory}</div>
                    </div>
                </div>
            </td>
            <td>{price}$</td>
            <td>{sellerEmail}</td>
            <td>{sellerName}</td>
            <td>{availableQuantity} items in stock</td>
            <th>
                <Link to={`/updateToy/${_id}`}>
                    <button className="btn btn-success rounded-full btn-outline mr-3 btn-xs"><FaPencilAlt></FaPencilAlt> Update </button>
                </Link>
                </th>
                <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-error btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default ToyRow;