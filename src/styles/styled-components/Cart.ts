import styled from 'styled-components'

export const CartTable = styled.table`
  width: 600px;
  /* border: solid 3px purple; */
  th,
  td {
    width: 200px;
    border-bottom: 1px solid #c7c7c7;
    /* border-left: 1px solid #c7c7c7; */
    /* background: green; */
  }
  .productInfo {
    /* background: gray; */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px 0;
  }
  .productQtdd {
    center {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      height: 85px;
      /* background: gray; */
      /* padding: 10px 0; */
      input {
        text-align: right;
        width: 80px;
      }
      svg {
        cursor: pointer;
      }
    }
  }

  p {
    text-align: end;
    padding: 0 10px;
  }
  .thItem {
    text-align: left;
    padding-right: 130px;
    /* background: #e5e; */
    /* padding: 0 0px; */
  }

  h1 {
    margin: 30px 0;
  }
`

export const CartTotal = styled.div`
  border: 1px solid #c7c7c7;
  width: 100%;
  max-width: 300px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 10px;
  min-height: 300px;
`
