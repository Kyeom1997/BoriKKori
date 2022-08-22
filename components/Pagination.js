import styled from 'styled-components';
import React from 'react';

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <Nav>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </Button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <Button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? 'page' : null}
          >
            {i + 1}
          </Button>
        ))}
      <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        &gt;
      </Button>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  border: 1px solid #ededed;
  margin: 0;
  background-color: white;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }

  &[aria-current] {
    background-color: #ededed;
    color: #5f0080;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;
