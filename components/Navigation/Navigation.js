import { useState } from "react";
import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";

const Navigation = () => {
  const [sideDrawer, setSideDrawer] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawer((prevState) => !prevState);
  };

  const backDropClickHandler = () => {
    setSideDrawer(false);
  };

  let backdropJSX = null;

  if (sideDrawer) {
    backdropJSX = <Backdrop backDropClickHandler={backDropClickHandler} />;
  }

  return (
    <>
      <nav>
        <Toolbar drawerToggleClickHandler={drawerToggleClickHandler} />
        <SideDrawer
          isOpen={sideDrawer}
          closeSideDrawer={backDropClickHandler}
        />
      </nav>
      {backdropJSX}
    </>
  );
};

export default Navigation;
