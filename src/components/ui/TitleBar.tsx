import MarsIcon from "../../assets/MarsIcon.png";
import PageLink from "./PageLink";

const TitleLink = () => {
  return (
    <PageLink to="/">
      <div className="text-amber-600 w-[230px] text-2xl flex items-center justify-start gap-4">
        <img
          src={MarsIcon}
          alt="Mars Visualiser"
          style={{ width: "30px", height: "30px" }}
        />
        Mars Viewer
      </div>
    </PageLink>
  );
};

const TitleBar = () => {
  return (
    <nav className="bg-neutral-800 h-[50px] flex items-center pl-6 gap-8">
      <TitleLink />
      <PageLink to="/" title="Viewer" />
      <PageLink to="/about" title="About" />
    </nav>
  );
};

export default TitleBar;
