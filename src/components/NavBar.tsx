import { Link } from "react-router-dom"
import account from "../assets/account.svg"
import '../styles/navbar.css'
import '../styles/general.css'

export const NavBar = () => {
  return (
    <header className="flex flex-row  h-20 justify-between main-container items-center">

      <Link to={"/"} className="logoText" > MNTM</Link>

      <div className="flex flex-row justify-around">
        <Link to={"equipment"} className="link px-2">Equipments</Link>
        <Link to={"aboutUs"} className="link px-2">About Us</Link>
        <Link to={"blog"} className="link px-2">Blog</Link>
      </div>

      <button className="flex flex-row items-center">
        <img src={account} className="pr-1" />
        <p className="account">Account</p>
      </button>
    </header>
  )
}
