import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockData";
import { tokens } from "../../theme";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "age", headerName: "Age" },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "zipCode", headerName: "ZipCode", flex: 1 },
    { field: "phone", headerName: "Phone" },

  ];
  return (
    <Box m="20px">
        <Header title="CONTACTS" subtitle="List of contacts for future reference"></Header>

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
        "&  .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${colors.grey[100]} !important`,
        },
      }}>
        <DataGrid showToolbar={true} rows={mockDataContacts} columns={columns} />
      </Box>
    </Box>
  );
};

export default Contacts;
