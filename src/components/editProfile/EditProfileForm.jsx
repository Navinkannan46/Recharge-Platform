import { useEffect, useState } from "react"

const EditProfileForm = ({ userDetails, onClick }) => {
    const [inputValues, setInputValues] = useState({
        name: '', phone: '', email: '', address: ''
    })
    // destructure userdetails
    const { name, phone, email, address } = inputValues

    useEffect(() => {
        if (userDetails) {
            setInputValues({
                name: userDetails.name,
                phone: userDetails.phone,
                email: userDetails.email,
                address: userDetails.address
            })
        }
    }, [userDetails])

    // onchange function
    const handleChange = (event) => {
        const { name, value } = event.target
        setInputValues((prev) => ({ ...prev, [name]: value }))
    }

    // submit update
    const handleSubmit = (event) => {
        event.preventDefault()
        onClick(inputValues)
    }
    return (
        <form onSubmit={handleSubmit} className=' mt-8 p-3  rounded-xl shadow-xl inset-shadow-sm'>
            <h2 className='font-bold text-[20px] mb-5 font-inter'>Personal Details</h2>
            <div className='flex flex-col gap-5'>
                <div>
                    <input type="text" value={name || ""} onChange={handleChange} name='name' placeholder='Full Name' className=' font-inter w-full rounded-xl p-3 text-[18px] shadow-xl inset-shadow-sm outline-0' />
                </div>
                <div>
                    <input type="text" value={phone || ""} onChange={handleChange} name='phone' placeholder='Mobile Number' className='font-inter w-full rounded-xl p-3 text-[18px] shadow-xl inset-shadow-sm outline-0' />
                </div>
                <div>
                    <input type="text" value={email || ""} onChange={handleChange} name='email' placeholder='Email Address' className='font-inter w-full rounded-xl p-3 text-[18px] shadow-xl inset-shadow-sm outline-0' />
                </div>
                <div>
                    <textarea type="text" value={address || ""} onChange={handleChange} name='address' placeholder='Billing Address' className='font-inter  w-full rounded-xl p-3 text-[18px] shadow-xl inset-shadow-sm outline-0' />
                </div>

                <button type='submit' className='text-[24px] font-bold text-white m-auto max-w-[234px] w-[90%] py-[10px] px-[76px] bg-blue-600 rounded-4xl font-inter'>Save</button>

            </div>
        </form>
    )
}

export default EditProfileForm