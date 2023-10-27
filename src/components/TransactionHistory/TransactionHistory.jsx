import PropTypes from "prop-types";
import {Table, TableItem, TableTd  } from "./Transaction.styled"



export function TransactionHistory({ transactions }) {
  return (
    <Table className="transaction-history">
      <thead>
        <tr>
          <TableItem>Type</TableItem>
          <TableItem>Amount</TableItem>
          <TableItem>Currency</TableItem>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <TableTd>{type}</TableTd>
            <TableTd>{amount}</TableTd>
            <TableTd>{currency}</TableTd>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}


TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired, 
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};



