import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

function Buybooks() {
  const [service, setService] = useState([]);
  const [search, setSearch] = useState("");
  // console.log(search);
  const apiGet = () => {
    try {
      fetch("https://books-data.onrender.com/buyBooks")
        .then((res) => res.json())
        .then((data) => {
          setService(data);
          // console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apiGet();
  }, []);

  // var content = JSON.stringify(service, null, 2);
  return (
    <>
      <br />
      <div
        style={{
          position: "relative",
          textAlign: "center",
        }}
      >
        <div style={{ margin: "8rem" }}>
          <div style={{ position: "relative", textAlign: "center" }}>
            <h3>Search book name</h3>
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ padding: "0px 0rem 5rem 0px" }}
            />
          </div>
          <Grid
            container
            spacing={4}
            style={{ gap: "20px", justifyContent: "center" }}
          >
            {service
              .filter((content) => {
                return search.toLowerCase() === ""
                  ? content
                  : content.title.toLowerCase().includes(search.toLowerCase());
              })
              .map((content) => (
                <Grid
                  item
                  xs={12}
                  lg={3}
                  sm={6}
                  md={4}
                  style={{
                    margin: "0",
                    padding: "0",
                    display: "grid",
                  }}
                >
                  <Card
                    sx={{ maxWidth: 350 }}
                    lg={3}
                    xs={12}
                    sm={6}
                    md={4}
                    style={{
                      border: "1px solid",
                    }}
                  >
                    <CardMedia
                    // sx={{ height: 140 }}
                    // image={content.imageLink}
                    // title="image"
                    />
                    <CardContent
                      style={{
                        backgroundColor: "rgb(203 145 255)",
                        height: "10.5rem",
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{ fontWeight: "600", color: "white" }}
                      >
                        {content.title}
                        <hr
                          style={{ height: "2px", backgroundColor: "white" }}
                        ></hr>
                      </Typography>
                      <h3
                        variant="body2"
                        // color="text.secondary"
                        style={{ textAlign: "start", color: "rgb(65 65 65)" }}
                      >
                        Author :{content.author}
                        <br />
                        Country:{content.country}
                        <br />
                        language:{content.language}
                      </h3>
                    </CardContent>
                    <CardActions
                      style={{
                        justifyContent: "center",
                        backgroundColor: "#454141",
                      }}
                    >
                      <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        style={{
                          backgroundColor: "#fff",
                          color: "black",
                          // borderRadius: "5px",
                          textDecoration: "none",
                        }}
                      >
                        pages :<h4 style={{ margin: "0" }}>{content.pages}</h4>
                      </Button>

                      <Button
                        size="small"
                        style={{
                          backgroundColor: "#fff",
                          // borderRadius: "8px",
                        }}
                      >
                        <a
                          href={content.link}
                          style={{
                            textDecoration: "none",
                            color: "black",
                            padding: "0px 1rem",
                            fontWeight: 600,
                          }}
                        >
                          Learn More
                        </a>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </div>
      </div>
    </>
  );
}
export default Buybooks;
