import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hook/useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "../../hook/useAuth";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const {login} = useAuth();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async(data) =>{
        const user = await axiosSecure.get(`/users/${data.email}`)
        if(user.data.pin === data.pin)
        {
            toast.success('Login successful');
            login();
            navigate('/');
        }
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-500">This field is required</span>}
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
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <p>Do not have an account? <Link to='/register' className="text-blue-500">Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;