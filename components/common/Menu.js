import Link from 'next/link'
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
import EmailIcon from '@material-ui/icons/Email';
import GavelIcon from '@material-ui/icons/Gavel';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Switch } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import FeedbackSharpIcon from '@material-ui/icons/FeedbackSharp';

const CustomSwitch = withStyles({
  switchBase: {
    color: red[300],
    '&$checked': {
      color: red[500],
    },
    '&$checked + $track': {
      backgroundColor: red[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

const Menu = ({ isOpen, menuRef }) => {

  return (
    <div ref={menuRef} className={isOpen ? 'open': 'closed'} id="side-menu">
      <div className="user-avatar">
        <AccountCircleIcon fontSize="large" /> <h2>Ravava</h2>
      </div>
       <ul id="menu-side-menu">
         <li><Link href="/"><a><HomeIcon/> Home</a></Link></li>
         <li><Link href="/"><a><ExploreIcon/> Explore</a></Link></li>
         <li><Link href="/"><a><SettingsIcon/> Settings</a></Link></li>
         <li><Link href="/"><a><FeedbackSharpIcon/> Feedback</a></Link></li>
         <li><Link href="/"><a><InfoIcon/> About</a></Link></li>
         <li><Link href="/"><a><EmailIcon/> Contact</a></Link></li>
         <li><Link href="/"><a><GavelIcon/> Privacy Policiy</a></Link></li>
       </ul>
       <div className="toggle-dark-mode">
         <span>Enable dark mode ?</span>
         <CustomSwitch/>
       </div>
    </div>
  )
}

export default Menu