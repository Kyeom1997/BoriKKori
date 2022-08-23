import React, { useState, useEffect} from 'react';
import styled from 'styled-components';

const SubComment = () => {

const [subCommentDataList,setSubCommentDataList] = useState();

useEffect(() => {
    fetch('data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setSubCommentDataList(data.result);
      });
  }, []);


    return (
<SubWrapper>
      {subCommentDataList?.map(({id,user_name,content})=>(
      <SubCommentBox key={id}>
      <SubCommentIcon src='/images/subCommentGray.png' />
      <SubCommentWrapper>
      <InfoBox>
        <SubUserId>{user_name}</SubUserId>
        <SubComments>{content}</SubComments>
      </InfoBox>
     
      </SubCommentWrapper>
    </SubCommentBox>
      )) 
      }
       <UpLoadBox>
        <CommentUpLoadInput/>
        <SubUpLoadBtn>등록</SubUpLoadBtn>
      </UpLoadBox>
      </SubWrapper>
    );
};

const SubWrapper = styled.div`

`;

const SubCommentBox = styled.div`
display: flex;
margin-left: 84px;
margin-top: 30px;
`;

const SubCommentIcon = styled.img`
padding: 5px;
width:30px;
height:30px;
margin-right: 10px;
`;

const SubCommentWrapper = styled.div`

`;

const InfoBox = styled.div`

`;


const SubUserId = styled.p`
font-size: 18px;
font-weight: bold;
margin: 6px 0;
`;


const SubComments = styled.p`
margin: 15px 0 25px 0;
font-size: 20px;
`;


const UpLoadBox = styled.div`
display: flex;
margin-left: 84px;
margin-top: 30px;
`;


const CommentUpLoadInput = styled.input`
width:599px;
height: 50px;
border-radius: 3px;
padding: 15px;
border-style: none;
background-color: #F7F7F7;
border-radius: 3px;
font-size: 20px;

`;


const SubUpLoadBtn = styled.button`
width:90px;
height: 50px;
margin-left:15px;
background-color: #B5B5B5;
border-style: none;
border-radius: 3px;
color: white;
font-weight: bold;
:hover{
    background-color: rgb(150, 150,150);
}
`;

export default SubComment;