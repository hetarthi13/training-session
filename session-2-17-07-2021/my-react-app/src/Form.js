
import useInput from "./useInput";

const Form = () => {
    const email = useInput("");
    const password = useInput("");

    const submitForm = (event) => {
        event.preventDefault();
        console.log("email", email.value);
        console.log("password", password.value);
    };

    return (
        <>
            <div className=" container col-6">
                <form onSubmit={submitForm}>
                    <input placeholder="Email" {...email} />
                    <br />
                    <br />

                    <input placeholder="Password" type="password" {...password} />
                    <br />
                    <br />

                    <button className="btn-danger" type="submit"> Submit</button>

                </form>
            </div>
        </>
    );
};

export default Form;
