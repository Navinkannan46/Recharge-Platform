import { useEffect, useState } from 'react'
import EditProfileForm from '../../components/editProfile/EditProfileForm'
import EditProfileHead from '../../components/editProfile/EditProfileHead'
import { useSearchParams } from 'react-router'
import { users } from '../../data/Data'

const EditProfile = () => {
  // get api data
  const [userDetails, setUserDetails] = useState({})
const [error, setError] = useState('')

  // image url
  const [profileImage, setProfileImage] = useState(null)

  // id
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')

  // get data user from api
  const getData = () => {
    try {
      const data = users.find(res => res.id == id)
      setUserDetails(data)
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const onClick = (inputValues) => {
    // destructure userdetails
    const { name, phone, email, address } = inputValues

    if (!profileImage && !userDetails?.image || !name || !phone || !email || !address) {
      setError("All fields are required")
      return
    }

    const updateUser = { ...inputValues, image: profileImage || userDetails.image }
    setUserDetails(updateUser)

    // update api call


  }

  return (
    <div className='p-10 max-w-[700px] m-auto  '>
      <EditProfileHead userDetails={userDetails} setProfileImage={setProfileImage} error={error} />
      <EditProfileForm userDetails={userDetails} onClick={onClick} error={error} />
    </div>
  )
}

export default EditProfile