import { useState } from "react";
import fetch from "cross-fetch";
import SeriesList from "../../SeriesList/SeriesList";
import Loader from "../../Loader/Loader";
import "./Series.css";

function Series() {
  const [series, setSeries] = useState([]);
  const [seriesName, setSeriesName] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const onSeriesInputChange = (e) => {
    setSeriesName(e.target.value);
    setIsFetching(true);
    fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then((response) => response.json())
      .then((json) => {
        setSeries(json);
        setIsFetching(false);
      });
  };

  return (
    <div className="series-search">
      <div className="mb-3">
        <input value={seriesName} type="text" onChange={onSeriesInputChange} className="form-control form-control-lg" placeholder="Series name"/>
      </div>
      {!isFetching && series.length === 0 && seriesName.trim() === "" && (
        <div className="m-4 position-relative">
          <div className="position-absolute top-0 start-50 translate-middle">
            Please, enter series name to the search input.
          </div>
          
        </div>
      )}
      {!isFetching && series.length === 0 && seriesName.trim() !== "" && (
        <div className="m-4 position-relative">
          <div className="position-absolute top-0 start-50 translate-middle">
            No TV series with this name have been found.
          </div>
        </div>
      )}
      {isFetching && <Loader />}
      {!isFetching && <SeriesList list={series} />}
    </div>
  );
}

export default Series;
