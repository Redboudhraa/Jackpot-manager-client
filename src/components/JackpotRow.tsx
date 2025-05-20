import React, { useState } from 'react';
import { Jackpot } from '../models/Jackpot';
import { Form, Button, InputGroup } from 'react-bootstrap';

interface JackpotRowProps {
  jackpot: Jackpot;
  onContribute: (amount: number) => void;
  isHighlighted: boolean;
}

const JackpotRow: React.FC<JackpotRowProps> = ({ jackpot, onContribute, isHighlighted }) => {
  const [amount, setAmount] = useState<string>('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const contributionAmount = parseFloat(amount);
    
    if (contributionAmount <= 0) {
      alert('Please enter a valid amount greater than 0');
      return;
    }
    
    onContribute(contributionAmount);
    setAmount('');
  };

  return (
    <tr className={isHighlighted ? 'table-success' : ''}>
      <td>{jackpot.name}</td>
      <td>${jackpot.currentValue.toFixed(2)}</td>
      <td>${jackpot.seedValue.toFixed(2)}</td>
      <td>${jackpot.hitThreshold.toFixed(2)}</td>
      <td>
        <Form onSubmit={handleSubmit} className="d-flex">
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              type="number"
              step="0.01"
              min="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              required
            />
            <Button type="submit" variant="primary">
              Contribute
            </Button>
          </InputGroup>
        </Form>
      </td>
    </tr>
  );
};

export default JackpotRow;