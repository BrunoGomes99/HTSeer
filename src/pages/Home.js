import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'data', headerName: 'Data Abertura', type: 'date', description: 'Data de abertura da solicitação de modelo', width: 180 },
    { field: 'entrega', headerName: 'Entrega Prevista', description: 'Entrega prevista do modelo', width: 180 },
    { field: 'descricao', headerName: 'Descrição', description: 'Descrição do modelo proposto', width: 300, },
    { field: 'status', headerName: 'Status', description: 'Status do processo', width: 160, },
  ];
  
  const rows = [
    { id: 2, entrega: '15.02.2022', data: '15.12.2021', descricao: 'Descrição para o processo', status: 'Aberto'},
    { id: 1, entrega: '15.02.2022', data: '15.12.2021', descricao: 'Descrição para o processo', status: 'Em Andamento'},
    { id: 3, entrega: '15.02.2022', data: '15.12.2021', descricao: 'Descrição para o processo', status: 'Finalizado'},
    { id: 4, entrega: '15.02.2022', data: '15.12.2021', descricao: 'Descrição para o processo', status: 'Aberto'},
    { id: 5, entrega: '15.02.2022', data: '15.12.2021', descricao: 'Descrição para o processo', status: 'Em Andamento'},
    { id: 6, entrega: '15.02.2022', data: '16.12.2021', descricao: 'Descrição para o processo', status: 'Aberto'},
    { id: 7, entrega: '15.02.2022', data: '16.12.2021', descricao: 'Descrição para o processo', status: 'Aberto'},
    { id: 8, entrega: '15.02.2022', data: '17.12.2021', descricao: 'Descrição para o processo', status: 'Em Andamento'},
    { id: 9, entrega: '15.02.2022', data: '17.12.2021', descricao: 'Descrição para o processo', status: 'Finalizado'},
  ];

export default function Home(){
    return (
        <div style={{ 
          height: '280px',          
          position:'relative',
          background: '#FFFFFF',
          borderRadius: '0.8rem',               
          marginTop: '-12rem',
          padding: '0.1rem 2rem 7rem 2rem',
          }}>
        <h2>Análises</h2>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={1}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    );
}

