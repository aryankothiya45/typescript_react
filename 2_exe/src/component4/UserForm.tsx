import { JSX ,useState, useCallback } from "react";

const INITIALPERSON : {firstName : string ; lastName : string ; email : string} = {
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@react.com",
};

const UserForm = (): JSX.Element => {
  const [prev, setPerson] = useState(INITIALPERSON);

  const handleFirstNameChange = useCallback((event : React.ChangeEvent<HTMLInputElement> ) => {
    const VALUE: string  = event.target.value;

    setPerson((prev) => ({
      ...prev,
      firstName: VALUE,
    }));
  }, []);   

  const handleLastNameChange = useCallback((event : React.ChangeEvent<HTMLInputElement>) => {
    const VALUE: string  = event.target.value;

    setPerson((prev) => ({
      ...prev,
      lastName: VALUE,
    }));
  }, []);

  const handleEmailChange = useCallback((event : React.ChangeEvent<HTMLInputElement>) => {
    const VALUE: string  = event.target.value;

    setPerson((prev) => ({
      ...prev,
      email: VALUE,
    }));
  }, []);

  return(
    <>
      <label>
        First Name:
        <input
          value={prev.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last Name:
        <input
          value={prev.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Email:
        <input
          value={prev.email}
          onChange={handleEmailChange}
        />
      </label>
      <p>Full Name: {prev.firstName} {prev.lastName}</p>
      <p>Email: {prev.email}</p>
      <hr />
    </>
  );
}
export default UserForm;