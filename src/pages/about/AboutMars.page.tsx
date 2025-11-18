import { PageSection } from "@ui/common";

const MarsFeatureTitle = ({ children }: { children: React.ReactNode }) => {
  return <h6 className="text-xl pt-5">{children}</h6>;
};

function AboutMars() {
  return (
    <>
      <PageSection>
        <h4 className="text-3xl">Regions of Mars</h4>
        <p>
          Mars' regions are broken down into a number of categories, each with
          names that may seem familiar, but we don't use for Earth.
        </p>
        <MarsFeatureTitle>Terra</MarsFeatureTitle>
        <p>
          A major area of Mars. It roughly corresponds to a continent on Earth.
          It's a large region that can contain many other features.
        </p>
        <MarsFeatureTitle>Planitia</MarsFeatureTitle>
        <p>
          Planitiae are low-lying plains areas. Their names are usually derived
          from nearby albedo features, following rules laid out by the
          International Astronomical Union.
        </p>
        <MarsFeatureTitle>Planum</MarsFeatureTitle>
        <p>
          The Earth equivalent to the planum is the plateau. In contrast to
          planitiae, plana sit at higher altitudes. For this reason, for the
          most part, plana and planitia don't intersect - but you can see a
          couple of plana sitting inside a small planitia area to the East of
          the map!
        </p>
        <MarsFeatureTitle>Chaos</MarsFeatureTitle>
        <p>
          What a fantastic name! Chaos regions are named that way because the
          land there is chaotic - it's very uneven. During research, chaos areas
          were often grouped together with another feature called 'chasma'.
          Perhaps these areas were once great canyons that hosted Martian
          rivers? Hopefully future missions will give us the answer.
        </p>
      </PageSection>
    </>
  );
}

export default AboutMars;
