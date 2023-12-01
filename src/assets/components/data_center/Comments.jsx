import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const Comments = () => {
    const [comment, commentSet] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3031/Comments')
        .then(res=> commentSet(res.data))
        .catch(err=> console.log(err))
    }, [])

    return (
        <div>
           <div className='container mt-5'>
           <table className='table'>
                <thead>
                    <tr>
                        <tr>Id</tr>
                        <tr>Name</tr>
                        <tr>Email</tr>
                    </tr>
                </thead>
                <tbody>
                    {comment.map((data, index)=>{
                        return <tr key={index}>
                            <td>data.id</td>
                            <td>data.name</td>
                            <td>data.email</td>
                        </tr>
                    })}
                </tbody>
            </table>
           </div>
            
        </div>
    );
};

export default Comments;