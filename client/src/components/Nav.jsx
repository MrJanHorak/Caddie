import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav className="nav-options">
        <h3>Enjoy Your Round {user.email}!</h3>
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
        <Link to="/"> Home </Link>
        <Link to="/blog"> Blog Post </Link>
        <Link to="/course"> Add Course </Link>
        <Link to="/tour"> PGA Tour Info </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav className="nav-options">
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/blog">Blog Post</Link>
    </nav>
  )

  return (
    <header className="nav-container">
      <Link to="/" className="nav-logo">
        <div>
          <h1>CADDIE</h1>
        </div>
      </Link>
      <div className="nav-bar">{user ? userOptions : publicOptions}</div>
    </header>
  )
}

export default Nav
