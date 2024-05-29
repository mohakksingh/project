import { Link } from "react-router-dom";
import ProductCard from "../components/Product-card";
import { useLatestProductsQuery } from "../redux/api/productAPI";
import toast from "react-hot-toast";
import { Skeleton } from "../components/loader";
import { CartItem } from "../types/types";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducer/cartReducer";
import Footer from "../components/Footer";

const Home = () => {
  const { data, isLoading, isError } = useLatestProductsQuery("");

  const dispatch=useDispatch();

  const addToCardHandler = (cartItem:CartItem) => {
    if(cartItem.stock < 1) return toast.error("Out of stock");

    dispatch(addToCart(cartItem));
    toast.success("Added to cart")
  };

  if (isError) toast.error("Cannot fetch the products");
  return (
    <>
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
        {isLoading ? (
          <Skeleton width="80vh" />
        ) : (
          data?.products.map((i) => (
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
        )}
      </main>
    </div> 
    <Footer /> 
    </> 
  );
};

export default Home;
