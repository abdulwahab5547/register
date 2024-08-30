import React, { useEffect, useState } from 'react';

function Register(){
    const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://register-backend-lac.vercel.app/data')
      .then(response => response.json())
      .then(data => {
        // Set the message state with the response data
        setMessage(data.message);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
    return (
        <div className="register d-flex align-items-center justify-content-center">
            <div className="register-inner d-flex flex-column align-items-center justify-content-center">
                {/* <div className="input-container">
                    <input
                        type='text'
                        placeholder='Enter username'
                        // value=''
                        className="px-2 py-2"
                    />
                </div>
                <button className="submit mt-3 px-3 py-1">Submit</button> */}
                <p className='m-0 pt-2'>{message}</p>
            </div>
        </div>
    )
}

export default Register; 
