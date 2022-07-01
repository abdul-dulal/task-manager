import React from "react";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/google.png";
import auth from "../../Firebase.init";
const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading] = useSignInWithGoogle(auth);
  const { register, handleSubmit, errors, reset } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email, data.password);
    reset();
  };

  if (user || gUser) {
    navigate("/");
  }
  if (loading || gLoading) {
    return <p>loading.....</p>;
  }
  return (
    <div
      class="hero min-h-screen  mt-4"
      style={{
        backgroundPosition: "cover",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div class="card flex-shrink-0 w-full max-w-sm  ">
        <div class="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
              <input
                {...register("anme")}
                required
                placeholder="Name"
                class="input input-bordered bg-[#F5F5F5] text-[#6C757D] mb-3"
              />
            </div>
            <div class="form-control">
              <input
                {...register("email")}
                placeholder="Email"
                class="input input-bordered bg-[#F5F5F5] text-[#6C757D] mb-3"
              />
            </div>
            <div class="form-control">
              <input
                type="password"
                {...register("password")}
                placeholder="Password"
                class="input input-bordered bg-[#F5F5F5] text-[#6C757D]"
              />
            </div>
            <div class="form-control mt-6">
              <button
                type="submit"
                class="btn text-white bg-[#E51A4B] hover:bg-[#F5F5F5] hover:text-black"
              >
                Login
              </button>
            </div>
            <p>
              You have already an account?
              <span
                className="text-red-700 cursor-pointer ml-1"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>
          </form>
          <div class="divider">OR</div>
          <button
            class="py-3 border-2 flex justify-center items-center rounded-md"
            onClick={() => signInWithGoogle()}
          >
            Contiune With Google{" "}
            <span>
              <img src={logo} className="w-7 ml-2" alt="" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
