import { useState } from "react"
import { Link } from "react-router"

const EditProfileHead = ({ userDetails, setProfileImage, error }) => {
    const [image, setImage] = useState('')

    const handleChange = (e) => {
        const file = e.target.files[0] || null
        const fileUrl = file ? URL.createObjectURL(file) : ''
        setImage(fileUrl)
        setProfileImage(fileUrl)
    }

    return (
        <>
            <div className='flex items-center'>
                <Link to={'/my-account'} >
                    <svg width="9" height="14" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 1.84091L7.62725 0.5L0 8L7.63496 15.5L9 14.1591L2.73008 8L9 1.84091Z" fill="black" />
                    </svg>
                </Link>
                <h2 className='m-auto font-bold text-center font-inter'>Edit Profile</h2>
            </div>

            <div className='mt-6 max-w-[231px] m-auto flex flex-col items-center justify-center gap-2'>
                <img className='w-[98px] rounded-full boder' src={image ? image : userDetails?.image} alt="" />
                <div>
                    <label htmlFor="image" className='text-black/50 text-[20px] font-inter'>Change Profile Picture </label>
                    <input type="file" onChange={handleChange} name='image' id='image' required placeholder='Change Profile Picture' hidden />
                    {error && <div className="text-sm text-red-600">{error} </div>}
                </div>
            </div>
        </>
    )
}

export default EditProfileHead