import {Box, useTheme} from "@mui/material";
import { tokens } from "../../theme";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import {mockDataContacts} from "../../data/mockData";


import Header from "../../components/Header";


const Contacts= ()=> {

    const theme= useTheme();
    const colors= tokens(theme.paletter.mode);

    const columns= [
        {field: "id", headerName: "ID", flex: 0.5 },
        {field: "registrarId", headerName: "Registrar ID", flex: 0.5 },
        
        {field: "name", headerName: "Name", flex:1, cellClassName: "name--column-cell" },
        {field: "age", headerName: "Age",type: "number", headerAlign: "left",align: "left" },
        {field: "phone", headerName: "Phone Number", flex:1 },
        {field: "email", headerName: "Email", flex:1 },
        {field: "address", headerName: "Address", flex:1 },
        {field: "city", headerName: "City", flex:1 },
        {field: "zipCode", headerName: "ZipCode", flex:1 },

        // {field: "access", headerName: "Access Level", flex:1, renderCell: ({ row: {access}})=> {
        //     return (
        //         <Box
        //             width="60%"
        //             m="0auto"
        //             p="5px"
        //             display="flex"
        //             justifyContent="center"
        //             backgroundColor={
        //                 access=== "admin"
        //                 ?colors.greenaccent[600]: colors.greenaccent[700]
        //             }
        //             borderRadius="4px"
        //         >

        //             {access==="admin" && <AdminPanelSettingsOutlinedIcon /> }
        //             {access==="manager" && <SecurityOutlinedIcon /> }
        //             {access==="user" && <LockOpenOutlinedIcon /> }

        //             <Typography color={colors.grey[100]}  sx={{ml: "5px"}}>
        //                 {access}
        //             </Typography>

        //         </Box>
        //     )
        // } },




    ]

    return (
        <Box m="20px">
            <Header title="CONTACTS" subtitle="List of Contacts" />
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
                "& .MuiDataGrid-footerContainer" :{
                    borderTop: "none",
                    backgroundColor: colors.blueaccent[700],
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text" :{
                    color: `${colors.greenaccent[300]} !important`,

                },
            }}>
                <DataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    components={{Toolbar: GridToolbar}}
                />



            </Box>


        </Box>
    )
}



export default Contacts;