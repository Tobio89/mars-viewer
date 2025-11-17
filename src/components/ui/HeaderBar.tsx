import { AppBar, Box, styled, Typography } from "@mui/material";
import PageLink from "./PageLink";

import { app_colours } from "../../consts";

import MarsIcon from "../assets/MarsIcon.png";

const HeaderSection = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "20px",
  padding: "8px",
});

const HeaderBarContainer = styled(AppBar)({
  backgroundColor: app_colours.onyx,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  height: "50px",
  gap: 2,
});

function HeaderBar() {
  return (
    <HeaderBarContainer position="static">
      <PageLink to="/">
        <HeaderSection sx={{ width: "280px", paddingLeft: "16px" }}>
          <img
            src={MarsIcon}
            alt="Mars Visualiser"
            style={{ width: "30px", height: "30px" }}
          />
          <Typography variant="h5" sx={{ color: app_colours.marsOrange }}>
            Mars Viewer
          </Typography>
        </HeaderSection>
      </PageLink>
      <HeaderSection>
        <PageLink to="/" title="Viewer" />
        <PageLink to="/about" title="About" />
      </HeaderSection>
    </HeaderBarContainer>
  );
}

export default HeaderBar;
