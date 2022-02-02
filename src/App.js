import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Bannar from "./DashBoard/Banner/Bannar";
import DashboardHome from './DashBoard/DashboardHome/DashboardHome';
import AddStudent from "./Pages/AddStudent";
import EditStudentProfile from "./Pages/EditStudentProfile";
import GlobalSetting from "./Pages/GlobalSetting";
import Session from "./Pages/Session";
import StudentAdmission from "./Pages/StudentAdmission";
import Studentdetails from "./Pages/Studentdetails";
import Tearchers from "./Pages/Tearchers";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardHome />}> </Route>
          <Route path="/banner" element={<Bannar />}> </Route>
          <Route path="/global-settings" element={<GlobalSetting />}> </Route>
          <Route path="/session" element={<Session />}> </Route>
          <Route path="/new-student-admission" element={<StudentAdmission />}> </Route>
          <Route path="/add-student" element={<AddStudent />}> </Route>
          <Route path="/my-profile" element={<Studentdetails />}> </Route>
          <Route path="/edit-profile" element={<EditStudentProfile />}> </Route>
          <Route path="/tearchers" element={<Tearchers />}> </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
