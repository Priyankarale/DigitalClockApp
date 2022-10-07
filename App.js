import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(new Date());
  console.log(time.toLocaleString())

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);

  }, [])

  return (
    <div className="date-time">
      <h1>{time.toLocaleString()}</h1>

    </div>
  )
}
export default App;
