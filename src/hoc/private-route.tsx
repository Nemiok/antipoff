import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../redux-store/hooks';
import { AuthorizationStatus, PAGE_ROUTES } from '../utils/objects';
import { getAuthorizationStatus } from '../redux-store/reducers/common-reducer/selectors';

interface IPrivateRouteProps {
  children: JSX.Element;
}

export default function PrivateRoute({ children }: IPrivateRouteProps) {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const location = useLocation()

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={PAGE_ROUTES.LOGIN} state={{ from: location }} />
  );
}
