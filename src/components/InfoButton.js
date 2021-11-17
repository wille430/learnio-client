import { IconButton, Tooltip } from "@mui/material"
import { FiInfo } from "react-icons/fi"

const InfoButton = ({ title }) => (
    <Tooltip title={title}>
        <IconButton>
            <FiInfo />
        </IconButton>
    </Tooltip>
)

export default InfoButton