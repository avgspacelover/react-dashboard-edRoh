import {Box, Typography, useTheme} from "@mui/material";
import { tokens } from "../../theme";
import {DataGrid} from "@mui/x-data-grid";
import {mockDataInvoices} from "../../data/mockData";

import Header from "../../components/Header"

const Team= ()=> {

    const theme= useTheme();
    const colors= tokens(theme.paletter.mode);

    const columns= [
        {field: "id", headerName: "ID" },
        {field: "name", headerName: "Name", flex:1, cellClassName: "name--column-cell" },
        {field: "phone", headerName: "Phone Number", flex:1 },
        {field: "email", headerName: "Email", flex:1 },
        {field: "cost", headerName: "Cost", flex:1 , renderCell: (params)=> (
            <Typography color={colors.greenaccent[500]}>
                ${params.row.cost}
            </Typography>
        )},
        {field: "date", headerName: "Date", flex:1 },

    ]

    return (
        <Box m="20px">
            <Header title="Invoices" subtitle="List of Invoice balances" />
            <Box m="40px 0 0 0" height="75vh" sx={{ 
                "& .MuiDataGrid-root" :{
                    border: "none"
                },
                "& .MuiDataGrid-cell" :{
                    borderBottom: "none"
                },
                "& .name-column--cell" :{
                    color: colors.greenaccent[300]
                },
                "& .MuiDataGrid-columnHeaders" :{
                    backgroundColor: colors.blueaccent[700],
                    borderBottom: "none"
                },
                "& .MuiDataGrid-virtualScroller" :{
                    backgroundColor: colors.primary[400],
                },
                "& .MuiCheckbox-root" :{
                    color: `${colors.greenaccent[300]} !important`,
                }
            }}>
                <DataGrid
                    checkboxSelection
                    rows={mockDataInvoices}
                    columns={columns}
                />



            </Box>


        </Box>
    )
}



export default Team;