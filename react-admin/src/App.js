import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import TopBar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";

import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";

import Form from "./scenes/form";

import Calendar from "./scenes/calendar";

// import Bar from "./scenes/bar";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";

// import FAQ from "./scenes/FAQ";
// import Geography from "./scenes/geography";










function App() {

  const [theme,colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">

          <Sidebar />
          <main className="content">

            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/team" element={<Team/>} />
      
              <Route path="/contacts" element={<Contacts/>} />
              
              <Route path="/invoices" element={<Invoices/>} />

              <Route path="/form" element={<Form />} />

              <Route path="/calendar" element={<Calendar/>} /> 
{/*               
              <Route path="/line" element={<Line/>} />
              <Route path="/bar" element={<Bar/>} />
              <Route path="/pie" element={<Pie/>} />
              <Route path="/FAQ" element={<FAQ/>} />
              <Route path="/geography" element={<Geography/>} />
*/}



            </Routes> 
          </main>

        </div>
      </ThemeProvider>
     
    </ ColorModeContext.Provider>  
    
  );
}

export default App;
