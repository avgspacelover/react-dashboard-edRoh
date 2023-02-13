import { useState } from "react";
import { ProSideBar, Menu, MenuItem } from "react-pro-sidebar";

import 'react-pro-sidebar/dist/css/styles.css';

import {Box,IconButton,Typography, useTheme} from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";



const Item= ({title,to,icon, selected,setSelected})=> {

    const theme= useTheme();
    const colors=tokens(theme.palette.mode);
    return (
        <MenuItem 
            active={selected===title}  
            style={{color: colors.grey[100]}} 
            onCLick={()=> setSelected(title)} 
            icon={icon}
        >
            <Typography>
                {title}
            </Typography>

            <Link to={to}/>
        </MenuItem>
    )
}

const Sidebar= ()=>{
    const theme= useTheme();
    const colors=tokens(theme.palette.mode);
    const [isCollapsed,setIsCollapsed] = useState(false);

    const [selected,setSelected]= useState("Dashboard");


    return (

        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`
                },
                "& .pro-icon-wrapper":{
                    backgroundColor: "transparent !important"
                },
                "$ pro-inner-item": {
                    padding: "5px 35px 5px 20px !important"
                },
                "$ pro-inner-item.active": {
                    color: "#6870fa !important",

                },
                "$ pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
            }}
        >

        <ProSideBar collapsed= {isCollapsed}>
            <Menu iconShape="square">

                {/* LOGO & MENU ICON */}

                <MenuItem 
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    icon={isCollapsed? <MenuOutlinedIcon/> : undefined}
                    style={{
                        margin: "10px 0 20px 0",
                        color: colors.grey[100],
                    }}
                >
                    {!isCollapsed && (
                        <Box 
                            display="flex" 
                            justifyContent="space-between" 
                            alignItems="center"
                            ml= "15px"
                        >
                            <Typography 
                                variant="h3"
                                color= {colors.grey[100]}
                            >
                                ANALYTICS
                            </Typography>
                            <IconButton
                                onClick={() => setIsCollapsed(!isCollapsed)}           
                            >
                                <MenuOutlinedIcon />


                            </IconButton>
                        </Box>
                    )}
                </MenuItem>
            </Menu>

        </ProSideBar>
        {/* USER*/}

        {/*

            {!isCollapsed && (

                <Box mb= "25px">
                    <Box display="flex" justifyContent="center" alignItems="center" >
                        <img 
                            alt="profile-user"
                            width="100px"
                            height="100px"
                            src={`../../assets/user.png`}
                            style={{cursor: "pointer", borderRadius:"50%"}}
                        />
                    </Box>

                    <Box>
                        <Typography 
                            variant="h2" 
                            color={colors.grey[100]} 
                            fontWeight="bold" 
                            sx={{m: "10px 0 0 0"}} 
                        > 
                            
                            Antariksh
                        
                        </Typography>
                        <Typography
                            variant="h2" 
                            color={colors.greenaccent[500]} 


                        
                        > 
                            SDE
                        </Typography>


                        
            )
                
            }

        */}

            {/* Menu Items */}
            <Box paddingLeft={isCollapsed? undefined: "10%"}>
                <Item
                    title="Dashboard"
                    to="/"
                    icon={<HomeOutlinedIcon />}
                    selected={selected}
                    setIsSelected={setSelected}
                />

                <Typography 
                    
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{m: "15px 0 5px 20px"}}
                
                >
                    Pages
                </Typography>
                <Item
                    title="Manage Teams"
                    to="/team"
                    icon={<PeopleOutlinedIcon />}
                    selected={selected}
                    setIsSelected={setSelected}
                />
                <Item
                    title="Contacts"
                    to="/contacts"
                    icon={<ContactsOutlinedIcon />}
                    selected={selected}
                    setIsSelected={setSelected}
                />
                <Item
                    title="Invoice Balances"
                    to="/invoices"
                    icon={<ReceiptOutlinedIcon />}
                    selected={selected}
                    setIsSelected={setSelected}
                />
                <Typography 
                    
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{m: "15px 0 5px 20px"}}
                
                >
                    Pages
                </Typography>
                <Item
                    title="Profile Form"
                    to="/form"
                    icon={<PersonOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title="Calendar"
                    to="/calendar"
                    icon={<CalendarTodayOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title="FAQ"
                    to="/FAQ"
                    icon={<HelpOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Typography 
                    
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{m: "15px 0 5px 20px"}}
                
                >
                    Charts
                </Typography>
                <Item
                    title="Pie Chart"
                    to="/pie"
                    icon={<PieChartOutlineOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title="Line Chart"
                    to="/line"
                    icon={<TimelineOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />

                <Item
                    title="Bar Chart"
                    to="/bar"
                    icon={<BarChartOutlinedIcon />}
                    selected={selected}
                    setIsSelected={setSelected}
                />
                <Item
                    title="Geography"
                    to="/geography"
                    icon={<MapOutlinedIcon />}
                    selected={selected}
                    setIsSelected={setSelected}
                />
            </Box>

        </Box>
    )
}

export default Sidebar;

