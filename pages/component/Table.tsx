import React from 'react';
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
} from '@material-ui/core';
import { propsHomeI } from '../index.page';
const tableHeader: Array<string> = ['place', 'name', 'shooting', 'hits', 'rate of fire', 'time'];

const CustomTable: React.FC<{ biatlons: Array<propsHomeI> }> = ({ biatlons }) => {
  return (
    <div>
      <TableContainer>
        <Table aria-label="caption table">
          <caption>test task for qa lambdabird</caption>
          <TableHead>
            <TableRow>
              {tableHeader.map((elem, index) => (
                <TableCell align={index !== 0 ? 'right' : 'center'} key={index}>
                  {elem}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {biatlons.length > 0 &&
              biatlons.map((row: propsHomeI) => (
                <TableRow key={row.name}>
                  <TableCell variant="head" component="th" scope="row">
                    {row.place}
                  </TableCell>
                  <TableCell variant="head" align="right">
                    {row.name}
                  </TableCell>
                  <TableCell variant="head" align="right">
                    {row.shooting}
                  </TableCell>
                  <TableCell variant="head" align="right">
                    {row.hits}
                  </TableCell>
                  <TableCell variant="head" align="right">
                    {row.rateoffire}
                  </TableCell>
                  <TableCell variant="head" align="right">
                    {row.time}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CustomTable;
