import InputWithErrors from "./InputWithErrors"


const FormInput = ({ label, errorMessage, ...rest }) => {
    return (
        <label>
            <span className="text-sm">{label}</span>
            <br />
            <InputWithErrors
                errorMessage={errorMessage}
                {...rest}
            />
        </label>
    )
}

export default FormInput