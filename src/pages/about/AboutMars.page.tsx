import { Typography } from "@mui/material";
import { PageSection } from "src/components/common";



const MarsFeatureTitle = ({ children }: { children: React.ReactNode }) => {
    return (
        <Typography variant="h6" sx={{ paddingTop: "16px" }}>
            {children}
        </Typography>
    );
};

function AboutMars() {
    return (
        <>
            <PageSection>
                <Typography variant="h4">
                    Regions of Mars
                </Typography>
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
            </PageSection>
        </>
    );
}

export default AboutMars;
