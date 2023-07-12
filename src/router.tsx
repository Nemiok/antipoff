import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { lazy } from 'react'
import Layout from "./components/layout"
import { PAGE_ROUTES } from "./utils/objects"
import TeamPage from "./pages/team-page";

const CallsPage = lazy(() => import('./pages/team-page'));

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path={PAGE_ROUTES.TEAM} element={<TeamPage />} />
    <Route index element={<Navigate to={PAGE_ROUTES.TEAM} />} />

  </Route>
))

export default router