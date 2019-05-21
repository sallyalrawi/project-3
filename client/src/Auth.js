import React, { useEffect, useState } from 'react'
import app from './firebase'

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser)
  }, [])

  return (
    <AuthContext.Provider
      value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> 37beebfdd4adaee3a10ab45355c558cf0424b083
