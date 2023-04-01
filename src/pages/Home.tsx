import React from 'react';

function Home() {
  return (
    <>
      <div className="text-center p-1 m-1">
        <h1>Welcome to Joel Hilton's Collection!</h1>
      </div>
      <div className="text-center">
        <img src="./JoelHiltonHeadshot.jpg" alt="Joel Hilton" />
        <h3 className="p-2 m-2">
          This website includes a collection of Joel Hilton's favorite movies.
          This website uses react to dynamically include the information for
          each movie in the provided JSON file. I have also used the package
          "react router dom" to create links to each page of my website. I have
          also included a link to Joel's podcasts on the podcast page.
        </h3>
      </div>
    </>
  );
}

export default Home;
