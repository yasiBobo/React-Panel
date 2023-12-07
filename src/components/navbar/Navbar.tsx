import "./navbar.scss"
import UserImg from "./user.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Admin Panel</span>
      </div>

      <div className="icons">
        <img src="search.svg" alt="" className="icon" />
        <img src="app.svg" alt="" className="icon" />
        <img src="expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src={UserImg} alt="user" />
          <span>user</span>
        </div>
        <img src="setting.svg" alt="" />
      </div>
    </div>
  )
}

export default Navbar
