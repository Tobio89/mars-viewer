import { Box, Typography } from "@mui/material"


const Spinner = () => {
    return <span className="loader" />
}

const LoadingIndicator = ({ title = 'Loading...' }: { title?: string }) => {
    return (
        <Box sx={{
            position: "fixed", top: 0, left: 0, width: '100%', height: '100vh', zIndex: 999999,
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.4)',
            pointerEvents: 'none'
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: "24px"
            }}>

                <Spinner />
                <Typography>
                    {title}
                </Typography>
            </Box>
        </Box>
    )
}

export default LoadingIndicator