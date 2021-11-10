import React from 'react'
import { useForm } from 'react-hook-form'
import './Form.css'
import WebcamCapture from './Webcam'
import './Webcam.css'
import firebase from 'firebase'

export default function Form () {
  const { register, getValues, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = data => {
    console.log(data)
    const db = firebase.firestore()
    db.collection('form').add({
      fullname: getValues('fullname'),
      id: getValues('id'),
      email: getValues('email'),
      tel: getValues('tel'),
      gender: getValues('gender'),
      dob: getValues('dob')
    })
    alert('Form submitted')
  }
  console.log(errors)

  return (
    <div className = 'home-container'>
      <div className = 'container'>
        <div className = 'text'>
          <h1>Application Form</h1>
          <form className = 'form' onSubmit = {handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full name" {...register('fullname', { required: true, maxLength: 80 })} />
            <input type="number" placeholder="ID number" {...register('id', { required: true, maxLength: 16, minLength: 16 })} />
            <input type="text" placeholder="Email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
            <input type="tel" placeholder="Mobile number" {...register('tel', { required: true, minLength: 6, maxLength: 12 })} />
            <select {...register('gender', { required: true })}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input type="date" placeholder="Date of Birth" {...register('dob', { required: true })} />
            <div className = 'photo-container'>
              <WebcamCapture/>
            </div>
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  )
}
