import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import SubNavbar from "../SubNavbar/SubNavbar"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import "./Home.css"

export default function Home({products}) {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <About />
      <SubNavbar/>
      <ProductGrid products={products} />
      <Contact />
      <Footer />
    </div>
  )
}
