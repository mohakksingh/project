import { Link } from "react-router-dom"
import ProductCard from "../components/Product-card"

const Home = () => {

  const addToCardHandler=()=>{

  }
  return (
    <div className="home">
      <section></section>
      <h1>Latest Products 
        <Link to="/search" className="findmore">More</Link>
      </h1>

      <main>
        <ProductCard productId="esklfjsf" name="Macbook" price={344} stock={32}  handler={addToCardHandler} photo="https://m.media-amazon.com/images/I/71TPda7cwUL._SX522_.jpg"/>
      </main>
    </div>
  )
}

export default Home