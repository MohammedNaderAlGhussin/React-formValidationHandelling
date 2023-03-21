import { useState } from "react";
import "./App.css";
function App() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isValid, setIsValid] = useState(false);
  const [submit, setSubmit] = useState(false);

  const firstNameHandler = (e) => {
    setFormValues({ ...formValues, firstName: e.target.value });
    if (e.target.value) {
    }
  };
  const lastNameHandler = (e) => {
    setFormValues({ ...formValues, lastName: e.target.value });
  };
  const emailHandler = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setSubmit(true);
    if (checkData()) {
      setIsValid(true);
      clear();
    }
  };
  const checkData = () => {
    if (
      formValues.firstName !== "" &&
      formValues.lastName !== "" &&
      formValues.email !== ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const clear = () => {
    setFormValues({ firstName: "", lastName: "", email: "" });
  };
  return (
    <div className="container w-1/2 mx-auto mt-[150px] shadow bg-white">
      <form
        onSubmit={onSubmitHandler}
        className="w-full h-full flex flex-col p-5"
      >
        {submit && isValid ? (
          <div className="valid-msg">Success! Thank you for registering.</div>
        ) : null}
        <input
          className="input mt-0"
          type="text"
          value={formValues.firstName}
          placeholder="FirstName"
          onChange={firstNameHandler}
        />
        {isValid ? null : submit && formValues.firstName === "" ? (
          <span className="text-red-500">Enter Your First Name </span>
        ) : null}
        <input
          className="input"
          type="text"
          value={formValues.lastName}
          placeholder="LastName"
          onChange={lastNameHandler}
        />
        {isValid ? null : submit && formValues.lastName === "" ? (
          <span className="text-red-500">Enter Your Last Name </span>
        ) : null}

        <input
          className="input "
          type="email"
          value={formValues.email}
          placeholder="Email..."
          onChange={emailHandler}
        />
        {isValid ? null : submit && formValues.email === "" ? (
          <span className="text-red-500">Enter Your Email </span>
        ) : null}

        <button
          className=" bg-[#138617] mt-5 duration-300 hover:bg-[#4caf50] py-2 text-white text-[18px]"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
