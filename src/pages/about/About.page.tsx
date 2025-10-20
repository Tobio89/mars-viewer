import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { PageContainer, PageSection } from "../../components/common";
import { BitmaskExplanation, BitmaskInteractive } from "./BitmaskExample";

function AboutPage() {
  return (
    <PageContainer>
      <PageSection>
        <Typography variant="body1">
          Hi! My name is Toby, and I'm a Front End Engineer, specialising in
          data visualization with React and TypeScript. This is a portfolio
          project to demonstrate my skills with data visualization. You can find
          out more about this app, and Mars, in the sections below.
        </Typography>
      </PageSection>
      <PageSection>
        <Accordion>
          <AccordionSummary>
            <Typography variant="h5">What is Mars Viewer?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              Mars Viewer is a portfolio project to demonstrate Deep Zoom-based
              visualisation, in particular, bit-masked tiled image
              visualisation. It has multiple layers of data visualization that,
              using different rendering techniques, show different aspects of
              our neighbouring planet.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </PageSection>

      <PageSection>
        <Accordion>
          <AccordionSummary>
            <Typography variant="h5">About the Visualisation</Typography>
          </AccordionSummary>
          <AccordionDetails>
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
              Images are a way to view massive images such as map data, and it
              works by creating tiles of the full resolution image at several
              zoom levels, which are then fetched when they're visible on the
              screen. Specifically, this app uses a library called{" "}
              <a
                href="https://www.npmjs.com/package/@lunit/osd-react-renderer"
                target="_blank"
                rel="noopener noreferrer"
              >
                OpenSeadragon-React-Renderer
              </a>
              , which is a React wrapper for OpenSeadragon that I maintained
              when working for Lunit. This publicly available library also
              provides several types of overlay that can be used to draw
              additional data on top of the base tile.
            </Typography>
            <Typography variant="body1">
              This app utilises a tooltip overlay, a DeckGL overlay, and a
              prototype bit-masked tiled image overlay, to render the data.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </PageSection>

      <PageSection>
        <Accordion>
          <AccordionSummary>
            <Typography variant="h6">
              What is the Bit-Masked Rendering Technique?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              It's a technique that allows us to store multiple indexed layers
              of pixel-based data in a single image file. Typically, a PNG is an
              image file that has 4 colour channels - red, green, blue, and
              alpha. The colour of each pixel in the image is stored as four
              8-bit numbers, for example - 230, 126, 15, 255 - which makes the
              colour of this app's logo text. An 8-bit number just means the
              computer gives us eight 0s or 1s that represent a number, such as
              11100110.
            </Typography>
            <BitmaskExplanation />
            <Typography variant="body1">
              Bit masking refers to a technique that lets us select individual
              values from a binary number. What if, instead of reading 11100110
              as the number 230, we use it to mean 'this pixel belongs to any
              layer where the value is 1'? This technique is often used to store
              things like user's permissions in an application, but why not use
              it to control the colour of a pixel? By storing the data this way,
              a single pixel can belong to any and all layers, in any channel.
              Eight layers in four channels, means a pixel can belong to any
              combination of up to 64 layers of data!
            </Typography>
            <BitmaskInteractive />
            <Typography variant="body1">
              The workflow I created allows the user to toggle on or off any of
              these layers. If the pixel has a 1 in a given position, and its
              toggle is on, that layer's configured colour is added into the
              final colour you can see on the screen. This technique has a
              number of useful benefits. High density data layers is one, but
              another benefit is that by using a tiled image for this, you can
              use tiles with the same resolution as the base layer, and match
              its level of detail. This is particularly useful in the biomedical
              field, where scanner resolutions are always increasing.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </PageSection>
      <PageSection>
        <Typography variant="h5">About Mars</Typography>
        <Typography variant="body1">
          Let's be honest, it's a bit of a fixer-upper, innit?
        </Typography>
      </PageSection>
      <PageSection>
        <Typography variant="h5">About the Developer</Typography>
        <Typography variant="body1">Wizard</Typography>
      </PageSection>
    </PageContainer>
  );
}

export default AboutPage;
