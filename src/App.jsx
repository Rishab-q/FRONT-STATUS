import { Routes, Route, Link } from "react-router-dom"
import TestPage from "./pages/testpage"
import AdminPage1 from "./pages/statuspage"
import AuthPage from "./pages/Authentication"
import PublicStatusPage from "./pages/PublicStatusPage"

 function App() {
  return (
    <div className="p-4">
      

      <Routes>
        
        {/* Add more routes here */}
        <Route path="/admin/" element={<AuthPage />} />
        <Route path="/:org_slug/" element={<PublicStatusPage />} />
        <Route path="/admin/dashboard" element={<AdminPage1 />} />
      </Routes>
    </div>
  )
}

export default App
