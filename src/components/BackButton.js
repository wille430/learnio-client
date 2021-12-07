import { Link } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"

const BackButton = ({ to }) => {
    return (
        <Link to={to}>
            <FiArrowLeft />
        </Link>
    )
}

export default BackButton