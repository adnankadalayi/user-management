import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

export const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={350}>
        <Typography variant="h6" sx={{ fontWeight: "100" }}>
          Online Friends
        </Typography>
        <AvatarGroup max={7} sx={{ marginRight: 10 }}>
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZ6TeDFGGXiuKR36W9VBw93YeRuOf_-eaDmfqJ1InJONlGKnqV"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZ6TeDFGGXiuKR36W9VBw93YeRuOf_-eaDmfqJ1InJONlGKnqV"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZ6TeDFGGXiuKR36W9VBw93YeRuOf_-eaDmfqJ1InJONlGKnqV"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZ6TeDFGGXiuKR36W9VBw93YeRuOf_-eaDmfqJ1InJONlGKnqV"
          />
          <Avatar
            alt="Travis Howard"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZ6TeDFGGXiuKR36W9VBw93YeRuOf_-eaDmfqJ1InJONlGKnqV"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZ6TeDFGGXiuKR36W9VBw93YeRuOf_-eaDmfqJ1InJONlGKnqV"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZ6TeDFGGXiuKR36W9VBw93YeRuOf_-eaDmfqJ1InJONlGKnqV"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZ6TeDFGGXiuKR36W9VBw93YeRuOf_-eaDmfqJ1InJONlGKnqV"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZ6TeDFGGXiuKR36W9VBw93YeRuOf_-eaDmfqJ1InJONlGKnqV"
          />
          <Avatar
            alt="Travis Howard"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZ6TeDFGGXiuKR36W9VBw93YeRuOf_-eaDmfqJ1InJONlGKnqV"
          />
        </AvatarGroup>
        <Typography variant="h6" sx={{ fontWeight: "100" }} mb={2} mt={2}>
          Latest Posts
        </Typography>
        <ImageList cols={3} gap={5} rowHeight={180}>
          <ImageListItem>
            <img
              alt="Travis Howard"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt="Travis Howard"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt="Travis Howard"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" sx={{ fontWeight: "100" }}  mt={2}>
          Inbox
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
