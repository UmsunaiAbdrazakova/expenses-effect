import React, { useState } from "react";
import { styled } from "styled-components";
import Button from "../UI/button/Button";
import ConfirmModal from "../UI/modal/ConfirmModal";

const Header = ({ onShowUsers, onLogout }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleLogout = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmLogout = () => {
    onLogout();
    setShowConfirmModal(false);
  };

  const handleCancelLogout = () => {
    setShowConfirmModal(false);
  };

  return (
    <>
      <StyledHeader>
        <Button>Expenses</Button>
        <Button onClick={onShowUsers}>Users</Button>
        <Button onClick={handleLogout} bgColor={"dark"}>
          Logout
        </Button>
      </StyledHeader>
      {showConfirmModal && (
        <ConfirmModal
          onConfirm={handleConfirmLogout}
          onCancel={handleCancelLogout}
        />
      )}
    </>
  );
};

const StyledHeader = styled("header")`
  padding: 1rem;
  background-color: #c2b4f2;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  min-height: 5rem;
`;

export default Header;
