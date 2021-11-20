import * as React from 'react';
import {Container, Grid, Paper} from '@mui/material';
import Actions from '../components/Actions';
import TreeChart from '../components/TreeChart';

// function InputDataContent() {
export default function InputData(){
    return (
        <Container id="inputData" maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={5} lg={4}>
                    <Actions />
                </Grid>
                <Grid item xs={12} md={7} lg={8}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            // height: 240,
                        }}
                    >
                        <TreeChart />
                    </Paper>
                    {/* <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'row',
                    // height: 240,
                  }}
                >
                
                  <Button variant="outlined" size="small" padding="10px">
                    Carregar
                  </Button>
                  <Button variant="outlined" size="small" padding="10px">
                    Salvar
                  </Button>
                  <Button variant="outlined" size="small" padding="10px">
                    Executar
                  </Button>
                 </Paper> */}
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

// export default function InputData() {
//     return <InputDataContent />;
// }