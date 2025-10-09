import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/Sidebar.tsx";
import Card from "../../components/cards/Cards.tsx";
import * as S from "./dashboardStyle.tsx";
import LineGraph from "../../components/graphs/lineGraph/LineGraps.tsx";
import BarGraph from "../../components/graphs/barGraph/BarGraph.tsx";
import Footer from "../../components/footer/Footer.tsx";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

interface DashboardCardData {
  id: string;
  title: string;
  amount?: string;
  percentage?: string;
  showArrow?: boolean;
  graphComponent?: React.ReactNode;
}

function Dashboard() {
  // Const for debug before database
  const cardData: DashboardCardData[] = [
    {
      id: "div1",
      title: "Income VS. Expenses",
      amount: "$12,500",
      percentage: "+15%",
      showArrow: true,
      graphComponent: <LineGraph />,
    },
    {
      id: "div2",
      title: "Spending by Categories",
      graphComponent: <BarGraph />,
    },
  ];

  interface Transaction {
    id: string;
    description: string;
    date: string;
    category: string;
    amount: number;
    type: "income" | "expense";
  }

  // Const for debug before database
  const transactions: Transaction[] = [
    {
      id: "1",
      description: "Salary Deposit",
      date: "2024-07-14",
      category: "Income",
      amount: 5000.0,
      type: "income",
    },
    {
      id: "2",
      description: "Grocery shopping at LocalMart",
      date: "2024-07-15",
      category: "Groceries",
      amount: 150.0,
      type: "expense",
    },
    {
      id: "3",
      description: "Dinner at The Bistro",
      date: "2024-07-12",
      category: "Dining",
      amount: 80.0,
      type: "expense",
    },
  ];

  interface Account {
    name: string;
    accountNumber: string;
    balance: number;
  }

  // Const for debug before database
  const accounts: Account[] = [
    {
      name: "Checking Account",
      accountNumber: "**** **** **** 1234",
      balance: 7500,
    },
    {
      name: "Savings Account",
      accountNumber: "**** **** **** 5678",
      balance: 15000,
    },
    {
      name: "Credit Card",
      accountNumber: "**** **** **** 9012",
      balance: -2000,
    },
  ];

  const formatAmount = (amount: number, type: "income" | "expense") => {
    const formatted = Math.abs(amount).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
    return type === "income" ? `+${formatted}` : `-${formatted}`;
  };

  // Format balance as currency with proper sign
  const formatBalance = (balance: number): string => {
    const formatted = Math.abs(balance).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
    return balance < 0 ? `-${formatted}` : formatted;
  };

  return (
    <>
      <Header />
      <Sidebar />
      <S.DashboardContainer>
        <S.DashboardContent>
          <S.DashboardInfo>
            <S.DashboardWrapper>
              <S.DashboardTitle>Dashboard</S.DashboardTitle>
              <S.Cards>
                {/* First & Second Card */}
                {cardData.map((card) => (
                  <div key={card.id} className={card.id}>
                    <Card.DashboardSmallCard>
                      <Card.UpTextContainer>
                        <div>
                          <Card.LowCardTittle>{card.title}</Card.LowCardTittle>
                          <Card.CardMoney>{card.amount}</Card.CardMoney>
                        </div>
                        {/* If percentual is negative show arrow down */}
                        {card.showArrow && card.percentage && (
                          ((card.percentage).includes("+")) ? 
                            <Card.UpOrDownExpense className="income">
                            <BsArrowUp className="income" fontSize="30px" />
                            {card.percentage}
                          </Card.UpOrDownExpense>
                          :
                          <Card.UpOrDownExpense className="expense">
                            <BsArrowDown className="expense" fontSize="30px" />
                            {card.percentage}
                          </Card.UpOrDownExpense>
                        )}
                      </Card.UpTextContainer>
                      {card.graphComponent && (
                        <Card.CardGraph>{card.graphComponent}</Card.CardGraph>
                      )}
                    </Card.DashboardSmallCard>
                  </div>
                ))}

                {/* Recent Transactions Card */}
                <Card.DashboardBigCard>
                  <Card.UpTextContainer>
                    <Card.BigTitleCard>Recent Transactions</Card.BigTitleCard>
                  </Card.UpTextContainer>
                  <Card.CardContent>
                    <Card.TableContainer>
                      <Card.Table>
                        <Card.TableHead>
                          <tr>
                            <Card.Th>Description</Card.Th>
                            <Card.Th>Date</Card.Th>
                            <Card.Th>Category</Card.Th>
                            <Card.Th>Amount</Card.Th>
                          </tr>
                        </Card.TableHead>
                        <Card.TableBody>
                          {transactions.map((transaction, index) => (
                            <tr key={index}>
                              <Card.Description>
                                {transaction.description}
                              </Card.Description>
                              <Card.DateCell>{transaction.date}</Card.DateCell>
                              <Card.Td>{transaction.category}</Card.Td>
                              <Card.Td className={transaction.type}>
                                {formatAmount(
                                  transaction.amount,
                                  transaction.type
                                )}
                              </Card.Td>
                            </tr>
                          ))}
                        </Card.TableBody>
                      </Card.Table>
                    </Card.TableContainer>
                  </Card.CardContent>
                </Card.DashboardBigCard>

                {/* Account Balances Card */}
                <Card.DashboardAcountBalancesCard>
                  <Card.UpTextContainer>
                    <Card.BigTitleCard>Account Balances</Card.BigTitleCard>
                  </Card.UpTextContainer>
                  <Card.CardContent>
                    {accounts.map((account) => (
                      <Card.DivBalances key={account.accountNumber}>
                        <Card.AccountItem>
                          <div>
                            <Card.AccountName>{account.name}</Card.AccountName>
                            <Card.AccountNumber>
                              {account.accountNumber}
                            </Card.AccountNumber>
                          </div>

                          <Card.Balance
                            className={
                              account.balance < 0 ? "expense" : "income"
                            }
                          >
                            {formatBalance(account.balance)}
                          </Card.Balance>
                        </Card.AccountItem>
                      </Card.DivBalances>
                    ))}
                  </Card.CardContent>
                </Card.DashboardAcountBalancesCard>
              </S.Cards>
            </S.DashboardWrapper>
          </S.DashboardInfo>
        </S.DashboardContent>
      </S.DashboardContainer>
      <Footer />
    </>
  );
}

export default Dashboard;
