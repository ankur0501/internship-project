import { useNavigate } from "react-router-dom";
import "./signin.css";
import { FormField } from "../common/FormField";

export const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    // Stop the form from refreshing the page
    event.preventDefault();

    // Get all the form values
    const form = event.target;
    const formData = new FormData(form);

    // Convert form data into a regular JavaScript object
    const data = Object.fromEntries(formData);

    // Go to the profile page and send the form data with it
    navigate("/profile", { state: data });
  };

  return (
    <div className="signin container">
      <div className="page">
        <section className="content content-signin">
          <h2 className="heading">Signin to your PopX account</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          </p>

          <form className="form signin-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <FormField
                type="email"
                name="email"
                placeholder="Enter email address"
                label="Email Address"
                required
              />
            </div>

            <div className="input-group">
              <FormField
                type="password"
                name="password"
                label="Password"
                placeholder="Enter password"
                required
              />
            </div>

            <button type="submit">Login</button>
          </form>
        </section>
      </div>
    </div>
  );
};
