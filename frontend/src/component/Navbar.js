import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import isAuth, { userType } from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
// const Navbar = (props) => {
//   const classes = useStyles();
//   let history = useHistory();

//   const handleClick = (location) => {
//     console.log(location);
//     history.push(location);
//   };

//   return (
//     <AppBar position="fixed" style={{ backgroundColor: '#333' }}>
//       <Toolbar>
//         <Typography variant="h6" className={classes.title}>
//           JOB BOARD
//         </Typography>
//         {isAuth() ? (
//           userType() === "recruiter" ? (
//             // ... (unchanged)
//           ) : (
//             // ... (unchanged)
//           )
//         ) : (
//           // ... (unchanged)
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };
const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  return (
    <AppBar position="fixed" style={{ backgroundColor: '#9002ec' }}>
      <Toolbar>
        <Typography variant="h6" className={classes.title} style={{ fontFamily: '', fontStyle: 'sans-serif', fontWeight: 'bold', color: 'white' }}>
          JOB BOARD
        </Typography>
        {isAuth() ? (
          userType() === "recruiter" ? (
            <>
              <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => handleClick("/addjob")}>
                Add Jobs
              </Button>
              <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                My Jobs
              </Button>
              <Button color="inherit" onClick={() => handleClick("/employees")}>
                Employees
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => handleClick("/applications")}
              >
                Applications
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          )
        ) : (
          <>
            <Button color="inherit" onClick={() => handleClick("/login")}>
              Login
            </Button>
            <Button color="inherit" onClick={() => handleClick("/signup")}>
              SIGNUP
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
