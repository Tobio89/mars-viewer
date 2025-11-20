import { PageSection } from "@ui/common";

function AboutDeveloper() {
  return (
    <>
      <PageSection>
        <h4 className="text-3xl pt-10">Hello!</h4>
        <p>
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
        </p>
        <h4 className="text-3xl pt-10">Career</h4>
        <p>
          As a Front End Engineer, I most recently worked for a company called
          Lunit that makes AI models that can diagnose cancer, and assess the
          effectiveness of medicine for cancer. <br />
          In the front end team, we made a viewer called Scope Viewer
          (All-In-One) that visualises the data the AI models produce!
        </p>
        <p>
          I was deeply involved in setting up a JSON-customisable sidebar for
          it, which allowed one viewer page to visualise data for various AI
          models, with toggles controlling a range of visualisation pipelines
          from that JSON file.
        </p>
        <p>
          I was also involved in writing some of the visualisation code,
          including implementing WebGL so we could render millions of cells to
          the screen without causing lag. The bit-masking technique that Mars
          Viewer uses is one I was working on while at Lunit, but it never made
          it into a full release.
        </p>
        <h4 className="text-3xl pt-10">Personal Interests</h4>
        <p>
          I like video games, enough to try making them every now and again.
        </p>
        <p>I also like bikes, Judo, and playing the guitar.</p>
        <p>Also, I quite like space {":)"}</p>
      </PageSection>
    </>
  );
}

export default AboutDeveloper;
