import { Typography } from "@mui/material";

import { PageSection } from "@ui/common";

function AboutDeveloper() {
  return (
    <>
      <PageSection>
        <Typography variant="h4" sx={{ paddingTop: "20px" }}>
          Hello!
        </Typography>
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
        <Typography variant="h4" sx={{ paddingTop: "20px" }}>
          Career
        </Typography>
        <Typography variant="body1">
          As a Front End Engineer, I most recently worked for a company called
          Lunit that makes AI models that can diagnose cancer, and assess the
          effectiveness of medicine for cancer. <br />
          In the front end team, we made a viewer called Scope Viewer
          (All-In-One) that visualises the data the AI models produce!
        </Typography>
        <Typography>
          I was deeply involved in setting up a JSON-customisable sidebar for
          it, which allowed one viewer page to visualise data for various AI
          models, with toggles controlling a range of visualisation pipelines
          from that JSON file.
        </Typography>
        <Typography>
          I was also involved in writing some of the visualisation code,
          including implementing WebGL so we could render millions of cells to
          the screen without causing lag. The bit-masking technique that Mars
          Viewer uses is one I was working on while at Lunit, but it never made
          it into a full release.
        </Typography>
        <Typography variant="h4" sx={{ paddingTop: "20px" }}>
          Personal Interests
        </Typography>
        <Typography variant="body1">
          I like video games, enough to try making them every now and again.
        </Typography>
        <Typography>
          I also like bikes, Judo, and playing the guitar.
        </Typography>
        <Typography>Also, I quite like space {":)"}</Typography>
      </PageSection>
    </>
  );
}

export default AboutDeveloper;
