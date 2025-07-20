import { useState } from 'react';
import GenerateCheckBox from './GenderCheckBox.jsx'
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup.js';
const Signup = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })
    const handleCheckBoxChange = (gender) => {
        setInputs({ ...inputs, gender })
    }
    const {loading,signup} = useSignup()
    const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

    return (
        <div>
            <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
                <div className="w-full p-6 rounded-lg shadow-md bg-gray-400">
                    <h1 className="text-3xl font-semibold text-center text-gray-200">
                        Sign Up <span className="text-amber-400">IChat</span>
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className="label p-2">
                                <span className="text-amber-400 label-text">
                                    Full Name
                                </span>
                            </label>
                            <input type="text" placeholder="Sajan Dost"
                                className="w-full input input-bordered h-10"
                                value={inputs.fullName}
                                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="label p-2">
                                <span className="text-amber-400 label-text">
                                    UserName
                                </span>
                            </label>
                            <input type="text" placeholder="saujanKumarXXX"
                                className="w-full input input-bordered h-10" value={inputs.username}
                                onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                        </div>
                        <div>
                            <label className="label p-2">
                                <span className="text-amber-400 label-text">
                                    Password
                                </span>
                            </label>
                            <input type="password" placeholder="Password"
                                className="w-full input input-bordered h-10"
                                value={inputs.password}
                                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="label p-2">
                                <span className="text-amber-400 label-text">
                                    Conform Password
                                </span>
                            </label>
                            <input type="password" placeholder="Conform Password"
                                className="w-full input input-bordered h-10" value={inputs.confirmPassword}
                                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
                        </div>

                        <GenerateCheckBox
                            onCheckboxChange={handleCheckBoxChange}
                            selectedGender={inputs.gender}
                        />
                        <Link to="/login" className="text-sm hover:underline hover:text-amber-200 mt-2 inline-block">
                            Already Have an Account?
                        </Link>

                        <div>
                            <button class="btn  btn-warning mt-2" disabled={loading}>
                                {loading ? <span className='loading loading-spinner'></span>:"Sign up"}
                                </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

/*
const Signup = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
                <div className="w-full p-6 rounded-lg shadow-md bg-gray-400">
                    <h1 className="text-3xl font-semibold text-center text-gray-200">
                        Sign Up <span className="text-amber-400">IChat</span>
                    </h1>
                    <form >
                        <div>
                            <label className="label p-2">
                                <span className="text-amber-400 label-text">
                                    Full Name
                                </span>
                            </label>
                            <input type="text" placeholder="Sajan Dost"
                                className="w-full input input-bordered h-10" />
                        </div>
                        <div>
                            <label className="label p-2">
                                <span className="text-amber-400 label-text">
                                    UserName
                                </span>
                            </label>
                            <input type="text" placeholder="saujanKumarXXX"
                                className="w-full input input-bordered h-10" />
                        </div>
                        <div>
                            <label className="label p-2">
                                <span className="text-amber-400 label-text">
                                    Password
                                </span>
                            </label>
                            <input type="password" placeholder="Password"
                                className="w-full input input-bordered h-10" />
                        </div>
                        <div>
                            <label className="label p-2">
                                <span className="text-amber-400 label-text">
                                    Conform Password
                                </span>
                            </label>
                            <input type="password" placeholder="Conform Password"
                                className="w-full input input-bordered h-10" />
                        </div>
                    
                    <GenerateCheckBox></GenerateCheckBox>
                        <a href="" className="text-sm hover:underline hover:text-amber-200 mt-2 inline-block">
                        Already Have an Account?
                    </a>

                        <div>
                            <button class="btn  btn-warning mt-2">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
*/
export default Signup;