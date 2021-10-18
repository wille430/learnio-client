

const Form = ({buttonLabel, onFormSubmit, children, bottomComponents}) => {
    return (
        <section className="bg-purple rounded text-white shadow w-screen p-8 pb-4" style={{
            maxWidth: '400px'
        }}>
            <form className="flex flex-col space-y-2 pb-4" onSubmit={onFormSubmit}>
                {children}
                <div className="flex justify-center pt-2">
                    <button className="bg-green px-2 py-1 rounded text-black" type="submit">{buttonLabel}</button>
                </div>
            </form>
            {bottomComponents}
        </section>
    );
}

export default Form;