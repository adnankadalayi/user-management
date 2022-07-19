// import React, { useEffect } from "react";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import ImageListItem from "@mui/material/ImageListItem";
// import ImageListItemBar from "@mui/material/ImageListItemBar";
// import {  Grid, Typography, Button } from "@material-ui/core";
// import IsLoggedIn from "../IsLoggedIn";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../Components/Navbar";
// import { Container } from "@material-ui/core";
// import CameraIcon from '@mui/icons-material/PhotoCamera';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import CssBaseline from '@mui/material/CssBaseline';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Home() {

//      const navigate = useNavigate();

//      useEffect(() => {
//           IsLoggedIn.find((value) => navigate(value));
//         //   alert(state.isLoggedOut);
//      }, []);
//      const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//      const theme = createTheme();

//      return (
//           <>
//                <Navbar title="Home" />
  
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <AppBar position="relative">
//         <Toolbar>
//           <CameraIcon sx={{ mr: 2 }} />
//           <Typography variant="h6" color="inherit" noWrap>
//             Album layout
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <main>
//         {/* Hero unit */}
//         <Box
//           sx={{
//             bgcolor: 'background.paper',
//             pt: 8,
//             pb: 6,
//           }}
//         >
//           <Container maxWidth="sm">
//             <Typography
//               component="h1"
//               variant="h2"
//               align="center"
//               color="text.primary"
//               gutterBottom
//             >
//               Album layout
//             </Typography>
//             <Typography variant="h5" align="center" color="text.secondary" paragraph>
//               Something short and leading about the collection below—its contents,
//               the creator, etc. Make it short and sweet, but not too short so folks
//               don&apos;t simply skip over it entirely.
//             </Typography>
//             <Stack
//               sx={{ pt: 4 }}
//               direction="row"
//               spacing={2}
//               justifyContent="center"
//             >
//               <Button variant="contained">Main call to action</Button>
//               <Button variant="outlined">Secondary action</Button>
//             </Stack>
//           </Container>
//         </Box>
//         <Container sx={{ py: 8 }} maxWidth="md">
//           {/* End hero unit */}
//           <Grid container spacing={4}>
//             {cards.map((card) => (
//               <Grid item key={card} xs={12} sm={6} md={4}>
//                 <Card
//                   sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
//                 >
//                   <CardMedia
//                     component="img"
//                     sx={{
//                       // 16:9
//                       pt: '56.25%',
//                     }}
//                     image="https://source.unsplash.com/random"
//                     alt="random"
//                   />
//                   <CardContent sx={{ flexGrow: 1 }}>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       Heading
//                     </Typography>
//                     <Typography>
//                       This is a media card. You can use this section to describe the
//                       content.
//                     </Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button size="small">View</Button>
//                     <Button size="small">Edit</Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </main>
//       {/* Footer */}
//       <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
//         <Typography variant="h6" align="center" gutterBottom>
//           Footer
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           align="center"
//           color="text.secondary"
//           component="p"
//         >
//           Something here to give the footer a purpose!
//         </Typography>
//       </Box>
//       {/* End footer */}
//     </ThemeProvider>
//           </>
//      );
// }


// export default Home;














import { createTheme, Stack, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Add } from "../Components/Add";
import { Feed } from "../Components/Feed";
import Navbar from "../Components/Navbar";
import { Rightbar } from "../Components/Rightbar";
import { Sidebar } from "../Components/Sidebar";
import IsLoggedIn from "../IsLoggedIn";


function Home() {
  const [mode, setMode] = useState('light')
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();


  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }
  })

  useEffect(() => {
    axios({
      method: "get",
      url: "/",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        localStorage.removeItem("access_token");
        navigate("/login");
      });

    IsLoggedIn.find((value) => navigate(value));
  }, []);
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      {/* <Navbar setMode={setMode} mode={mode}/> */}
      <Navbar title="Home" />
    <Stack direction="row" marginTop={7} spacing={2} justifyContent="space-between" >

      <Sidebar setMode={setMode} mode={mode}/>
      <Feed/>
      <Rightbar/>
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default Home;

