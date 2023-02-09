import React, { useEffect } from "react";
import "./signupform.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useUserApiMutation } from "../../features/api/userSlice";
import { toast } from "react-hot-toast";
function SignUpForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [postUser] = useUserApiMutation();
  const { email, isLoading, isSuccess, isError } = useSelector(
    (state) => state?.auth
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(createUser(data));
    postUser(data);
    if (isLoading) {
      toast.loading("Loading....", { id: "register" });
    }
    if (isSuccess) {
      toast.success("You have Successfully Registered!", { id: "register" });
    }
    if (isError) {
      toast.error("Registration Failed", { id: "register" });
    }
  };

  useEffect(() => {
    if (!isLoading && email) {
      navigate("/");
    }
  }, [email]);
  return (
    <div className="container sign-up-container">
      <div className="row">
        <div className="col-sm-12 col-md-5 sign-up ">
          <form onSubmit={handleSubmit(onSubmit)} className="w-md-50 w-sm-100 ">
            <h2 className=" ">Create a new account</h2>
            <label htmlFor="firstname">First Name</label>
            <input
              id="firstname"
              defaultValue=""
              {...register("firstname", { required: true, maxLength: 20 })}
            />

            <label htmlFor="lastname">Last Name</label>
            <input
              id="lastname"
              defaultValue=""
              {...register("lastname", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />

            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
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
              Already Registered<Link to="/login">Sign In</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
