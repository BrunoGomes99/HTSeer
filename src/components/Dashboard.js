import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItems from "./ListItems";
import RoutesHtseer from '../routes';
import { DataGrid } from '@mui/x-data-grid';
import backgroundImg from '../images/BACKGROUND TOPO.png';
import imgLogo from '../images/LOGO.png';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import InsightsIcon from '@mui/icons-material/Insights';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Grid from '@mui/material/Grid';
import { ReactComponent as IconAnalisesAbertas } from '../images/ico_analises abertas.svg';
import { ReactComponent as IconAnalisesAndamento } from '../images/ico_analises andamento.svg';
import { ReactComponent as IconAnalisesFinalizadas } from '../images/ico_analises finalizadas.svg';
import { ReactComponent as IconResumo } from '../images/ico_resumo.svg';
import { ReactComponent as IconWallmart } from '../images/logo_walmart.svg';
import CustomizedInputBase from './CustomizedInputBase';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const cardAnalisesAbertas = (
  <React.Fragment >
    <CardContent>
      <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
        Análises em Aberto
      </Typography>
    <Grid container sx={{ color: 'text.primary' }}>
      <Grid item xs={9.6}>
        <Typography variant="h5" component="div" sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          234
          <IconAnalisesAbertas/>
        </Typography>
      </Grid>
      <Grid item xs={9.6}>
        <Typography sx={{ mb: 1.5}} color="text.secondary">        
          <text style={{color: 'red'}}>25</text> Lojas
        </Typography>
      </Grid>
    </Grid>
  
    </CardContent>
  </React.Fragment>
);
const cardAnalisesAndamento = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
        Análises em Andamento
      </Typography>
    <Grid container sx={{ color: 'text.primary' }}>
      <Grid item xs={12}>
        <Typography variant="h5" component="div" sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          120
          <IconAnalisesAndamento/>
        </Typography>
      </Grid>
      <Grid item xs={9.6}>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <text style={{color: 'darkorange'}}>5</text> Lojas
        </Typography>
      </Grid>
    </Grid>
  
    </CardContent>
  </React.Fragment>
);
const cardAnalisesFinalizadas = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
        Análises Finalizadas
      </Typography>
    <Grid container sx={{ color: 'text.primary' }}>
      <Grid item xs={10}>
        <Typography variant="h5" component="div" sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          15
          <IconAnalisesFinalizadas/>
        </Typography>
      </Grid>
      <Grid item sx={9.6}>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <text style={{color: 'mediumseagreen'}}>15</text> Lojas
        </Typography>
      </Grid>
    </Grid>
  
    </CardContent>
  </React.Fragment>
);

const cardResumoPorEstado = (
  <React.Fragment>
    <CardContent style={{height: '147px'}}>
      <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
        Resumo por Estado
      </Typography>
    <Grid container sx={{ color: 'text.primary' }}>
      <Grid item xs={10}>
        <Typography component="div" sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          CA
          <IconResumo/>
          </Typography>
      </Grid>
      <Grid item sx={9.6} style={{minInlineSize: '-webkit-fill-available'}}>
        <Typography sx={{ mb: 1.5 }}  variant="h5">
          13
        </Typography>
      </Grid>
    </Grid>
  
    </CardContent>
  </React.Fragment>
);

function DashboardContent() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton 
              onClick={toggleDrawer}
              sx={{
                marginRight: '14px'
              }}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <ListItems />
          <Divider />
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: '#F0F0F7',
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <div style={{position: 'relative'}}>
            <img src={backgroundImg} style={{width: '100%', height: '45vh'}}/>
            <div style={{position: 'absolute', top:'5px', left:'25px', display: 'flex', alignItems: 'center'}}>
              <CustomizedInputBase/>
              <div style={{position: 'relative', left:'980px'}}>
                <IconWallmart/>
              </div>
            </div>
            <div style={{position: 'absolute', top:'90px', left:'25px'}}>
              <img src={imgLogo} />
              <Box sx={{ minWidth: 180, position: 'relative', left:'550px', bottom: '150px' }}>
                <Card variant="outlined">{cardAnalisesAbertas}</Card>
              </Box>
              <Box sx={{ minWidth: 180, position: 'relative', left:'775px', bottom:'300px' }}>
                <Card variant="outlined">{cardAnalisesAndamento}</Card>
              </Box>
              <Box sx={{ minWidth: 180, position: 'relative', left:'1000px', bottom:'450px' }}>
                <Card variant="outlined">{cardAnalisesFinalizadas}</Card>
              </Box>
              <Box sx={{ minWidth: 180, position: 'relative', left:'1225px', bottom:'600px' }}>
                <Card variant="outlined">{cardResumoPorEstado}</Card>
              </Box>
            </div>
          </div>
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4}}>
            {/* Menu com links para as rotas */}
            <RoutesHtseer />
            {/* Rodapé */}
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}