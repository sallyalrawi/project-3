// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
// eslint-disable-next-line no-unused-vars
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'

const PrivateRout = ({ component: RouteComponet, ...rest }) => {
  const { currentUser } = useContext(AuthContext)
  return (
    <Route
      {...rest}
      render={routeProps =>
        currentUser ? (
          <RouteComponet {...routeProps} />
        ) : (
          <Redirect to={'/login'} />
        )

      }
    />
  )
}
export default PrivateRout