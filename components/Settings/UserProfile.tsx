"use client";

import { SnackbarCloseReason } from '@mui/material';
import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaKey } from 'react-icons/fa';
import Toast from '../Toast';

const UserProfile = () => {

    const [open, setOpen] = React.useState(false);
    const [toastType, setToastType] = React.useState<'success' | 'error'>('success');
    const [message, setMessage] = React.useState('Changes made successfully!');


    const handleToastClickSuccess = () => {
        setMessage('Changes made successfully!');
        setToastType('success');
        setOpen(true);
    };

    const handleToastClickError = () => {
        setMessage('Passwords do not match!');
        setToastType('error');
        setOpen(true);
    };

    const handleToastClose = (
        event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    // Input state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        location: '',
        phone: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    // Image state for profile picture
    const [profileImage, setProfileImage] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string>('/download.jpeg');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setProfileImage(file); // Set the image file in state
            setPreviewImage(URL.createObjectURL(file)); // Show preview of the image
        }
    };

    const handleSaveChanges = (e: React.FormEvent) => {
        e.preventDefault();

        // Perform form validation
        if (formData.newPassword !== formData.confirmPassword) {
            handleToastClickError();
            return;
        }
        console.log("Form Data: ", formData);
        handleToastClickSuccess();

        if (profileImage) {
            console.log("Profile Image: ", profileImage);
        } else {
            console.log("No new profile image uploaded.");
        }

        setFormData({
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            location: '',
            phone: '',
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        });
    };

    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    return (
        <div className=' min-w-full flex-1 flex justify-center items-center'>

            <Toast
                open={open}
                handleClose={handleToastClose}
                message={message}
                severity={toastType}
                autoHideDuration={3000}
            />

            <form className=' max-w-fit w-full flex flex-col justify-center items-center text-black py-3 px-1 my-4 xl:px-10' onSubmit={handleSaveChanges}>
                <div className='w-full flex flex-col md:flex-row border-b border-[#9090A7] border-opacity-50 pb-3 mb-10 xl:space-x-10'>
                    <div className='w-full md:min-w-[500px] lg:min-w-[50%] flex flex-col sm:flex-row justify-center items-center lg:justify-start'>
                        <div className='w-[100px] h-[100px] border-1 border-white rounded-full p-1 bg-white shadow-lg mr-3 mb-5 sm:mb-0'>
                            <img src={previewImage} alt="image" className='min-w-full max-w-full min-h-full max-h-full rounded-full' />
                        </div>
                        <div className='flex flex-col justify-center items-center sm:items-start'>
                            <h2 className='font-body font-bold text-lg'>Alaa Mohamed</h2>
                            <p className='font-semibold'>Farmer</p>
                            <p className='text-color font-body text-base'>Eastern European Time (EET), Cairo UTC +3</p>
                        </div>
                    </div>
                    <div className='lg:w-fit flex justify-center sm:justify-end items-center mt-10 space-x-4 xl:space-x-16'>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                            id="upload-image"
                        />
                        <label htmlFor="upload-image" className='px-4 py-3 bg-secondary text-white font-body font-bold rounded-lg cursor-pointer'>
                            Upload New Photo
                        </label>
                        <button className='px-4 py-3 bg-white font-body font-bold rounded-lg border border-black'>
                            Remove
                        </button>
                    </div>
                </div>

                {/* input section */}

                <div className=' w-full flex flex-col md:flex-row border-b border-gray-400 border-opacity-50 pb-3 lg:space-x-4 xl:space-x-10'>
                    <div className=' w-full flex flex-col justify-center items-center'>
                        <div className=' w-full sm:w-[390px] xl:min-w-[450px] flex flex-col items-start'>
                            <label className=' font-body font-bold text-lg'>First Name</label>
                            <input type="text"
                                className=' w-full border border-[#9090A7] rounded-lg p-3 mt-3 outline-secondary'
                                name="firstName"
                                placeholder='eg. Alaa'
                                value={formData.firstName}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className=' w-full sm:w-[390px] xl:min-w-[450px] flex flex-col items-start  mt-7'>
                            <label className=' font-body font-bold text-lg'>User Name</label>
                            <input
                                type="text"
                                className=' w-full border border-[#9090A7] rounded-lg p-3 mt-3 outline-secondary'
                                name='userName'
                                placeholder='eg. Alaa_mohamed'
                                value={formData.userName}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className=' sm:w-full flex flex-col justify-center items-center mt-7 md:mt-0'>
                        <div className=' w-full sm:w-[390px] xl:min-w-[450px] flex flex-col items-start'>
                            <label className=' font-body font-bold text-lg'>Last Name</label>
                            <input
                                type="text"
                                className=' w-full border border-[#9090A7] rounded-lg p-3 mt-3 outline-secondary'
                                name='lastName'
                                placeholder='eg. Mohamed'
                                value={formData.lastName}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className=' w-full sm:w-[390px] xl:min-w-[450px] flex flex-col items-start  mt-7'>
                            <label className=' font-body font-bold text-lg'>Email Address</label>
                            <input
                                type="email"
                                className=' w-full border border-[#9090A7] rounded-lg p-3 mt-3 outline-secondary'
                                name='email'
                                placeholder='eg. alaa@gmail.com'
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>

                {/* input section */}

                <div className=' w-full flex flex-col md:flex-row border-b border-gray-400 border-opacity-50 pb-3 lg:space-x-4 xl:space-x-10'>
                    <div className=' w-full flex flex-col justify-center items-center'>
                        <div className=' w-full sm:w-[390px] xl:min-w-[450px] flex flex-col items-start  mt-7'>
                            <label className=' font-body font-bold text-lg'>Location</label>
                            <input
                                type="text"
                                className=' w-full border border-[#9090A7] rounded-lg p-3 mt-3 outline-secondary'
                                name='location'
                                placeholder='eg. Alaa_mohamed'
                                value={formData.location}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className=' sm:w-full flex flex-col justify-center items-center mt-7 md:mt-0'>
                        <div className=' w-full sm:w-[390px] xl:min-w-[450px] flex flex-col items-start  mt-7'>
                            <label className=' font-body font-bold text-lg'>Phone Number</label>
                            <input
                                type="tel"
                                className=' w-full border border-[#9090A7] rounded-lg p-3 mt-3 outline-secondary'
                                name='phone'
                                placeholder='eg. +250793095601'
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>

                {/* input section */}

                <div className=' w-full flex flex-col md:flex-row pb-3 lg:space-x-4 xl:space-x-10'>
                    <div className='sm:w-full flex flex-col justify-center items-center mt-7 md:mt-0'>
                        <div className='w-full sm:w-[390px] xl:min-w-[450px] flex flex-col items-start mt-7'>
                            <label className='font-body font-bold text-lg'>Current Password</label>

                            <div className='relative w-full mt-3'>
                                <span className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'>
                                    <FaKey />
                                </span>

                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className='w-full border border-[#9090A7] rounded-lg p-3 pl-10 pr-10 outline-secondary'
                                    name='currentPassword'
                                    value={formData.currentPassword}
                                    onChange={handleInputChange}
                                    placeholder="Enter current password"
                                />

                                <span
                                    className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500'
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='sm:w-full flex flex-col justify-center items-center mt-7 md:mt-0'>
                        <div className='w-full sm:w-[390px] xl:min-w-[450px] flex flex-col items-start mt-7'>
                            <label className='font-body font-bold text-lg'>New Password</label>

                            <div className='relative w-full mt-3'>
                                <span className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'>
                                    <FaKey />
                                </span>

                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className='w-full border border-[#9090A7] rounded-lg p-3 pl-10 pr-10 outline-secondary'
                                    name='newPassword'
                                    value={formData.newPassword}
                                    onChange={handleInputChange}
                                    placeholder="Enter new password"
                                />

                                <span
                                    className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500'
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className=' w-full flex flex-col md:flex-row pb-3'>
                    <div className=' w-full flex flex-col justify-center items-center'>
                        <div className=' w-full flex flex-col items-start  mt-7'>
                            <label className=' font-body font-bold text-lg'>Confirm New Password</label>
                            <div className='relative w-full mt-3'>
                                <span className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'>
                                    <FaKey />
                                </span>

                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className='w-full border border-[#9090A7] rounded-lg p-3 pl-10 pr-10 outline-secondary'
                                    name='confirmPassword'
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    placeholder="Enter current password"
                                />

                                <span
                                    className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500'
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* <div className=' sm:w-full flex flex-col justify-center items-center mt-7 md:mt-0'>
                <div className=' w-full sm:w-[390px] xl:min-w-[450px] flex flex-col items-start  mt-7'>
                  <label className=' font-body font-bold text-lg'>New Password</label>
                  <input type="email" className=' w-full border border-[#9090A7] rounded-lg p-3 mt-3 outline-secondary' placeholder='eg. alaa@gmail.com' />
                </div>
              </div> */}
                </div>

                <div className=' w-full flex justify-end items-center mt-7'>
                    <button type='button' className='font-body font-bold bg-white py-2 px-3 border border-black rounded-lg'>Cancel</button>
                    <button type='submit' className='font-body font-bold text-white bg-secondary py-2 px-3 rounded-lg ml-5'>Save Changes</button>
                </div>




            </form>
        </div>
    )
}

export default UserProfile