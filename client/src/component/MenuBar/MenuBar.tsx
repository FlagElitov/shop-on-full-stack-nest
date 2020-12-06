import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useDispatch } from "react-redux";
import {
  itemsSortPrice,
  itemsSortRating,
} from "../../redux/action/ItemsAction";

const MenuBar = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSortPrice = () => {
    setAnchorEl(null);
    dispatch(itemsSortPrice());
  };
  const handleSortRating = () => {
    setAnchorEl(null);
    dispatch(itemsSortRating());
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <span className="sort"> Сортировка</span>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleSortRating}>По рейтингу</MenuItem>
        <MenuItem onClick={handleSortPrice}>По цене</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuBar;
