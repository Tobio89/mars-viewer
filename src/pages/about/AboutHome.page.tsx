import { PageSection } from "@ui/common";

function AboutHome() {
  return (
    <PageSection>
      <p>
        Mars Viewer is a portfolio project to demonstrate Deep Zoom-based
        visualisation, in particular, bit-masked tiled image visualisation.
        <br />
        has multiple layers of data visualization that, using different
        rendering techniques, show different aspects of our neighbouring planet.
      </p>
      <p>
        It was developed by Tobias Sample, a Front End Engineer specialising in
        data visualisation using React.js
      </p>
      <p>Click on one of the links above to learn more!</p>
      <h6 className="text-2xl pt-10">Attribution</h6>
      <p className="text-sm">
        The sad face you might see if the metadata fails to load comes from
        here:{" "}
        <a href="https://www.flaticon.com/free-icons/sad" title="sad icons">
          Sad icons created by Prashanth Rapolu 15 - Flaticon
        </a>
      </p>
      <br />
      <p className="text-sm">
        All of the images used to create the Mars data come from here:{" "}
        <a
          href="https://commons.wikimedia.org/wiki/Category:Maps_of_Mars"
          title="Maps of Mars"
        >
          Wikimedia Commons: Maps of Mars
        </a>
      </p>
      <p className="text-sm">
        The base tile image is from the Tianwen-1 Mars mission. The annotations
        are files I created myself, based on images from Wikimedia.
      </p>
    </PageSection>
  );
}

export default AboutHome;
