import TopBar from "./pages/global/TopBar";
import { ThemeProvider } from "@mui/material/styles";
import { ColorModeContext, useMode } from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import MySideBar from "./pages/global/MySideBar";
import Team from "./pages/team";
import Contacts from "./pages/contacts";
import Invoices from "./pages/invoice";
import Form from "./pages/form";

const App = () => {
  const { theme, colorMode } = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app"style={{ display: "flex" }}>
          <MySideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/team" element={<Team />}></Route>
              <Route path="/contacts" element={<Contacts />}></Route>
              <Route path="/invoices" element={<Invoices />}></Route>
              <Route path="/form" element={<Form />}></Route>
            </Routes>            
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
