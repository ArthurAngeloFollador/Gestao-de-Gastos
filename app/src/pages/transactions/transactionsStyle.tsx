import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  padding: min(1em, 8%); // For better responsiveness
  color: #f0f0f0;
`;

export const Filter = styled.div`
  cursor: pointer;
  display: flex;
  gap: 5px;
  align-items: center;

  border: 1px solid #6e6e6e;
  border-radius: 10px;
  padding: 10px 15px;
`;

// For table
export const TableContainer = styled.div`
  background-color: #222222;
  padding: 24px;
  border-radius: 8px;
  margin: 0.5rem 3rem 1rem 1rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  border-bottom: 1px solid #6e6e6e;
`;

export const TableHeaderCell = styled.th`
  text-align: left;
  padding: 12px 16px;
  font-size: 11px;
  font-weight: 600;
  color: #6e6e6e;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  border-bottom: 1px solid #6e6e6e;
  transition: background-color 0.2s;

  &:hover {
    background-color: #6e6e6e75;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const TableCell = styled.td`
  padding: 20px 16px;
  font-size: 14px;
  color: #e3e8ef;
`;

export const Description = styled.div`
  font-weight: 400;
`;

export const Category = styled.div`
  color: #8b9cb5;
`;

export const Date = styled.div`
  color: #8b9cb5;
`;

export const Amount = styled.div`
  font-weight: 500;
`;

export const EditButton = styled.button`
  background: none;
  border: none;
  color: #4a9eff;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  transition: color 0.2s;

  &:hover {
    color: #6bb0ff;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;
