import AdminSidebar from "../../components/AdminSidebar"
import { LineChart } from "../../components/Charts"

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const LineCharts = () => {
    return (
        <div className="admin-container">
        <AdminSidebar/>
        <main className="chart-container">
        <h1>Line Charts</h1>
        <section>
          <LineChart
            data={[200, 444, 343, 556, 778, 455, 990,144,256,447,1000,1200]}
            label="Users"
            borderColor="rgb(53,162,255)"
            backgroundColor="rgba(53,162,255,0.5)"
            labels={months}
          />
          <h2>Active Users</h2>
        </section>
      </main>
      </div>
      )
}

export default LineCharts