import '../../css/login_register.css'

function Login() {
  return (
    <div className="row wrapper">
      <div className="col-10 col-lg-5">
        <form
          className="shadow rounded bg-body"
          action="your_submit_url_here"
          method="post"
        >
          <h2 className="mb-4">Login</h2>
          <div className="mb-3">
            <label for="email_field" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email_field"
              className="form-control"
              name="email"
              value=""
            />
          </div>

          <div className="mb-3">
            <label for="password_field" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password_field"
              className="form-control"
              name="password"
              value=""
            />
          </div>

          <a href="/password/forgot" className="float-end mb-4">
            Forgot Password?
          </a>

          <button id="login_button" type="submit" className="btn w-100 py-2">
            LOGIN
          </button>

          <div className="my-3">
            <a href="/register" className="float-end">
              New User?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
