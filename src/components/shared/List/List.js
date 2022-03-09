import * as React from "react";
import {default as MuiList} from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import { LIST_STYLES } from './styles';

export default function List({items}) {
  return (
      <MuiList sx={LIST_STYLES.wrapper}>
        {items && items.map(({ name }) => (
            <ListItem
              sx={LIST_STYLES.item}
              secondaryAction={name}
            >
              <ListItemText primary={`Topic`} />
            </ListItem>
        ))}
      </MuiList>
  );
}
