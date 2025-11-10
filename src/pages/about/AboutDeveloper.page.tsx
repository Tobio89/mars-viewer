import { Typography } from "@mui/material";
import { PageSection } from "src/components/common";


function AboutDeveloper() {
    return (
        <>
            <PageSection>
                <Typography variant="h4">
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
            </PageSection>
        </>
    );
}

export default AboutDeveloper;
