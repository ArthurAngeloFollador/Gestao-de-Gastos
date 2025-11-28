import type { ReactNode } from "react";
import styled from "styled-components";

// Base Card for all Cards
const BaseCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 10px;
  gap: 5px;
  padding: 20px 10px 15px 10px;
  border: #4d4d4d solid 1px;
  background-color: #3636368d;
  user-select: none;
  transition: transform 0.2s ease-in;
  overflow-y: hidden;
  overflow-x: hidden;

  &:hover {
    transform: translateY(-5px);
  }
`;

const DashboardSmallCard = styled(BaseCard)`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & .income {
    color: #00bb00;
  }

  & .expense {
    color: #ff4444;
  }
`;

// Recent Transactions Card
const DashboardBigCard = styled(BaseCard)`
  width: 650px;
  height: 350px;

  & .income {
    color: #00bb00;
  }

  & .expense {
    color: #ff4444;
  }
`;

// Account Balances Card
const DashboardAcountBalancesCard = styled(BaseCard)`
  width: 350px;
  height: 350px;

  & .income {
    color: #f0f0f0;
  }

  & .expense {
    color: #ff4444;
  }
`;

// // Container for Account Balances
// const DivBalances = styled.div`
//   align-items: center;
// `;

const DivBalances = styled.div`
  display: block;
  padding: 6px 0;
`;

const AccountItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const UpOrDownExpense = styled.p`
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: normal;
  height: 40px;

  & .income {
    color: #00bb00;
  }

  & .expense {
    color: #ff4444;
  }

  & img {
    width: 30px;
    height: 30px; /* reduzido para ficar proporcional */
    background: transparent;
    z-index: 100;
    -webkit-user-drag: none;
  }
`;

const Balance = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  text-align: right;
  min-width: 100px; /* garante espaço para alinhar, evita wrap */
`;

// Main title for big Cards
const BigTitleCard = styled.p`
  font-size: 22px;
  font-weight: bold;
  /* z-index: 100; */
`;

// // Up or Down Arrow & percentage text
// const UpOrDownExpense = styled.p`
//   display: flex;
//   align-items: center;
//   color: #00bb00;
//   font-size: 25px;
//   font-weight: normal;
//   height: 40px;

//   & img {
//     width: 30px;
//     height: 40px;
//     background: transparent;
//     z-index: 100;
//     -webkit-user-drag: none;
//   }

//   &.negative {
//     color: #ff4444;
//   }
// `;

// Container that contains "UpOrDownExpenses" and "LowCardTittle"
const UpTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* z-index: 8; */
`;

// Title for small Cards
const LowCardTittle = styled.p`
  color: #a1a1a1;
  font-size: 15px;
  font-weight: bold;
  /* z-index: 100; */
`;

// Money for small Cards
const CardMoney = styled.p`
  color: #f0f0f0;
  font-size: 25px;
  font-weight: bold;
  /* z-index: 100; */
`;

// Container for everything but the title
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
`;

// Table for transactions Card
// const CardTable = styled.table`
//   display: flex;
//   flex-direction: column;
//   gap: 5px;

//   & thead {
//     background-color: #4141418f;
//     padding: 10px;
//     font-size: 15px;
//   }

//   & td {
//     padding: 15px 15px;
//   }

//   & .income {
//     color: #00bb00;
//   }

//   & .expense {
//     color: #ff4444;
//   }
// `;

const TableContainer = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #464646;
  border-bottom: 1px solid #4d4d4d;
`;

const Th = styled.th`
  padding: 0.75rem 1.5rem;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &:last-child {
    text-align: right;
  }
`;

const TableBody = styled.tbody`
  tr {
    border-bottom: 1px solid #4d4d4d;
    transition: background-color 0.2s;

    &:hover {
      background-color: #4d4d4dcf;
    }
  }
`;

const Td = styled.td`
  padding: 1rem 1.4rem;
  white-space: nowrap;
  font-size: 0.875rem;
  overflow-x: hidden;

  &:last-child {
    text-align: right;
  }
`;

// // Wrapper for each account item
// const AccountItem = styled.div`
//   margin-bottom: 1.5rem;

//   &:last-child {
//     margin-bottom: 0;
//   }
// `;

// Account name/type display
const AccountName = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

// Masked account number display (e.g., **** **** **** 1234)
const AccountNumber = styled.div`
  font-size: 0.75rem;
  color: #a0aec0;
  margin-bottom: 0.5rem;
  letter-spacing: 0.05em;
`;

// // Balance amount with dynamic color based on positive/negative value
// const Balance = styled.div`
//   font-size: 1.125rem;
//   font-weight: 600;
//   text-align: right;
// `;

const Description = styled(Td)`
  color: #d1d5db;
`;

const DateCell = styled(Td)`
  color: #9ca3af;
`;

const ReportOptionsCard = styled(BaseCard)`
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.25rem;
  width: 380px;
  height: 420px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const InputOptions = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.colors.buttonTextColor};

  option {
    background-color: #363636;
  }

  :focus {
    outline: none;
    border-color: #0080ff;
  }
`;

// Graph for small Cards
const CardGraph = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

// Conpound Component
interface CardProps {
  children: ReactNode;
}

interface SubCardProps {
  children: ReactNode;
  className?: string;
}

interface UpOrDownProps extends SubCardProps {
  isNegative?: boolean;
}

interface CardComponent extends React.FC<CardProps> {
  DashboardSmallCard: React.FC<SubCardProps>;
  LowCardTittle: React.FC<SubCardProps>;
  CardMoney: React.FC<SubCardProps>;
  UpOrDownExpense: React.FC<UpOrDownProps>;
  UpTextContainer: React.FC<SubCardProps>;
  CardGraph: React.FC<SubCardProps>;
  CardContent: React.FC<SubCardProps>;
  DashboardBigCard: React.FC<SubCardProps>;
  DashboardAcountBalancesCard: React.FC<SubCardProps>;
  BigTitleCard: React.FC<SubCardProps>;
  Table: React.FC<SubCardProps>;
  TableHead: React.FC<SubCardProps>;
  TableBody: React.FC<SubCardProps>;
  Th: React.FC<SubCardProps>;
  Td: React.FC<SubCardProps>;
  Description: React.FC<SubCardProps>;
  DateCell: React.FC<SubCardProps>;
  TableContainer: React.FC<SubCardProps>;
  AccountItem: React.FC<SubCardProps>;
  AccountName: React.FC<SubCardProps>;
  AccountNumber: React.FC<SubCardProps>;
  Balance: React.FC<SubCardProps>;
  DivBalances: React.FC<SubCardProps>;
  ReportOptionsCard: React.FC<SubCardProps>;
  InputContainer: React.FC<SubCardProps>;
  InputOptions: React.FC<SubCardInputProps>;
}

const Card: CardComponent = ({ children }) => {
  return <>{children}</>;
};

Card.DashboardSmallCard = ({ children, ...rest }) => (
  <DashboardSmallCard {...rest}>{children}</DashboardSmallCard>
);

Card.LowCardTittle = ({ children, ...rest }) => (
  <LowCardTittle {...rest}>{children}</LowCardTittle>
);

Card.CardMoney = ({ children, ...rest }) => (
  <CardMoney {...rest}>{children}</CardMoney>
);

Card.UpOrDownExpense = ({ children, isNegative = false, ...rest }) => (
  <UpOrDownExpense className={isNegative ? "negative" : ""} {...rest}>
    {children}
  </UpOrDownExpense>
);

Card.UpTextContainer = ({ children, ...rest }) => (
  <UpTextContainer {...rest}>{children}</UpTextContainer>
);

Card.CardGraph = ({ children, ...rest }) => (
  <CardGraph {...rest}>{children}</CardGraph>
);

Card.CardContent = ({ children, ...rest }) => (
  <CardContent {...rest}>{children}</CardContent>
);

Card.DashboardBigCard = ({ children, ...rest }) => (
  <DashboardBigCard {...rest}>{children}</DashboardBigCard>
);

Card.DashboardAcountBalancesCard = ({ children, ...rest }) => (
  <DashboardAcountBalancesCard {...rest}>
    {children}
  </DashboardAcountBalancesCard>
);

Card.BigTitleCard = ({ children, ...rest }) => (
  <BigTitleCard {...rest}>{children}</BigTitleCard>
);

Card.Th = ({ children, ...rest }) => <Th {...rest}>{children}</Th>;

Card.Table = ({ children, ...rest }) => <Table {...rest}>{children}</Table>;

Card.TableHead = ({ children, ...rest }) => (
  <TableHead {...rest}>{children}</TableHead>
);

Card.TableBody = ({ children, ...rest }) => (
  <TableBody {...rest}>{children}</TableBody>
);

Card.Td = ({ children, ...rest }) => <Td {...rest}>{children}</Td>;

Card.Description = ({ children, ...rest }) => (
  <Description {...rest}>{children}</Description>
);

Card.DateCell = ({ children, ...rest }) => (
  <DateCell {...rest}>{children}</DateCell>
);

Card.TableContainer = ({ children, ...rest }) => (
  <TableContainer {...rest}>{children}</TableContainer>
);

Card.AccountItem = ({ children, ...rest }) => (
  <AccountItem {...rest}>{children}</AccountItem>
);

Card.AccountName = ({ children, ...rest }) => (
  <AccountName {...rest}>{children}</AccountName>
);

Card.AccountNumber = ({ children, ...rest }) => (
  <AccountNumber {...rest}>{children}</AccountNumber>
);

Card.Balance = ({ children, ...rest }) => (
  <Balance {...rest}>{children}</Balance>
);

Card.DivBalances = ({ children, ...rest }) => (
  <DivBalances {...rest}>{children}</DivBalances>
);

Card.ReportOptionsCard = ({ children, ...rest }) => (
  <ReportOptionsCard {...rest}>{children}</ReportOptionsCard>
);

Card.InputContainer = ({ children, ...rest }) => (
  <InputContainer {...rest}>{children}</InputContainer>
);

interface SubCardInputProps extends SubCardProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

Card.InputOptions = ({ children, value, onChange }: SubCardInputProps) => (
  <InputOptions value={value} onChange={onChange}>
    {children}
  </InputOptions>
);

// const SubCard: React.FC<SubCardProps> = ({ children, value, onChange }) => {
//   return(
//     <select value={value} onChange={onChange}>
//       {children}
//     </select>
//   )
// }

export default Card;
