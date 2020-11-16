import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
//import WalkwaySemiBold from "WalkwaySemiBold.ttf";

const useStyles = makeStyles({
  categoryTitleColor: {
    //color: "black",
    color: "#FFFFFF",
    // charcoal color: "#282924",
  },
  categoryHoverTitleColor: {
    //color: "#D9494A",
    // gold color: "#C8A053",
    color: "#282924",
  },
  categoryTitle: {
    cursor: "pointer",
    fontFamily: "WalkwaySemiBold",
  },
});

function CategorySelectionTitle(props) {
  const classes = useStyles();

  const [isHovered, setHovered] = useState(false);

  function toggleHover() {
    setHovered(!isHovered);
  }

  function handleClick() {
    // implement category selection
  }

  return (
    <Typography
      variant="h4"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      className={`${classes.categoryTitle} ${
        isHovered ? classes.categoryHoverTitleColor : classes.categoryTitleColor
      }`}
      onClick={handleClick}
    >
      {props.children}
    </Typography>
  );
}

export default CategorySelectionTitle;
