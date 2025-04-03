import { ReactNode } from "react";

import "./Wrapper.css";

interface WrapperProps {
  children: ReactNode;
}

function Wrapper({ children }: WrapperProps) {
  return (
    <div>
      <div id="header-wrapper">6figures</div>
      <div id="wrapper">
        <div id="inner-wrapper">{children}</div>
        <div id="footer-wrapper">
          Contact us{" "}
          <a href="mailto:6six.figures.noreply@gmail.com">@6figures</a>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
