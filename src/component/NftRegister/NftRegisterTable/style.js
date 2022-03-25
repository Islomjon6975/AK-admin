import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 1526px;
height: 627px;
background: #FFFFFF;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
border-radius: 12px;
padding: 34px 50px;
.nftreg{
width: 30px;
height: 19px;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
text-align: center;
color: #FFFFFF;
width: 162px;
height: 44px;
background: #4876EF;
border-radius: 8px;
margin-left: 1270px;
margin-top: 24px;
}

`
Container.Title = styled.div`
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
color: #000000;
margin-bottom: 20px;
`
Container.Border = styled.div`
border: 1px solid #F6F6F6;
`
export const Tabble = styled.div`
width: 100%;
display: flex;
margin-top: 8px;
margin-bottom: 10px;
padding-right: ${({ left }) => (left ? "645px" : "739px")} ; 
p{
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;

color: #000000;
}
select{
  padding-left: 15px;
  margin-left: auto;
  width: 431px;
height: 38px;
background: #FFFFFF;
border: 1px solid #D9D9D9;
box-sizing: border-box;
border-radius: 8px;
}.file{
width: 80px;
height: 38px;
border: 1px solid #4876EF;
border-radius: 8px;
margin-left: 14px;
}
.nftreg{
width: 30px;
height: 19px;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
text-align: center;
color: #FFFFFF;
width: 162px;
height: 44px;
background: #4876EF;
border-radius: 8px;
margin-left: 1270px;
margin-top: 24px;
}
input{
  margin-left: auto;
  padding-left: 20px;
  width: 431px;
height: 38px;
background: #FFFFFF;
border: 1px solid #D9D9D9;
box-sizing: border-box;
border-radius: 8px;
}

`