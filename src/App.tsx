/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import './App.css'
import HomePage from './pages/Home/HomePage'
import firebase from 'firebase/compat/app';
import { connect } from 'react-redux'
import { Route, Routes  } from 'react-router-dom'
import Shop from './pages/Shop/Shop'
import Header from './components/header/Header'
import Auth from './pages/Authentication/Auth'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import { setCurrentUser } from './redux/user/user.actions'

interface AppState {
  currentUser: firebase.User | null;
}

class App extends React.Component<{}, AppState> {

  

  unSubscribeFromAuth = null

  componentDidMount(): void {
      const { setCurrentUser } = this.props;
      
      auth.onAuthStateChanged(async userAuth => {
        //this.setState({ currentUser: user })
        if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);

          userRef?.onSnapshot(snapShot => {
            //console.log(snapShot.data())
            this.props.setCurrentUser({
              currentUser: {
                ...(snapShot.data() as firebase.User), // Type assertion here
                id: snapShot.id,
              },
            }, /*()=> {
              console.log(this.state)
            }*/)
          })
        }
        this.setState({ currentUser: userAuth })
      })
  }

  componentWillUnmount(): void {
    if (this.unSubscribeFromAuth) {
      this.unSubscribeFromAuth();
    }
  }

  render(): React.ReactNode {

    return (
      <>
        <div className="">
          <Header />
          <Routes >
            <Route  path="/" element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />

            <Route path='/signin' element={<Auth />} />
          </Routes>
        </div>
      </>
    )
  }

}

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))

})

export default connect(null, mapDispatchToProps)(App)
