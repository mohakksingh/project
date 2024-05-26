import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "react-hot-toast";

const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));
const Cart = lazy(() => import("./pages/Cart"));
const Shipping = lazy(() => import("./pages/Shipping"));
const Login = lazy(() => import("./pages/Login"));
const Orders = lazy(() => import("./pages/Orders"));
const OrderDetails = lazy(() => import("./pages/OrderDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Checkout= lazy(()=>import("./pages/Checkout"))

import Loader from "./components/loader";
import { Header } from "./components/Header";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { userExist, userNotExist } from "./redux/reducer/userReducer";
import { getUser } from "./redux/api/userAPI";
import { UserReducerInitialState } from "./types/reducer-types";
import ProtectedRoute from "./components/Protected-Route";


//admin-styles

const Dashboard = lazy(
  () => import("../../ecommerce-frontend/src/pages/admin/dashboard")
);
const Products = lazy(
  () => import("../../ecommerce-frontend/src/pages/admin/products")
);
const Customers = lazy(
  () => import("../../ecommerce-frontend/src/pages/admin/customers")
);
const Transaction = lazy(
  () => import("../../ecommerce-frontend/src/pages/admin/transaction")
);
const Barcharts = lazy(
  () => import("../../ecommerce-frontend/src/pages/admin/charts/barcharts")
);
const Piecharts = lazy(
  () => import("../../ecommerce-frontend/src/pages/admin/charts/piecharts")
);
const Linecharts = lazy(
  () => import("../../ecommerce-frontend/src/pages/admin/charts/linecharts")
);
const Coupon = lazy(
  () => import("../../ecommerce-frontend/src/pages/admin/apps/coupon")
);
const Stopwatch = lazy(
  () => import("../../ecommerce-frontend/src/pages/admin/apps/stopwatch")
);
const Toss = lazy(
  () => import("../../ecommerce-frontend/src/pages/admin/apps/toss")
);
const NewProduct = lazy(
  () => import("../../ecommerce-frontend/src/pages/admin/management/newproduct")
);
const ProductManagement = lazy(
  () =>
    import(
      "../../ecommerce-frontend/src/pages/admin/management/productmanagement"
    )
);
const TransactionManagement = lazy(
  () =>
    import(
      "../../ecommerce-frontend/src/pages/admin/management/transactionmanagement"
    )
);

const App = () => {

  const {user,loading} =useSelector((state:{userReducer:UserReducerInitialState})=>state.userReducer)

  const dispatch=useDispatch();

  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        const data=await getUser(user.uid)
        dispatch(userExist(data.user))
      }else{
        dispatch(userNotExist())
        
      }
    })
  },[])

  return loading? <Loader /> : (
    <Router>
      {/* Add a header here */}
      <Header user={user}/>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />

          {/* Not logged in Route */}
          <Route path="/login" element={<ProtectedRoute isAuthenticated={user?false:true}>
            <Login/></ProtectedRoute>} />

          {/* Logged In user Routes */}
          <Route element={<ProtectedRoute isAuthenticated={user?true:false}/>}>
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/order/:id" element={<OrderDetails />} />
            <Route path="/pay" element={<Checkout />} />
          </Route>
          {/* Admin Routes */}
          <Route
          element={
              <ProtectedRoute isAuthenticated={true} adminOnly={true} admin={user?.role==="admin"?true:false} />
          }
          >
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/product" element={<Products />} />
            <Route path="/admin/customer" element={<Customers />} />
            <Route path="/admin/transaction" element={<Transaction />} />
            {/* Charts */}
            <Route path="/admin/chart/bar" element={<Barcharts />} />
            <Route path="/admin/chart/pie" element={<Piecharts />} />
            <Route path="/admin/chart/line" element={<Linecharts />} />
            {/* Apps */}
            <Route path="/admin/app/coupon" element={<Coupon />} />
            <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
            <Route path="/admin/app/toss" element={<Toss />} />

            {/* Management */}
            <Route path="/admin/product/new" element={<NewProduct />} />

            <Route path="/admin/product/:id" element={<ProductManagement />} />

            <Route
              path="/admin/transaction/:id"
              element={<TransactionManagement />}
            />
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Suspense>
      <Toaster position="bottom-center"/>
    </Router>
  );
};

export default App;
