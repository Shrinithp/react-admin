import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { DataGrid, type GridRenderCellParams } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import { tokens } from "../../theme";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SecurityIcon from '@mui/icons-material/Security';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "age", headerName: "Age" },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "phone", headerName: "Phone" },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => {
        const { access } = params.row;
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius={"4px"}
            sx={{
              backgroundColor:
                access === "admin"
                  ? colors.greenAccent[600]
                  : colors.greenAccent[700],
            }}
          >
            {access === "admin" && <AdminPanelSettingsIcon/>}
            {access === "manager" && <SecurityIcon/>}
            {access === "user" && <LockOpenIcon/>}
            <Typography color={colors.grey[100]} >{access}</Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box m="20px">
        <Header title="Manager Team" subtitle="manage your team"></Header>

      <Box m="40px 0 0 0" height="75vh" 
      sx={{
        "& .MuiDataGrid-root":{
            border: "none"
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
          color: colors.greenAccent[300],
        },
        "& .MuiDataGrid-columnHeaders": {
            borderBottom: "none",
          backgroundColor: colors.blueAccent[700] + "!important",         
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.blueAccent[700],
        },
      }}>
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
