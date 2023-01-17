import React from "react";
import styled, { CSSProperties } from "styled-components";

interface Props {
  label?: string;
  placeholder?: string;
  onChange?: () => {};
  style?: CSSProperties;
  type?: string;
}

const TextField = ({
  label,
  placeholder,
  onChange,
  style,
  type,
  ...rest
}: Props) => {
  return (
    <Container label={label}>
      {label && <Label>{label}</Label>}
      <EleInput
        style={style}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
    </Container>
  );
};

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  margin-left: 5px;

  width: 100%;
  height: 22px;

  flex: none;
  order: 0;
  flex-grow: 0;

  ${({ theme }) => theme.typo.B4_R}

  letter-spacing: -0.01em;

  color: #ffffff;

  flex: none;
  flex-grow: 0;
`;

const EleInput = styled.input`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
  gap: 192px;

  width: 333px;
  height: 52px;

  border: 1px solid #7f848b;
  border-radius: 8px;

  flex: none;
  order: 1;
  flex-grow: 0;

  background-color: transparent;

  color: white;

  ${({ theme }) => theme.typo.B3_R}
`;

const Container = styled.div<{ label?: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 4px;

  width: 333px;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export default TextField;
