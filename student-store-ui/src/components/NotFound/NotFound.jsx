import Navbar from "../Navbar/Navbar"
import SubNavbar from "../SubNavbar/SubNavbar"
import Footer from "../Footer/Footer"
import "./NotFound.css"

export default function NotFound({
  user,
  activeCategory,
  setActiveCategory,
  handleOnSearchInputChange,
  searchInputValue,
}) {
  return (
    <div className="NotFound">

      <div className="cta">
        <h1>404</h1>
        <p>That page does not exist</p>
      </div>
    </div>
  )
}