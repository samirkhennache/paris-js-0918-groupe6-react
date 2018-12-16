import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class OpenMenuBurger extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false
  };



  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const {
      classes,
      openSearch,
      openMyOffers,
      openMissions,
      openParams,
      routeName
    } = this.props;

    const sideListTrainee = (
      <div className={classes.list}>
        <ListItem component={openSearch} button>
          Recherche
        </ListItem>
        <ListItem component={openMyOffers} button>
          Mes offres
        </ListItem>
      </div>
    );
    const sideListCompany = (
      <div className={classes.list}>
        <ListItem component={openMissions} button>
          Mes missions
        </ListItem>
        <ListItem component={openParams} button>
          Mes params
        </ListItem>
      </div>
    );
    console.log(routeName);
    return (
      <div className="open-menu-burger">
        <IconButton
          className={classes.menuButton}
          color="black"
          aria-label="Menu"
          onClick={this.toggleDrawer("left", true)}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {routeName === "/trainee" && sideListTrainee}
            {routeName === "/company" && sideListCompany}
          </div>
        </Drawer>
      </div>
    );
  }
}
OpenMenuBurger.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OpenMenuBurger);
