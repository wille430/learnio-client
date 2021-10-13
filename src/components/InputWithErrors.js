const InputWithErrors = ({ errorMessage, ...rest }) => {
    return (
        <div>
            <input
                className="p-2 text-black rounded-sm w-full"
                {...rest}
            />
            <br />
            {
                errorMessage && <span className="text-red-500">{errorMessage}</span>
            }
        </div>

    )
}

export default InputWithErrors