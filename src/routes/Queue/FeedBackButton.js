import { Button } from '@mui/material'

const FeedBackButton = ({ icon, onClick, children }) => {
    return (
        <Button variant="contained" endIcon={icon} onClick={onClick}>
            {children}
        </Button>
    )
}

export default FeedBackButton