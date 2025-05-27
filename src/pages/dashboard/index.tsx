import { Box } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
    return (
        <Box m="20px">
            <Box  justifyContent="space-between" display="flex">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard"></Header>
            </Box>
        </Box>
        
    )
}

export default Dashboard;