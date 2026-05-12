import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AgentsPage from "./pages/AgentsPage";
import AgentDetailPage from "./pages/AgentDetailPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<AgentsPage />} />
        <Route path="/agents/:agentId" element={<AgentDetailPage />} />
      </Route>
    </Routes>
  );
}
