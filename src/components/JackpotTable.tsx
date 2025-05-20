import React from 'react';
import { Table, Alert, Spinner } from 'react-bootstrap';
import JackpotRow from './JackpotRow';
import { useJackpots } from '../hooks/useJackpots';

const JackpotTable: React.FC = () => {
  const {
    jackpots,
    loading,
    error,
    resetMessage,
    highlightedJackpotId,
    contributeToJackpot
  } = useJackpots();

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <div>
      {resetMessage && (
        <Alert variant="success" className="mt-3">
          {resetMessage}
        </Alert>
      )}
      
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Current Value</th>
            <th>Seed Value</th>
            <th>Hit Threshold</th>
            <th>Contribute</th>
          </tr>
        </thead>
        <tbody>
          {jackpots.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center">No jackpots found</td>
            </tr>
          ) : (
            jackpots.map(jackpot => (
              <JackpotRow
                key={jackpot.id}
                jackpot={jackpot}
                onContribute={(amount) => contributeToJackpot(jackpot.id, amount)}
                isHighlighted={highlightedJackpotId === jackpot.id}
              />
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default JackpotTable;