import React from 'react'
import './App.css'
import HomePage from './pages/Home/HomePage'
import firebase from 'firebase/compat/app';

import { Route, Routes  } from 'react-router-dom'
import Shop from './pages/Shop/Shop'
import Header from './components/header/Header'
import Auth from './pages/Authentication/Auth'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

interface AppState {
  currentUser: firebase.User | null;
}

class App extends React.Component<{}, AppState> {

  constructor(props: {}) {
    super(props)

    this.state = {
      currentUser: null
    }
  }
  unSubscribeFromAuth = null

  componentDidMount(): void {
      auth.onAuthStateChanged(async userAuth => {
        //this.setState({ currentUser: user })
        if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);

          userRef?.onSnapshot(snapShot => {
            //console.log(snapShot.data())
            this.setState({
              currentUser: {
                ...(snapShot.data() as firebase.User), // Type assertion here
                id: snapShot.id,
              },
            }, ()=> {
              console.log(this.state)
            })
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

    const { currentUser } = this.state
    return (
      <>
        <div className="">
          <Header currentUser={currentUser} />
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

export default App
