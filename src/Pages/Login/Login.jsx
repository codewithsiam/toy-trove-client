import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import UseTitle from "../../Hooks/UseTitle";
import { FaGoogle } from "react-icons/fa";


const Login = () => {
    UseTitle('Login')
    const {haneleLogIn, googleSignIn} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    console.log(from);

    

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        haneleLogIn(email, password)
        .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            event.target.reset();
            navigate(from, {replace: true})

            setSuccess("User Login successfully");
            toast.success("User Login successfully");
          })
          .catch((error) => {
            setError(error.message)
            toast.error("Something went wrong!")
          });
        console.log(email, password)
    }

    const handleGoogleLogin = () => {
        googleSignIn()
        .then((result) => {
            const user = result.user;
            navigate(from, { replace: true });
            setSuccess("User Login successfully");
            toast.success("User Login successfully");
          })
          .catch((error) => {
            setError(error.message);
            toast.error("Something went wrong!")
          });
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded-md shadow">
                <h1 className="text-2xl font-semibold mb-6">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Email
                        </label>
                        <input
                              className="input input-primary w-full"
                            type="email"
                            name="email"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Password
                        </label>
                        <input
                            className="input input-primary w-full"
                            type="password"
                            name="password"
                        />
                    </div>
                    <button
                        className="btn btn-primary w-full text-white"
                        type="submit"
                    >
                        Log In
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <span className="text-gray-600">Don't have an account?</span>{' '}
                    <Link
                        className=" text-blue-500 font-semibold hover:underline "
                        to="/register"
                    >
                        Register
                    </Link>
                </div>
                <div className="divider">OR</div>
                <button onClick={()=>handleGoogleLogin()} className="btn btn-black w-full btn-outline"><span className="mr-4 text-red-600"><FaGoogle /></span> Log in with Google</button>
                <div className='mt-4'>
                    <p className='text-red-400 text-center'>{error}</p>
                    <p className='text-green-400 text-center' >{success}</p>
                </div>
            </div>
        </div>
    );
};

export default Login;