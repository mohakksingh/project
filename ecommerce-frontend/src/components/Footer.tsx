import { server } from "../redux/store"

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-top">
      <div className="logo">
        <h2>LOGO</h2>
        <p>SLOGAN COMPANY</p>
      </div>
      <div className="footer-links">
        <div className="links-column">
          <a href="#">HOME</a>
          <a href="orders">ORDERS</a>
        </div>
        <div className="links-column">
          <a href="search">SEARCH</a>
        </div>
        <div className="links-column">
          <a href="cart">CART</a>
        </div>
        <div className="links-column">
          <a href="about">ABOUT US</a>
          <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=singhmohak999@gmail@gmail.com">CONTACT US</a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-rss"></i></a>
        <a href="#"><i className="fab fa-google-plus-g"></i></a>
        <a href="#"><i className="fab fa-flickr"></i></a>
      </div>
      <p>&copy; Copyright. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer