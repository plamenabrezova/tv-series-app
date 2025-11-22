import { Link } from "react-router-dom";

const SeriesListItem = ({ series }) => {
  return (
    <Link
      className="list-group-item list-group-item-action bg-transparent"
      to={`/series/${series.show.id}`}
    >
      '{series.show.name}' {series.show.premiered?.split("-")[0] ?? "" }
    </Link>
  );
};

function SeriesList(props) {
  return (
    <div>
      <ul className="list-group list-group-flush">
        {props.list.map((series) => (
          <SeriesListItem key={series.show.id} series={series} />
        ))}
      </ul>
    </div>
  );
}

export default SeriesList;
