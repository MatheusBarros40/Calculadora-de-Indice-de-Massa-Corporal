import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TextField,
} from "@mui/material";

const IMCResults = () => {
  const [imcRecords, setImcRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchIMCRecords = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/imc/");
        setImcRecords(response.data);
        setFilteredRecords(response.data); // Inicializa os registros filtrados
      } catch (error) {
        console.error("Erro ao buscar registros de IMC", error);
      }
    };

    fetchIMCRecords();
  }, []);

  useEffect(() => {
    // Filtra os registros com base no texto de pesquisa
    const filtered = imcRecords.filter((record) =>
      record.nome.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredRecords(filtered);
    setPage(0); // Retorna para a primeira página após a pesquisa
  }, [search, imcRecords]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="container mt-3 col-sm-12">
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TextField
        label="Pesquisar por Nome"
        variant="outlined"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ m: 2 }}
      />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="right">Altura</TableCell>
              <TableCell align="right">Peso</TableCell>
              <TableCell align="right">IMC</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRecords
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.nome}
                  </TableCell>
                  <TableCell align="right">
                    {parseFloat(row.altura).toFixed(2)}
                  </TableCell>
                  <TableCell align="right">
                    {parseFloat(row.peso).toFixed(2)}
                  </TableCell>
                  <TableCell align="right">
                    {parseFloat(row.imc).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        data-cy="dropdownRegistrosPorPagina"
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredRecords.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  );
};

export default IMCResults;
