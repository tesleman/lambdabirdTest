import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import React from 'react';

const Home = () => {
  return (
    <Container>
      <TableContainer>
        <Table aria-label="caption table">
          <caption>A basic table example with a caption</caption>
          <TableHead>
            <TableRow>
              <TableCell>Place</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Shooting</TableCell>
              <TableCell align="right">Hits</TableCell>
              <TableCell align="right">Rate of fire</TableCell>
              <TableCell align="right">Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array(8)
              .fill(0)
              .map((row, i) => (
                <TableRow key={i}>
                  <TableCell component="th" scope="row">
                    {i + 1}
                  </TableCell>
                  <TableCell align="right">{1}</TableCell>
                  <TableCell align="right">{1}</TableCell>
                  <TableCell align="right">{1}</TableCell>
                  <TableCell align="right">{1}</TableCell>
                  <TableCell align="right">{1}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Home;
