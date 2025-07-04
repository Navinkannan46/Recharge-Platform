import { useState } from 'react';
import { Link } from 'react-router';
import { users } from '../../data/Data';
import { useEffect } from 'react';


const MyAccountDetails = ({id}) => {

    const [userDetails, setUserDetails] = useState()
   
    const getData = () => {
        const data = users.find(res => res.id == id)
        setUserDetails(data)

    }

    useEffect(() => {
        getData()

    }, [])
    return (
        <div className='py-8 mb-10'>
            {/* heading */}
            <div className='flex items-center'>
                <button >
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 1.84091L7.62725 0.5L0 8L7.63496 15.5L9 14.1591L2.73008 8L9 1.84091Z" fill="black" />
                    </svg>
                </button>
                <h2 className='m-auto font-bold text-[20px] font-inter'>My Account</h2>
            </div>

            {/* user details */}
            <div className='flex mt-10 gap-3'>
                <div className='w-[74px] '>
                    <img className='rounded-full ' src={userDetails?.image} alt="" />
                </div>

                <div >
                    <p className='font-bold font-inter '>{userDetails?.name}</p>
                    <p className='ml-2 font-inter'>{userDetails?.phone}</p>
                    <Link to={`/edit-profile?id=${id}`} className='font-bold text-blue-600 font-inter'>Edit Profile</Link>
                </div>
            </div>



        </div>


    )
}

export default MyAccountDetails



