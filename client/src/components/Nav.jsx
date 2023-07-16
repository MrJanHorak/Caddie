import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  const userOptions = (
    <nav>
      {/* <h3>Welcome {user.email}!</h3> */}
      <Link onClick={handleLogOut} to="/">
        Sign Out
      </Link>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog Post</Link>
    </nav>
  )

  const publicOptions = (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/blog">Blog Post</Link>
      <Link to="/courses">Add Course</Link>
    </nav>
  )

  return (
    <header>
      <Link to="/">
        <div>
          <h1>Nav Text</h1>
        </div>
      </Link>
      {user ? userOptions : publicOptions}
    </header>
  )
}

export default Nav
