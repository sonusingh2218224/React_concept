import React, { useState } from "react";
import swal from "sweetalert";
import Helper from "./../Helper";
import Joi from "joi";
import { Alert } from "react-bootstrap";

//schema validation using joi
const loginSchema = Joi.object({
  username: Joi.string()
    .min(4)
    .max(50)
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
    .label("Email"),
  password: Joi.string().min(4).max(50).required().label("password"),
});

//post data
async function loginUser(credentials) {
  return fetch(`${Helper.Environment.BASE_API_URL}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function Login() {
  const [errors, setErrors] = useState([]);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    let result = loginSchema.validate(form, { abortEarly: false });
    if (result.error) {
      setErrors(result.error.details);
      return;
    }

    const response = await loginUser(form);
    if ("accessToken" in response) {
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      }).then((value) => {
        localStorage.setItem("accessToken", response["accessToken"]);
        localStorage.setItem("user", JSON.stringify(response["user"]));
        window.location.href = "/dashboard";
      });
    } else {
      swal("Failed", response.message, "error");
    }
  };

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.href = "/login";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {errors?.find((er) => er?.path[0] === "server")?.message && (
          <Alert variant="danger">
            {errors?.find((er) => er?.path[0] === "server")?.message}
          </Alert>
        )}
        <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card shadow-2-strong">
                  <div className="card-body p-5 text-center">
                    <h3 className="mb-5">Sign in</h3>

                    <div className="form-outline mb-4">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        id="typeEmailX-2"
                        className="form-control form-control-lg"
                        name="username"
                        onChange={handleChange}
                      />

                      {errors && (
                        <span className="text-danger">
                          {
                            errors?.find((er) => er?.path[0] === "username")
                              ?.message
                          }
                        </span>
                      )}
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        name="password"
                        onChange={handleChange}
                      />
                      {errors && (
                        <span className="text-danger">
                          {
                            errors?.find((er) => er?.path[0] === "password")
                              ?.message
                          }
                        </span>
                      )}
                    </div>

                    {/*         
            <div className="form-check d-flex justify-content-start mb-4">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label className="form-check-label" for="form1Example3"> Remember password </label>
            </div> */}

                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Login
                    </button>
                    <button
                      className="btn btn-secondary btn-lg btn-block mx-2"
                      type="submit"
                      onClick={logout}
                    >
                      Logout
                    </button>

                    <hr className="my-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
}

export default Login;

//karn.yong@mecallapi.com
//mecallapi
