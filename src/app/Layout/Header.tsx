import * as React from "react";
import {
  AppBar,
  Button,
  createStyles,
  makeStyles,
  Theme,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import { toAbsoluteUrl } from "utils";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    href: {
      marginRight: theme.spacing(2),
    },
    logo: {
      width: theme.spacing(4),
      height: theme.spacing(4),
      borderRadius: "50%",
    },
  })
);

export function Header() {
  const location = useLocation();

  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/" className={classes.href}>
          <img
            src={toAbsoluteUrl("/logo.png")}
            className={classes.logo}
            alt="logo"
          />
        </Link>

        <Typography variant="h6" className={classes.title}>
          YYeTs
        </Typography>

        {location.pathname !== "/search" && (
          <Link to="/search">
            <IconButton>
              <Search />
            </IconButton>
          </Link>
        )}

        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
