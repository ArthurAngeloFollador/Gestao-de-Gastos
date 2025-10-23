import Footer from "../../components/footer/Footer";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/Sidebar";
import Container from "../../components/conteiners/Container";

import * as S from "./accountsStyle";

import { formatCurrency } from "../../utils/formatters";

import Bank from "../../assets/svgs/icons/bankIcon.svg";

interface accountsInterface {
  id: number;
  name: string;
  amount: number;
}

function Accounts() {
  const accounts: accountsInterface[] = [
    {
      id: 1,
      name: "Checking",
      amount: 523456,
    },
    {
      id: 2,
      name: "Savings",
      amount: 34789.01,
    },
    {
      id: 3,
      name: "Credit Card",
      amount: 87557.55,
    },
    {
      id: 4,
      name: "Investiment",
      amount: 25889372,
    },
  ];

  return (
    <>
      <Header />
      <Sidebar />
      <Container
        title="Accounts"
        hasButton={true}
        buttonText="Add Account"
        hasPlusIcon={true}
      >
        <S.Accountsdiv>
          {accounts.map((account) => {
            return (
              <div key={account.id} className={account.id.toString()}>
                <S.IndividualAccount>
                  <S.ImgAndTextAccount>
                    <img src={Bank} alt="BankAccountIcon" />
                    <S.Text>
                      <p>My {account.name}</p>
                      <S.LittleText>{account.name}</S.LittleText>
                    </S.Text>
                  </S.ImgAndTextAccount>
                  <S.AmountInAccount>
                    {formatCurrency(account.amount, {showPlusForPositive: false})}
                  </S.AmountInAccount>
                </S.IndividualAccount>
              </div>
            );
          })}
        </S.Accountsdiv>
        <Footer />
      </Container>
    </>
  );
}

export default Accounts;
