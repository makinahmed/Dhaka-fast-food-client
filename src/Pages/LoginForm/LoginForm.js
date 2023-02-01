import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../features/auth/authSlice';
import './loginform.css';
function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
   
   const { email, isLoading } = useSelector((state) => state?.auth);
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
      dispatch(loginUser(data));
    };
  
  useEffect(() => {
    if (!isLoading && email) {
      navigate("/");
    }
  }, [email]);
 
    return (
      <div className="container login-form-container">
        <div className="row">
          <div className="col-sm-12 col-md-5 sign-up login-form">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-md-50 w-sm-100 "
            >
              <h2 className="fw-bolder">Sign In</h2>

              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                defaultValue=""
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                {...register("password", { required: true, minLength: 6 })}
              />

              <input type="submit" />
              <span className="my-3">
                Create an account <Link to="/signup">Register</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    );
}

export default LoginForm;