import React from 'react'
import { signOutUserFailure, signOutUserStart, signOutUserSuccess } from '../redux/user/userSlice'
import { useDispatch } from 'react-redux'
const Profile = () => {
  const dispatch = useDispatch()
  const handleSignOut = async() => {
    try{
      dispatch(signOutUserStart())
      const res = await fetch('/api/auth/signout')
      const data = await res.json()
      if(data.success === false){
        dispatch(signOutUserFailure(data.message))
        return;
      }
      dispatch(signOutUserSuccess(data))
    }
    catch(error){
      dispatch(signOutUserFailure(data.message))
    }
  }
  return (
    <button 
    onClick = {handleSignOut}
    >Sign Out</button>
  )
}

export default Profile