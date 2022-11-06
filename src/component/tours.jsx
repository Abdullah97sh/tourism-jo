import Places from "./places";

function Tours() {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4 m-4">
        {Places.map((e) => {
          return (
            <div className="col">
              <div className="card h-100">
                <img src={e.image} className="card-img-top w-100 h-100" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-center" style={{ color: "#3B6884" }}>{e.name}</h5>
                  {/* <p class="card-text">
                text
              </p> */}
                </div>
                {/* <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div> */}
              </div>
            </div>
          );
        })}      
      </div>
    </>
  );
}

export default Tours;
