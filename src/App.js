import React from "react";
import './App.css';
import Tours from "./components/Tours";
import Loading from "./components/Loading";


const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = React.useState(true);
  const [tours, setTours] = React.useState([]);

  function deleteTour(id) {
    setTours(prevState => prevState.filter(tour => tour.id !== id));
  }
  async function getData() {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setTours(data);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  }
  React.useEffect(() => {
    getData();
  }, [])
  if(loading) {
    return(
      <>
        <Loading />
      </>
    )
  }

  if(!tours.length) {
    return(
      <div className="empty--page">
      <h3>no tours left</h3>
      <button className="refresh" onClick={getData}>refresh</button>
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Our Tours</h1>
      <div className="underline"></div>
      <Tours tours={tours} deleteTour={deleteTour} />
    </div>
  );
}

export default App;
