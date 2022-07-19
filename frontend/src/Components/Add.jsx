import React, { useState } from "react";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  ImageOutlined,
  PersonAddAlt1Outlined,
  VideocamOutlined,
} from "@mui/icons-material/";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  marginBottom: 20,
});

export const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="New Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 50 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} borderRadius={2} bgcolor={"background.default"} color={"text.primary"} p={2}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "500" }}
            component="h2"
            textAlign="center"
          >
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZ6TeDFGGXiuKR36W9VBw93YeRuOf_-eaDmfqJ1InJONlGKnqV"
            />
            <Typography>John Doe</Typography>
          </UserBox>
          <TextField
            multiline
            placeholder="What's on Your Mind?"
            rows={3}
            variant="standard"
            fullWidth
          />
          <Stack direction="row" gap={2} mb={3} mt={2}>
            <EmojiEmotions color="primary" />
            <PersonAddAlt1Outlined color="success" />
            <ImageOutlined color="secondary" />
            <VideocamOutlined color="error" />
          </Stack>
          <ButtonGroup disableElevation variant="contained" fullWidth>
            <Button>Post</Button>
            <Button sx={{width:'150px'}}><DateRange/></Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </div>
  );
};
