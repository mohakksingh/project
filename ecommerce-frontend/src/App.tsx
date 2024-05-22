import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { lazy,Suspense } from "react"

const Home= lazy(()=>import("./pages/Home"))
const Search= lazy(()=>import("./pages/Search"))
const Cart= lazy(()=>import("./pages/Cart"))
import Loader from "./components/loader"
import { Header } from "./components/Header"

//admin-styles

const Dashboard = lazy(() => import("../../ecommerce-frontend/src/pages/admin/dashboard"));
const Products = lazy(() => import("../../ecommerce-frontend/src/pages/admin/products"));
const Customers = lazy(() => import("../../ecommerce-frontend/src/pages/admin/customers"));
const Transaction = lazy(() => import("../../ecommerce-frontend/src/pages/admin/transaction"));
const Barcharts = lazy(() => import("../../ecommerce-frontend/src/pages/admin/charts/barcharts"));
const Piecharts = lazy(() => import("../../ecommerce-frontend/src/pages/admin/charts/piecharts"));
const Linecharts = lazy(() => import("../../ecommerce-frontend/src/pages/admin/charts/linecharts"));
const Coupon = lazy(() => import("../../ecommerce-frontend/src/pages/admin/apps/coupon"));
const Stopwatch = lazy(() => import("../../ecommerce-frontend/src/pages/admin/apps/stopwatch"));
const Toss = lazy(() => import("../../ecommerce-frontend/src/pages/admin/apps/toss"));
const NewProduct = lazy(() => import("../../ecommerce-frontend/src/pages/admin/management/newproduct"));
const ProductManagement = lazy(
    () => import("../../ecommerce-frontend/src/pages/admin/management/productmanagement")
);
const TransactionManagement = lazy(
    () => import("../../ecommerce-frontend/src/pages/admin/management/transactionmanagement")
);

const App = () => {
  return (
    <Router>
      {/* Add a header here */}
        <Header/>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />

          {/* Admin Routes */}
          <Route
              // element={
              //     <ProtectedRoute isAuthenticated={true} adminRoute={true} isAdmin={true} />
              // }
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

              <Route path="/admin/transaction/:id" element={<TransactionManagement />} />
          </Route>;
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App