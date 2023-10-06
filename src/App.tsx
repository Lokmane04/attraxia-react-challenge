import "./App.css";
import { Box } from "@mui/material";
import { ContextProvider } from "./state/Ctx";
import TopNavSupport from "./pages/TopNav/TopNavSupport";
import SupportForums from "./pages/Support/SupportForums";
import Table from "./pages/Table/Table";
import TopNavTickets from "./components/TopNavTickets/TopNavTickets";

const App = () => {
  return (
    <ContextProvider>
      <Box>
        <Box>
          <TopNavSupport />
          <SupportForums />
        </Box>
        <Box>
          <TopNavTickets /> <Table />
        </Box>
      </Box>
    </ContextProvider>
  );
};

export default App;
