import data from '../MovieData.json';

const Movies = data.MovieData;

function MovieList() {
  return (
    <>
      <div className="text-center p-1 m-1">
        <h1>Joel Hilton's Movie Collection</h1>
      </div>
      <table className="table m-2 p-2">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Category</th>
            <th>Edited</th>
          </tr>
        </thead>
        <tbody>
          {Movies.map((m) => (
            <tr>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Category}</td>
              <td>{m.Edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieList;
