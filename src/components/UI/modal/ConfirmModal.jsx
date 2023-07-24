import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 300px;
`;

const ModalHeader = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ModalContent = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 10px;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:first-child {
    background-color: #ff3b3b;
    color: white;
  }

  button:last-child {
    background-color: #00c853;
    color: white;
  }
`;

const ConfirmModal = ({ onConfirm, onCancel }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>Вы точно хотите выйти?</ModalHeader>
        <ModalContent>Нажмите "ДА", чтобы выйти из системы.</ModalContent>
        <ModalActions>
          <button onClick={onConfirm}>ДА</button>
          <button onClick={onCancel}>НЕТ</button>
        </ModalActions>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ConfirmModal;
