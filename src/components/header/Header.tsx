import './header.scss'

import { Link } from 'react-router-dom'
import firebase from 'firebase/compat/app';
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import Logo from '../../assets/crown.svg'

type HeaderProps = {
  currentUser: firebase.User | null
}

// eslint-disable-next-line react-refresh/only-export-components
const Header: React.FC<HeaderProps> = ({currentUser}) => {
  return (
    <div className='header'>
      <Link to='/'>
        <img src={Logo} alt="Your SVG" className='logo' />
      </Link>
      <div className="options">
        <Link to='/shop' className='option'>SHOP</Link>
        <Link to='/contact' className='option'>CONTACT</Link>

        {
          currentUser ? (
            <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>
          ): (
            <Link to='/signin' className='option'>SIGN IN</Link>
          )
        }

      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps)(Header)
