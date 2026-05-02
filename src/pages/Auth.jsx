import { useState } from "react";
import { useForm } from "react-hook-form";

export const Auth = () => {
  const [mode, setMode] = useState("signup");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onFormSubmit = (data) => {
    {
      mode === "signup"
        ? alert(
            `name: ${data.name}, email: ${data.email}, password: ${data.password}`,
          )
        : alert(`email: ${data.email}, password: ${data.password}`);
    }
  };
  return (
    <div className="section">
      <div className="container">
        <div className="auth-container">
          <h1>{mode === "signup" ? "Sign Up" : "Log In"}</h1>
          <form className="data-form" onSubmit={handleSubmit(onFormSubmit)}>
            {mode === "signup" && (
              <div>
                <label htmlFor="name">User Name: </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter name"
                  id="name"
                  className="input"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "Name must atleast be 3 char",
                    },
                  })}
                />
                {errors.name && (
                  <span style={{ color: "crimson" }}>
                    * {errors.name.message}
                  </span>
                )}
              </div>
            )}
            <div>
              <label htmlFor="email">Email:</label> <br />
              <input
                type="email"
                placeholder="Enter email"
                id="email"
                className="input"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span style={{ color: "crimson" }}>
                  * {errors.email.message}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="password">Password: </label> <br />
              <input
                type="password"
                placeholder="Type passwrd"
                id="password"
                className="input"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be 6 char" },
                  maxLength: {
                    value: 12,
                    message: "Password can't exceed 12 char",
                  },
                })}
              />
              {errors.password && (
                <span style={{ color: "crimson" }}>
                  * {errors.password.message}
                </span>
              )}
            </div>
            <div>
              <button type="submit" className="btn-sec">
                {mode === "signup" ? "Sign Up" : "Log In"}
              </button>
            </div>
            <div>
              {mode === "signup" ? (
                <p>
                  Already have an account?{" "}
                  <span className="mode-link" onClick={() => setMode("login")}>
                    Login
                  </span>
                </p>
              ) : (
                <p>
                  Don't have an account?{" "}
                  <span className="mode-link" onClick={() => setMode("signup")}>
                    Sign Up
                  </span>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
