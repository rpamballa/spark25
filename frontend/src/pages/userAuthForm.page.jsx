import { useContext, useRef } from "react";
import InputBox from "../components/input.component";
import googleIcon from "../imgs/google.png";
import { Link, Navigate } from "react-router-dom";
import { Toaster, toast} from "react-hot-toast";
import axios from "axios";
import { storeInSession } from "../common/session";
import { UserContext } from "../App";
import { authWithGoogle } from "../common/firebase";

const UserAuthForm = ({ type }) => {
  
  let { userAuth: { accessToken }, setUserAuth} = useContext(UserContext);

  const userAuthThroughServer = (serverRoute, formData) => {
    axios.post(`${import.meta.env.VITE_API_URL}` + serverRoute, formData)
      .then(({ data }) => {
        storeInSession("user", JSON.stringify(data));
        setUserAuth(data);
      })
      .catch((error) => {
        toast.error(error.response.data.error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let serverRoute = type === "sign-in" ? "/signin" : "/signup";

    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    // Form data
    let form = new FormData(formElement);
    let formData = {};
    for (let [key, value] of form.entries()) {
      formData[key] = value;
    }

    let { fullname, email, password } = formData;

    if (fullname) {
      if (fullname.length < 3) {
        return toast.error("Full name must be at least 3 characters long");
      }
    }
    if (!email.length) {
      return toast.error("Email is required");
    }

    if (!emailRegex.test(email)) {
      return toast.error("Invalid email");
    }

    if (!passwordRegex.test(password)) {
      return toast.error( "Password should be 6 - 20 characters must contain at least 1 uppercase letter, 1 lowercase letter, 1 numeric 1 number");
    }

    userAuthThroughServer( serverRoute, formData);
  };

  // const handleGoogleAuth = async (e) => {
  //   e.preventDefault();
  //   authWithGoogle()
  //   .then((user) => {
  //     let serverRoute = "/google-auth";
  //     let formData ={
  //       accessToken: user.accessToken,
  //     }
  //     userAuthThroughServer(serverRoute, formData);
  //   })
  //   .catch((error) => {
  //     toast.error("An error occured");
  //     return console.log(error);
  //   });
  // };

  return (
    accessToken ? <Navigate to="/blog" /> :
      <section className="h-cover flex items-center justify-center">
      <Toaster />
        <form id="formElement" className="w-[80%] max-w-[400px]">
          <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
            {type === "sign-in" ? "Welcome back" : "Join us today"}
          </h1>

          {type !== "sign-in" ? (
            <InputBox
              name="fullname"
              type="text"
              placeholder="Full Name"
              icon="fi-rr-user"
            />
          ) : (
            ""
          )}

          <InputBox
            name="email"
            type="email"
            placeholder="Email"
            icon="fi-rr-envelope"
          />

          <InputBox
            name="password"
            type="password"
            placeholder="Password"
            icon="fi-rr-lock"
          />

          <button
            className="ring-fuchsia-700 ring-1 w-full rounded-full py-3 px-5 md:text-xl capitalize center mt-14"
            type="submit"
            onClick={handleSubmit}
          >
            {type.replace("-", " ")}
          </button>

          {/* <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold">
            <hr className="w-1/2 border-black" />
            <p>or</p>
            <hr className="w-1/2 border-black" />
          </div> */}

          {/* <button className="btn-dark flex items-center justify-center gap-4 w-[90%] center" onClick={handleGoogleAuth}>
            <img src={googleIcon} alt="google icon" className="w-5" />
            Continue with Google
          </button>
          {type === "sign-in" ? (
            <p className="mt-6 text-dark-grey text-xl text-center">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-black text-xl ml-1 hover:underline"
              >
                Join us today
              </Link>
            </p>
          ) : (
            <p className="mt-6 text-dark-grey text-xl text-center">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-black text-xl ml-1 hover:underline"
              >
                Sign in
              </Link>
            </p>
          )} */}
        </form>
      </section>
  );
};

export default UserAuthForm;
