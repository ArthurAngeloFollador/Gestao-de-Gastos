import Container from "../../components/conteiners/Container";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";

import * as S from "./transactionsStyle";

import { formatCurrency } from "../../utils/formatters";

import { AiOutlineDown } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";

function Transactions() {
  // interface for debug before database
  interface Transaction {
    id: number;
    description: string;
    category: string;
    date: string;
    amount: number;
  }

  //   Const for debug before database
  const transactions: Transaction[] = [
    {
      id: 1,
      description: "Grocery shopping at Local Market",
      category: "Groceries",
      date: "2023-08-15",
      amount: 25.0,
    },
    {
      id: 2,
      description: "Coffee at The Daily Grind",
      category: "Coffee",
      date: "2023-08-14",
      amount: 15.0,
    },
    {
      id: 3,
      description: "Dinner at The Italian Place",
      category: "Dining",
      date: "2023-08-13",
      amount: 50.0,
    },
    {
      id: 4,
      description: "Movie ticket",
      category: "Entertainment",
      date: "2023-08-12",
      amount: 10.0,
    },
    {
      id: 5,
      description: "Gasoline",
      category: "Transportation",
      date: "2023-08-11",
      amount: 30.0,
    },
  ];
  const handleEdit = (id: number) => {
    console.log("Edit transaction:", id);
  };
  return (
    <>
      <Header />
      <Sidebar />
      <Container
        title="Transactions"
        hasButton={true}
        buttonText="New Transaction"
        // hasPlusIcon={true}
      >
        <S.FilterContainer>
          <S.Filter>
            Date{" "}
            <AiOutlineDown style={{ color: "#f0f0f0", fontSize: "16px" }} />
          </S.Filter>
          <S.Filter>
            Category{" "}
            <AiOutlineDown style={{ color: "#f0f0f0", fontSize: "16px" }} />
          </S.Filter>
          <S.Filter>
            Account{" "}
            <AiOutlineDown style={{ color: "#f0f0f0", fontSize: "16px" }} />
          </S.Filter>
        </S.FilterContainer>
        <S.TableContainer>
          <S.Table>
            <S.TableHeader>
              <tr>
                <S.TableHeaderCell>Description</S.TableHeaderCell>
                <S.TableHeaderCell>Category</S.TableHeaderCell>
                <S.TableHeaderCell>Date</S.TableHeaderCell>
                <S.TableHeaderCell>Amount</S.TableHeaderCell>
                <S.TableHeaderCell></S.TableHeaderCell> {/* For edit button */}
              </tr>
            </S.TableHeader>
            <S.TableBody>
              {transactions.map((transaction) => (
                <S.TableRow key={transaction.id}>
                  <S.TableCell>
                    <S.Description>{transaction.description}</S.Description>
                  </S.TableCell>
                  <S.TableCell>
                    <S.Category>{transaction.category}</S.Category>
                  </S.TableCell>
                  <S.TableCell>
                    <Date>{transaction.date}</Date>
                  </S.TableCell>
                  <S.TableCell>
                    <S.Amount>{formatCurrency(transaction.amount, {showPlusForPositive: false})}</S.Amount>
                  </S.TableCell>
                  <S.TableCell>
                    <S.EditButton onClick={() => handleEdit(transaction.id)}>
                      <MdOutlineEdit />
                    </S.EditButton>
                  </S.TableCell>
                </S.TableRow>
              ))}
            </S.TableBody>
          </S.Table>
        </S.TableContainer>
        <Footer />
      </Container>
    </>
  );
}

export default Transactions;
