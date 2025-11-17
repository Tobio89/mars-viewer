import { Typography } from "@mui/material";
import { PageSection } from "src/components/ui/common";

function AboutHome() {
  return (
    <PageSection>
      <Typography variant="body1">
        Mars Viewer is a portfolio project to demonstrate Deep Zoom-based
        visualisation, in particular, bit-masked tiled image visualisation.
        <br />
        has multiple layers of data visualization that, using different
        rendering techniques, show different aspects of our neighbouring planet.
      </Typography>
      <Typography>
        It was developed by Tobias Sample, a Front End Engineer specialising in
        data visualisation using React.js
      </Typography>
      <Typography>Click on one of the links above to learn more!</Typography>
      <Typography sx={{ paddingTop: "40px" }} variant="h6">
        Attribution
      </Typography>
      <Typography variant="body2">
        The sad face you might see if the metadata fails to load comes from
        here:{" "}
        <a href="https://www.flaticon.com/free-icons/sad" title="sad icons">
          Sad icons created by Prashanth Rapolu 15 - Flaticon
        </a>
      </Typography>
      <br />
      <Typography variant="body2">
        All of the images used to create the Mars data come from here:{" "}
        <a
          href="https://commons.wikimedia.org/wiki/Category:Maps_of_Mars"
          title="Maps of Mars"
        >
          Wikimedia Commons: Maps of Mars
        </a>
        <br />
        The base tile image is from the Tianwen-1 Mars mission. The annotations
        are files I created myself, based on images from Wikimedia.
      </Typography>
    </PageSection>
  );
}

export default AboutHome;
