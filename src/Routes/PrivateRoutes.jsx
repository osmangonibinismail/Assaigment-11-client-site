import { useContext } from "react"
import { AuthContext } from "../Pages/Provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const Location = useLocation()
    if (loading) {
        return <div className="text-center mt-20 mb-20">
            <span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-accent"></span>
            <span className="loading loading-spinner text-neutral"></span>
            <span className="loading loading-spinner text-info"></span>
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span>
        </div>
    }
    if (user) {
        return children;
    }

    return <Navigate to="/login" state={location.pathname} replace={true}></Navigate>
}

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node
}
