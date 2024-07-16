import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hook/useAxiosSecure";
import toast from "react-hot-toast";

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState('User');
    const axiosSecure = useAxiosSecure();

    const handleRoleChange = (event) => {
        setRole(event.target.value); // Update state with the selected value
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async(data) => {
        const user = {
            name : data.name,
            email: data.email,
            mobile: data.mobile,
            pin: data.pin,
            role: role
        }

        const userEmail = await axiosSecure.get(`/users/${data?.email}`);
        if(userEmail.data.email)
        {
            return toast.error('Already use this email');
        }

        const userRes =await axiosSecure.post('/users',user);
        console.log(userRes.data);

    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full lg:w-[350px] shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="name" name='name' placeholder="Enter your name" className="input input-bordered" {...register("name", { required: true })} />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Mobile</span>
                            </label>
                            <input type="text" name='mobile' placeholder="Enter your mobile" className="input input-bordered" {...register("mobile", {
                                required: true,
                                minLength: 11,
                                maxLength: 11,
                                pattern: /^\d{11}$/
                            })} />
                            {errors.mobile?.type === 'required' && <span className="text-red-500">This field is required</span>}
                            {errors.mobile?.type === 'minLength' && <span className="text-red-500">Enter a valid number</span>}
                            {errors.mobile?.type === 'maxLength' && <span className="text-red-500">Enter a valid number</span>}
                            {errors.mobile?.type === 'pattern' && <span className="text-red-500">Enter a valid number</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PIN</span>
                            </label>
                            <div className="flex items-center w-full relative">
                                <input type={showPassword ? "text" : "password"} name="pin" placeholder="Enter your PIN" className="input input-bordered w-full" {...register("pin", {
                                    required: true,
                                    minLength: 5,
                                    maxLength: 5,
                                    pattern: /^\d{5}$/
                                })} />
                                <span onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash className="absolute top-4 right-2 cursor-pointer"></FaEyeSlash> : <FaEye className="absolute top-4 right-2 cursor-pointer" />}
                                </span>

                            </div>
                            {errors.pin?.type === 'required' && <span className="text-red-500">This field is required</span>}
                            {errors.pin?.type === 'minLength' && <span className="text-red-500">5 digit pin</span>}
                            {errors.pin?.type === 'maxLength' && <span className="text-red-500">5 digit pin</span>}
                            {errors.pin?.type === 'pattern' && <span className="text-red-500">Enter a valid pin</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="">Role</span>
                            </label>
                            <div className="flex gap-8">
                                <div>
                                    <label>
                                        <input
                                            type="radio"
                                            name="role"
                                            value="User"
                                            checked={role === 'User'}
                                            onChange={handleRoleChange} />
                                        User
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type="radio"
                                            name="role"
                                            value="Agent"
                                            checked={role === 'Agent'}
                                            onChange={handleRoleChange} />
                                        Agent
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div>
                            <p>Already have an account? <Link to='/login' className="text-blue-500">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;