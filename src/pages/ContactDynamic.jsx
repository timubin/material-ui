import React from "react";

const ContactDynamic = () => {
  return (
    <>
      <div className="card col-md-6 mx-auto">
        <div class="card-body">
          <h2 className="text-center mb-4">Sign up</h2>
          <form>
            <div className="form-group">
              <div class="mb-3">
                <label for="Email" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="Email"
                />
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>

              <div class="mb-3">
                <label for=" confirmpassword" class="form-label">
                  Password Confirmation
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="confirmpassword"
                  placeholder="Confirmation Password "
                />
              </div>
            </div>
            <button type="button" class="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="w100 text-center mt-2">Alredy have an accound?</div>
    </>
  );
};

export default ContactDynamic;
