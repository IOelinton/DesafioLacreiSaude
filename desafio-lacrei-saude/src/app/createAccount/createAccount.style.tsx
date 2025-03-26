import styled from "styled-components";

export const CreateAcountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px auto;
  padding: 32px;


  h2 {
    text-align: left;
    font-weight: bold;
    padding-bottom: 8px;
    width: 100%;
  }

  p {
    padding-bottom: 32px ;
  }

  .inputField {
    width: 100%;
  }

  .passwordValidations {
    padding-bottom: 32px;
    width: 100%;

    h3{
        font-weight: bold;
        color: #333333;
        padding-bottom : 8px;
    }

    ul {
        padding-left: 32px;
    }

    ul li {
        color: #918e8e;
    }
  }

  .confirmArea {
    display: flex;
    justify-content: space-between;

    span{
        font-weight: bold;
        color: #333333;
    }
  }

  .requirements li {
  margin: 5px 0;
}

.requirements li.valid {
  color: green;
  text-decoration: line-through;
}

.requirements li.invalid {
  color: #963d1d;
}

  .buttons {
    width: 100%;
    padding-top: 32px;
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
  }
`