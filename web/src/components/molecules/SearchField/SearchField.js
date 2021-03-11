import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";
import {
  fetchFilterPosts,
  fetchAllPosts,
} from "../../../store/actions/postActions";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    marginBottom: 20,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const SearchField = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = async (e) => {
    let input = e.target;
    if (input.value !== "") {
      dispatch(fetchFilterPosts(input.value));
    } else {
      dispatch(fetchAllPosts());
    }
  };

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Whats do you search?"
        inputProps={{ "aria-label": "Whats do you search?" }}
        onChange={handleChange}
      />
      <IconButton
        disabled={true}
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchField;
