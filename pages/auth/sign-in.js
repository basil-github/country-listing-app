import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { signUp } from "@features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

function SignIn() {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (!data.user_n_email || !data.user_n_email) {
      alert("please compleat felids ");
    } else {
      dispatch(signUp(data));
      router.push("/");
    }
  };
  return (
    <section className="container sign_in">
      <div className="row">
        <form onSubmit={handleSubmit(onSubmit)} className="col-md-4">
          <h1>Sign In</h1>
          <div className="d-flex new_user">
            <h6>New user?</h6>
            <a className="ms-2 text">Create an account</a>
          </div>
          <input
            type="text"
            placeholder="Username or email"
            {...register("user_n_email")}
          />
          <input
            type="password"
            placeholder="Password "
            {...register("password")}
          />
          <div className="checkbox">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Keep me signed in</label>
          </div>
          <input type="submit" value={"Sign In"} />
        </form>
        <div className="col-md-8 home_img d-none d-md-flex">
          <Image src={"/key.jpg"} width={450} height={600} alt="key" />
        </div>
      </div>
    </section>
  );
}

export default SignIn;
