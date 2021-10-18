const InputWithErrors = ({ errorMessage, textStyle, ...rest }) => {
    return (
        <div>
            <input
                className="p-2 text-black rounded-sm w-full"
                {...rest}
            />
            <br />
            {
                errorMessage && <span className={textStyle || 'text-red-400'}>{errorMessage}</span>
            }
        </div>

    )
}

export default InputWithErrors