"use client"
import React, {useState} from 'react';

import {inputTypes, onChangeInput} from "@/types/props";
import DisplayComponent from "@/app/registeration/DisplayComponent";
import * as yup from "yup"
const Page = () => {
    const validationSchema = yup.object().shape({
        f_name: yup.string().required(),
        l_name: yup.string().required(),
        username: yup.string().required(),
        email: yup.string().required().email(),
        phone: yup.number().required(),
        city: yup.string().required(),
        country: yup.string().required(),
    })
    const [inputValue, setInputValue] = useState<inputTypes>({
        f_name: "",
        l_name: "",
        username: "",
        email: "",
        phone: 0,
        city: "",
        country: ""
    })

    const [inputValueFinal, setInputValueFinal] = useState<inputTypes[]>([])
    const [errorMsg, setErrorMsg] = useState<string>("")
    const inputEventHandler = (e:onChangeInput) => {
        let result = {
            ...inputValue,
            [e.target.name]: e.target.value
        }
        setInputValue(result)
    }
    const formSubmit = async () => {
        try {
            const check_error = await validationSchema.validate(inputValue)
            if(!check_error){
                return
            }
            let newResult:inputTypes[] = [...inputValueFinal, inputValue]
            setInputValueFinal(newResult)
            setInputValue({
                f_name: "",
                l_name: "",
                username: "",
                email: "",
                phone: 0,
                city: "",
                country: ""
            })
        }catch (error){
           setErrorMsg(error.errors)
        }

    }
    return (
        <>
            <div className="isolate bg-white px-6 py-24 sm:py-16">
                <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"  aria-hidden="true" >
                    <div
                        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Registration Form</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600 text-red-900">
                        {errorMsg}
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                First name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    value={inputValue.f_name}
                                    onChange={inputEventHandler}
                                    name="f_name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Last name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    value={inputValue.l_name}
                                    onChange={inputEventHandler}
                                    name="l_name"
                                    id="last-name"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                                User Name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    value={inputValue.username}
                                    onChange={inputEventHandler}
                                    name="username"
                                    id="company"
                                    autoComplete="organization"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="email"
                                    value={inputValue.email}
                                    onChange={inputEventHandler}
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                Phone
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="number"
                                    value={inputValue.phone}
                                    onChange={inputEventHandler}
                                    name="phone"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                City
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    value={inputValue.city}
                                    onChange={inputEventHandler}
                                    name="city"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                Country
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    value={inputValue.country}
                                    onChange={inputEventHandler}
                                    name="country"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                    </div>
                    <div className="mt-10">
                        <button
                            type="submit"
                            onClick={formSubmit}
                            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign-Up
                        </button>
                    </div>
                </div>
            </div>
            <div className="isolate bg-white px-6 ">
                <DisplayComponent regData={inputValueFinal} />
            </div>

        </>
    );
}

export default Page;