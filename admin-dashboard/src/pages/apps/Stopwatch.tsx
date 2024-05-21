import AdminSidebar from "../../components/AdminSidebar"

const formatTime=(timeInSeconds:number)=>{
    const hours=Math.floor(timeInSeconds/3600);
    const minutes=Math.floor((timeInSeconds%3600)/60);
    const seconds=timeInSeconds%60;

    const hoursInString=hours.toString().padStart(2,"0");
    const minutesInString=hours.toString().padStart(2,"0");
    const secondsInString=hours.toString().padStart(2,"0");

    return `${hoursInString}:${minutesInString}:{${secondsInString}`;

}

const Stopwatch = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard-app-container">
        <h1>Stopwatch</h1>
        <section>
            <div className="stopwatch">
                <h2>00:00:00</h2>
                <button>Start</button>
                <button>Reset</button>
            </div>
        </section>
      </main>
    </div>
  )
}

export default Stopwatch