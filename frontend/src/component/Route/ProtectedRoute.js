import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";


const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { loading, isAuthenticated } = useSelector(state => state.user);

  return (
    <Fragment>
      {!loading && (
        
         
        <Route
          {...rest}
          render={props => {
            if (isAuthenticated === false) {
              return <Navigate to='/login'  />;
            }

            
            return <Element {...props} />;
          }
        }
        />
       
       
      )}
    </Fragment>
  );
};

export default ProtectedRoute;
