import { Link } from "react-router-dom"
import ProductCard from "../components/Product-card"
import { useLatestProductsQuery } from "../redux/api/productAPI"

const Home = () => {

  const {data} = useLatestProductsQuery("")

  const addToCardHandler=()=>{

  }
  return (
    <div className="home">
      <section></section>
      <h1>Latest Products 
        <Link to="/search" className="findmore">More</Link>
      </h1>

      <main>
        {
          data?.products.map(i=>(
            <ProductCard 
            key={i._id}
              productId={i._id}
              name={i.name}
              price={i.price}
              stock={i.stock}
              handler={addToCardHandler}
              photo={i.photo}
            />
          ))
        }
      </main>
    </div>
  )
}

export default Home