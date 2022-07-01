import React from "react";
import { useForm } from "react-hook-form";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import { useLocation, useNavigate } from "react-router-dom";

import icon from "../../assets/img/google.png";
import auth from "../../Firebase.init";
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  let errorElement;

  const [signInWithGoogle, gUser, gLoading] = useSignInWithGoogle(auth);
  const { register, handleSubmit, errors, reset } = useForm();
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (user || gUser) {
    navigate(from, { replace: true });
  }

  if (loading || gLoading) {
    return <p>loading....</p>;
  }
  if (error) {
    errorElement = (
      <p className="text-red-500">
        <small>{error?.message}</small>
      </p>
    );
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    reset();
  };
  return (
    <div class="hero min-h-screen bg-base-200 mt-4">
      <div class="card flex-shrink-0 w-full max-w-sm ">
        <div class="card-body mt-[55px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
              <input
                {...register("email")}
                placeholder="Email"
                required
                class="input input-bordered bg-[#F5F5F5] text-[#6C757D] mb-3"
              />
            </div>
            <div class="form-control">
              <input
                type="password"
                {...register("password")}
                placeholder="Password"
                required
                class="input input-bordered bg-[#F5F5F5] text-[#6C757D]"
              />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <p className="text-red-700 ">{errorElement}</p>

            <div class="form-control mt-6">
              <button
                type="submit"
                class="btn text-white bg-[#E51A4B] hover:bg-[#F5F5F5] hover:text-black"
              >
                Login
              </button>
            </div>
            <p>
              Don't have an account?{" "}
              <span
                className="text-red-700 cursor-pointer ml-1"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </span>
            </p>
          </form>
          <div class="divider">OR</div>
          <button
            class="py-3 bg-base-200 border-2 flex justify-center items-center rounded-md"
            onClick={() => signInWithGoogle()}
          >
            Contiune With Google{" "}
            <span>
              <img src={icon} className="w-7 ml-2" alt="" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
