import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

function SingleSeriesInfo(props) {
  const decodeSummary = (apiSummaryResponse) => {
    const decodedResponse = apiSummaryResponse.replace(
      /\\u([0-9a-fA-F]{4})/g,
      (match, hex) => String.fromCharCode(parseInt(hex, 16))
    );
    return decodedResponse.replace(/^<p>|<\/p>$/gi, "");
  }

  return (
    <div>
      {props.show === null && <Loader />}
      {props.show !== null && (
        <div className="d-flex justify-content-between g-1 py-1">
          <div className="col-5">
            <img
              src={props.show.image?.original}
              alt="missing poster for the series"
              className="d-block rounded"
              width="100%"
            />
          </div>
          <div className="col-4 col-sm-8 col-lg-6">
            <div>
              <h4 className="fs-1 pb-2"><b>{props.show.name}</b></h4>
            </div>
            {props.show.rating.average && <p className="fs-3">&#x2728; <b>Rating</b> - {props.show.rating.average}</p>}
            {props.show.premiered && <p className="fs-3">&#x1f3ac; <b>Premiered</b> - {props.show.premiered}</p>}
            {props.show._embedded.episodes.length && <p className="fs-3">&#x1F4FC; <b>Episodes</b> - {props.show._embedded.episodes.length}</p>}
            {props.show.summary && <p className="fs-3">&#x1F4C4; <b>Summary</b> - {decodeSummary(props.show.summary)} </p>}
          </div>
          <div className="">
            <button type="button" className="btn fs-3">
              <Link
                className="list-group-item list-group-item-action bg-transparent"
                to={`/`}
              >
                &#x2715;
              </Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleSeriesInfo;
