import { useState } from "react"
import Loader from "react-loader-spinner"

const AsyncButton = ({ children, onClick, ...props }) => {

    const [loading, setLoading] = useState(false)

    const handleClick = async (e) => {
        e.preventDefault()
        setLoading(true)

        if (onClick) {
            await onClick(e)
        }

        setLoading(false)
    }

    return (
        <button onClick={(e) => {
            if (!loading) {
                handleClick(e)
            }
        }} {...props}>
            {loading ? <div>
                <Loader
                    type="TailSpin"
                    height="15px"
                    width="15px"
                    color="white"
                />
            </div> : children}
        </button>
    )
}

export default AsyncButton