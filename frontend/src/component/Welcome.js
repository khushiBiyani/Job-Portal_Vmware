import { Grid, Typography } from "@material-ui/core";
// import "./Welcome.css";

const Welcome = (props) => {
  const myStyle = {
    backgroundImage:
      "url('https://static.vecteezy.com/system/resources/previews/004/786/929/original/woman-sitting-with-laptop-concept-illustration-for-working-studying-education-work-from-home-healthy-lifestyle-can-use-for-backgrounds-infographics-hero-images-flat-illustration-vector.jpg')",
    height: "100vh",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginLeft: "-650px",
  };
  return (
    <div style={myStyle}>
      <Grid
        container
        item
        direction="column"
        alignItems="center"
        justify="center"
        style={{
          padding: "30px",
          minHeight: "93vh",
        }}
      >
        <Grid item>
          <Typography variant="h2">Welcome to Job Portal</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
