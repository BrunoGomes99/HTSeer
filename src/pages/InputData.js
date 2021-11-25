import * as React from 'react';
import { Container, Grid, Paper, Button } from '@mui/material';
import Actions from '../components/Actions';
import TreeChart from '../components/TreeChart';
import SaveIcon from '@mui/icons-material/Save';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {Link} from 'react-router-dom';

export default function InputData() {
  return (
    <Container id="inputData" maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={5} lg={4}>
          <Actions />
        </Grid>
        <Grid item xs={12} md={7} lg={8} alignSelf="center">
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 440,
              }}
              elevation= {4}
            >
              <TreeChart />
            </Paper>
          </Grid>
          <Grid container item xs={12} style={{ marginTop: "15px" }}>
            <Grid container item xs={6} spacing={3}>
              <Grid item xs={12} md={6} lg={6}>
                <Button variant="contained" startIcon={<FileDownloadIcon />}>
                  Carregar
                </Button>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Button variant="contained" startIcon={<SaveIcon />}>
                  Salvar
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={6} style={{ textAlign: "end" }}>
              <Link to="/modeling" style={{textDecoration: "none"}}>
              <Button variant="contained" startIcon={<ArrowRightIcon />} >
                Executar
              </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        {/* Recent Deposits */}
        {/* <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid> */}
        {/* <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <LineChart />
                </Paper>
              </Grid> */}
        {/* Recent Orders */}
        {/* <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid> */}
      </Grid>
    </Container>
  )
};