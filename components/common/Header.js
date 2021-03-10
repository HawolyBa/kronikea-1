// import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import Menu from "./Menu";

const Header = ({ menuRef, isOpen, openMenu }) => {
  return (
    <React.Fragment>
      <header id="main-header">
        <div id="menu-btn" onClick={openMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <h1>Kronikea</h1>
        {/* <SearchSharpIcon fontSize="medium" /> */}
      </header>
      <Menu isOpen={isOpen} menuRef={menuRef} />
    </React.Fragment>
  );
};

export default Header;
