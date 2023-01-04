import Grid from '@mui/material/Grid';



const Home = () => {



  return (
    <Grid container >
      <Grid item xs={2} md={2} className="sidebar">
        x
      </Grid>
      <Grid item xs={10} md={10} className="content__wrapper">
        <h1 style={{ marginBottom: "8px" }}>
          API References
        </h1>
        <p style={{ marginTop: "0px" }} className="opacity__70">
          Below is the API references for all our backend models routes.
        </p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1 style={{ marginBottom: "8px" }}>
          Course Requests
        </h1>
        <p style={{ marginTop: "0px" }} >
          <span> Prefix: </span> <span className="opacity__70">/API/Problems </span>
        </p>
        <br></br>
        <div>
          <div>
            <h3 style={{ marginBottom: "8px" }}>
              POST: <span style={{ fontWeight: "400" }}>/createCourseRequest</span>
            </h3>
            <p style={{ marginTop: "0px" }} className="opacity__70">
              Creates a new course request by the corporate trainee.
            </p>
            <p>
              Parameters: <span className="opacity__70">{"{"} ProblemVal, ProblemType, UserID, CourseID {"}"}</span>
            </p>
            <p>
              Response: <span className="opacity__70">None</span>
            </p>
          </div>
          <br></br>
          <br></br>
        </div>
        <div>
          <div>
            <h3 style={{ marginBottom: "8px" }}>
              GET: <span style={{ fontWeight: "400" }}>/getAllProblems</span>
            </h3>
            <p style={{ marginTop: "0px" }} className="opacity__70">
              Returns all the problems in the database.
            </p>
            <p>
              Parameters: <span className="opacity__70">None</span>
            </p>
            <p>
              Response: <span className="opacity__70">{"{"} Models.Problem {"}"}</span>
            </p>
          </div>
          <br></br>
          <br></br>
        </div>
        <div>
          <div>
            <h3 style={{ marginBottom: "8px" }}>
              POST: <span style={{ fontWeight: "400" }}>/updateProblemStatus</span>
            </h3>
            <p style={{ marginTop: "0px" }} className="opacity__70">
              Changes the status of a problem by the admin.
            </p>
            <p>
              Parameters: <span className="opacity__70">{"{"} ProblemID, NewStatus {"}"}</span>
            </p>
            <p>
              Response: <span className="opacity__70">None</span>
            </p>
          </div>
          <br></br>
          <br></br>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>







        
        <h1 style={{ marginBottom: "8px" }}>
          Users
        </h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>







        
        <h1 style={{ marginBottom: "8px" }}>
          Courses
        </h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>








        <h1 style={{ marginBottom: "8px" }}>
          Problems
        </h1>


      </Grid>
    </Grid>
  );
}

export default Home