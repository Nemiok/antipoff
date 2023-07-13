import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { lazy } from 'react'
import Layout from "./components/layout"
import { PAGE_ROUTES } from "./utils/objects"
import PrivateRoute from "./hoc/private-route";
import LoginPage from "./pages/login-page";

const TeamPage = lazy(() => import('./pages/team-page'));

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>

    <Route path={PAGE_ROUTES.TEAM} element={
      <PrivateRoute>
        <TeamPage />
      </PrivateRoute>
    } />

    <Route element={<LoginPage />} path={PAGE_ROUTES.LOGIN} />

    <Route index element={<Navigate to={PAGE_ROUTES.TEAM} />} />

  </Route>
))

export default router