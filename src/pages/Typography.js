import React from "react";
import { Typography } from "@material-ui/core";
function Create() {
  return (
    <div>
      <Typography color="primary" align="center" variant="h1">
        This is a Typography Page
      </Typography>
      <hr />
      <Typography variant="h2" gutterBottom color="secondary">
        This is a Typography Page
      </Typography>
      <hr />
      <Typography variant="h3" color="textSecondary">
        This is a Typography Page
      </Typography>
      <hr />
      <Typography variant="h4" color="textPrimary">
        This is a Typography Page
      </Typography>
      <hr />
      <Typography variant="h5">This is a Typography Page</Typography>
      <hr />
      <Typography variant="h6">This is a Typography Page</Typography>
      <Typography noWrap variant="h6">
        Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem
        ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit amet
        consectetur adipisicing elit. Aut maiores, inventore earum eligendi
        asperiores quas.
      </Typography>
    </div>
  );
}
export default Create;
