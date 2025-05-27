import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { DataGrid, type GridRenderCellParams } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData";
import { tokens } from "../../theme";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID"},
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "cost", headerName: "Cost", flex: 1, renderCell: (params: GridRenderCellParams) =>{
      return (
        <Typography color={colors.greenAccent[300]} variant="h6" mt="15px">
          ${params.row.cost}
        </Typography>
      )
    } },
    { field: "date", headerName: "Date", flex: 1 },
    { field: "phone", headerName: "Phone" },

  ];
  return (
    <Box m="20px">
        <Header title="INOVICES" subtitle="List of invoice balances"></Header>

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
        "$ .MuiDataGrid-checkboxInput": {
          color: `${colors.grey[100]} !important`,
        },
      }}>
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;
