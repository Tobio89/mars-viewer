import { Box, Typography } from "@mui/material"

const ErrorIndicator = () => {
    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "row",
                height: "100%",
                width: "100%",
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>

                <img src="/sad-white.png" style={{ height: '120px' }} />
                <Typography variant="h5">
                    Error! Failed to load Metadata
                </Typography>
            </Box>
        </Box>)
}

export default ErrorIndicator