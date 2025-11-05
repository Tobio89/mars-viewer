import { Typography } from "@mui/material";
import {
  AccordionSection,
  PageContainer,
  PageSection,
} from "../../components/common";
import { BitmaskExplanation, BitmaskInteractive } from "./BitmaskExample";

const MarsFeatureTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography variant="h6" sx={{ paddingTop: "16px" }}>
      {children}
    </Typography>
  );
};

function AboutPage() {
  return (
    <PageContainer>
      <PageSection>
        <Typography variant="h4">Mars Viewer</Typography>
      </PageSection>
      <AccordionSection summary="What is Mars Viewer?">
        <Typography variant="body1">
          Mars Viewer is a portfolio project to demonstrate Deep Zoom-based
          visualisation, in particular, bit-masked tiled image visualisation. It
          has multiple layers of data visualization that, using different
          rendering techniques, show different aspects of our neighbouring
          planet.
        </Typography>
      </AccordionSection>
      <AccordionSection summary="About the Visualisation">
        <Typography variant="body1">
          This app uses a library called{" "}
          <a
            href="https://openseadragon.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenSeadragon
          </a>{" "}
          to provide an interface for exploring Deep Zoom Images. Deep Zoom
          Images are a way to view massive images such as map data, and it works
          by creating tiles of the full resolution image at several zoom levels,
          which are then fetched when they're visible on the screen.
          Specifically, this app uses a library called{" "}
          <a
            href="https://www.npmjs.com/package/@lunit/osd-react-renderer"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenSeadragon-React-Renderer
          </a>
          , which is a React wrapper for OpenSeadragon that I maintained when
          working for Lunit. This publicly available library also provides
          several types of overlay that can be used to draw additional data on
          top of the base tile. This app utilises a tooltip overlay, a DeckGL
          overlay, and a prototype bit-masked tiled image overlay, to render the
          data.
        </Typography>
      </AccordionSection>
      <AccordionSection summary="What is the Bit-Masked Rendering Technique?">
        <Typography variant="body1">
          It's a technique that allows us to store multiple indexed layers of
          pixel-based data in a single image file. Typically, a PNG is an image
          file that has 4 colour channels - red, green, blue, and alpha. The
          colour of each pixel in the image is stored as four 8-bit numbers, for
          example - 230, 126, 15, 255 - which makes the colour of this app's
          logo text. An 8-bit number just means the computer gives us eight 0s
          or 1s that represent a number, such as 11100110.
        </Typography>
        <BitmaskExplanation />
        <Typography variant="body1">
          Bit masking refers to a technique that lets us select individual
          values from a binary number. What if, instead of reading 11100110 as
          the number 230, we use it to mean 'this pixel belongs to any layer
          where the value is 1'? This technique is often used to store things
          like user's permissions in an application, but why not use it to
          control the colour of a pixel? By storing the data this way, a single
          pixel can belong to any and all layers, in any channel. Eight layers
          in four channels, means a pixel can belong to any combination of up to
          64 layers of data!
        </Typography>
        <BitmaskInteractive />
        <Typography variant="body1">
          The workflow I created allows the user to toggle on or off any of
          these layers. If the pixel has a 1 in a given position, and its toggle
          is on, that layer's configured colour is added into the final colour
          you can see on the screen. This technique has a number of useful
          benefits. High density data layers is one, but another benefit is that
          by using a tiled image for this, you can use tiles with the same
          resolution as the base layer, and match its level of detail. This is
          particularly useful in the biomedical field, where scanner resolutions
          are always increasing.
        </Typography>
      </AccordionSection>
      <PageSection>
        <Typography variant="h4">About Mars</Typography>
      </PageSection>
      <AccordionSection summary="Regions of Mars">
        <Typography variant="body1">
          Mars' regions are broken down into a number of categories, each with
          names that may seem familiar, but we don't use for Earth.
        </Typography>
        <MarsFeatureTitle>Terra</MarsFeatureTitle>
        <Typography variant="body1">
          A major area of Mars. It roughly corresponds to a continent on Earth.
          It's a large region that can contain many other features.
        </Typography>
        <MarsFeatureTitle>Planitia</MarsFeatureTitle>
        <Typography variant="body1">
          Planitiae are low-lying plains areas. Their names are usually derived
          from nearby albedo features, following rules laid out by the
          International Astronomical Union.
        </Typography>
        <MarsFeatureTitle>Planum</MarsFeatureTitle>
        <Typography variant="body1">
          The Earth equivalent to the planum is the plateau. In contrast to
          planitiae, plana sit at higher altitudes. For this reason, for the
          most part, plana and planitia don't intersect - but you can see a
          couple of plana sitting inside a small planitia area to the East of
          the map!
        </Typography>
        <MarsFeatureTitle>Chaos</MarsFeatureTitle>
        <Typography variant="body1">
          What a fantastic name! Chaos regions are named that way because the
          land there is chaotic - it's very uneven. During research, chaos areas
          were often grouped together with another feature called 'chasma'.
          Perhaps these areas were once great canyons that hosted Martian
          rivers? Hopefully future missions will give us the answer.
        </Typography>
      </AccordionSection>
      <PageSection>
        <Typography variant="h4">About the Developer</Typography>
      </PageSection>
      <AccordionSection summary="Hello!">
        <Typography variant="body1">
          My name is Toby, and I'm from the UK, and I currently live in South
          Korea. I am a Front End Engineer of about 5 years experience, with a
          specialisation in data visualization. I enjoy getting stuck into the
          finer details of programming, whether that's optimising the rendering
          of a React app, or writing shader code for WebGL. Aside from Front
          End, I can also write some Rust - check out{" "}
          <a
            href="https://github.com/Tobio89/rust-img-merge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rust-img-merge
          </a>
          , a utility I wrote for merging and splitting the tiles needed for
          this application.
        </Typography>
      </AccordionSection>
      <AccordionSection summary="Attribution">
        <Typography variant="body1">
          The sad face you might see if the metadata fails to load comes from here:<br />
          <a href="https://www.flaticon.com/free-icons/sad" title="sad icons">Sad icons created by Prashanth Rapolu 15 - Flaticon</a>
        </Typography>
      </AccordionSection>
    </PageContainer>
  );
}

export default AboutPage;
