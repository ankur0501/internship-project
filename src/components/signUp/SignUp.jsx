import { FormField } from "../common/FormField";
import { RadioOption } from "../common/RadioOption";
import "./signup.css";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const userDetails = Object.fromEntries(formData.entries());

    navigate("/profile", { state: userDetails });
  };

  return (
    <div className="signup container">
      <main className="page">
        <section className="content content-signup">
          <h2 className="heading">Create your PopX Account</h2>

          <form className="form signup-form" onSubmit={handleFormSubmit}>
            {/* Full Name */}
            <FormField
              id="name"
              name="name"
              type="text"
              label="Full Name"
              placeholder="Enter your full name"
              required
              asteriskRequired
            />

            {/* Phone Number */}
            <FormField
              id="phone"
              name="phone"
              type="number"
              label="Phone Number"
              placeholder="Enter your phone number"
              required
              asteriskRequired
            />

            {/* Email */}
            <FormField
              id="email"
              name="email"
              type="email"
              label="Email Address"
              placeholder="Enter your email address"
              required
              asteriskRequired
            />

            {/* Password */}
            <FormField
              id="pwd"
              name="pwd"
              type="password"
              label="Password"
              placeholder="Enter your password"
              required
              asteriskRequired
            />

            {/* Company Name */}
            <FormField
              id="comp-name"
              name="comp-name"
              type="text"
              label="Company Name"
              placeholder="Enter your company name"
            />

            {/* Agency Radio */}
            <div className="input-group signup-radio">
              <span className="agency-span required">
                Are you an Agency?<sup style={{ color: "red" }}>*</sup>
              </span>

              <div className="radio-btns">
                <RadioOption
                  id="radio-yes"
                  name="agency"
                  value="Yes"
                  label="Yes"
                />
                <RadioOption
                  id="radio-no"
                  name="agency"
                  value="No"
                  label="No"
                />
              </div>
            </div>

            <button id="create-acc-btn" type="submit">
              Create Account
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};
