import styled, { css } from "styled-components";

type ITypes = {
  size?: string;
  margin?: string;
  backgroundColor?: string;
  theme?: any;
  paddingLeft?: string;
};

export const PrimaryButton = styled.button`
  width: ${(props: ITypes) =>
    props.size == "large"
      ? "289px"
      : props.size == "medium"
      ? "150px"
      : props.size == "full"
      ? "100%"
      : ""};
  height: ${(props) =>
    props.size == "large"
      ? "40px"
      : props.size == "medium"
      ? "40px"
      : props.size == "full"
      ? "50px"
      : ""};
  background-color: ${(props) => props.theme.colors.primaryButton};
  outline: none;
  border: none;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.inputBackground || "#fff"};
  font-size: ${(props) => (props.size == "large" ? "17px" : "15px")};
  cursor: pointer;
  margin: ${(props) => props.margin || 0};
  position: relative;
  overflow: hidden;
  font-weight: bold;

  &span {
    z-index: 2;
  }

  &:after {
    background-color: #fff;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.7;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: 1;
  }

  &:hover {
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  &:active {
    transform: scale(0.98);
    transition: linear 0.2s;
  }
`;

export const OutlinedButton = styled.button`
  width: ${(props: ITypes) =>
    props.size == "large"
      ? "289px"
      : props.size == "medium"
      ? "150px"
      : props.size == "full"
      ? "100%"
      : props.size == "small"
      ? "119px"
      : ""};
  height: ${(props) =>
    props.size == "large"
      ? "40px"
      : props.size == "medium"
      ? "40px"
      : props.size == "full"
      ? "40px"
      : props.size == "small"
      ? "29px"
      : ""};
  background-color: transparent;
  outline: none;
  border: solid 1px #68f285;
  border-radius: 4px;
  color: #fff;
  font-size: ${(props: ITypes) =>
    props.size == "large" ? "17px" : props.size == "small" ? "12px" : "15px"};
  cursor: pointer;
  margin: ${(props) => props.margin || 0};
  position: relative;
  overflow: hidden;
  font-weight: bold;

  &span {
    z-index: 2;
  }

  &:after {
    background-color: #fff;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.3;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: 1;
  }

  &:hover {
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  &:active {
    transform: scale(0.98);
    transition: linear 0.2s;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const SecondaryButton = styled.button`
  width: ${(props: ITypes) =>
    props.size == "large"
      ? "289px"
      : props.size == "medium"
      ? "150px"
      : props.size == "full"
      ? "100%"
      : props.size == "small"
      ? "119px"
      : ""};
  height: ${(props) =>
    props.size == "large"
      ? "40px"
      : props.size == "medium"
      ? "40px"
      : props.size == "full"
      ? "40px"
      : props.size == "small"
      ? "29px"
      : ""};
  background-color: ${(props) => props.theme.colors.secondaryButton};
  outline: none;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: ${(props: ITypes) => (props.size == "large" ? "17px" : "15px")};
  cursor: pointer;
  margin: ${(props: ITypes) => props.margin || 0};
  position: relative;
  overflow: hidden;
  font-weight: bold;

  &span {
    z-index: 2;
  }

  &:after {
    background-color: #fff;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.7;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: 1;
  }

  &:hover {
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  &:active {
    transform: scale(0.98);
    transition: linear 0.2s;
  }
`;

export const TercearyButton = styled.button`
  width: ${(props: ITypes) =>
    props.size == "large"
      ? "289px"
      : props.size == "medium"
      ? "150px"
      : props.size == "full"
      ? "100%"
      : props.size == "small"
      ? "119px"
      : ""};
  height: ${(props: ITypes) =>
    props.size == "large"
      ? "40px"
      : props.size == "medium"
      ? "40px"
      : props.size == "full"
      ? "40px"
      : props.size == "small"
      ? "29px"
      : ""};
  background-color: transparent;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: ${(props: ITypes) => (props.size == "large" ? "17px" : "15px")};
  cursor: pointer;
  margin: ${(props: ITypes) => props.margin || 0};
  position: relative;
  overflow: hidden;
  font-weight: bold;

  &span {
    z-index: 2;
  }

  &:after {
    background-color: #fff;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.7;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: 1;
  }

  &:hover {
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  &:active {
    transform: scale(0.98);
    transition: linear 0.2s;
  }
`;

export const BackButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.backButton};
  outline: none;
  border: none;
  border-radius: 4px;
  color: #68f285;
  font-size: 17px;
  cursor: pointer;
  margin: ${(props: ITypes) => props.margin || 0};
  position: relative;
  overflow: hidden;
  font-weight: bold;
  background-image: url("../src/images/layout/back.png");
  background-repeat: no-repeat;
  background-position-x: 20px;
  background-position-y: center;
  background-size: 20px;

  &span {
    z-index: 2;
  }

  &:after {
    background-color: #fff;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.3;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: 1;
  }

  &:hover {
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  &:active {
    transform: scale(0.98);
    transition: linear 0.2s;
  }
`;

export const SaveButton = styled.button`
  width: ${(props: ITypes) =>
    props.size == "large"
      ? "289px"
      : props.size == "medium"
      ? "150px"
      : props.size == "full"
      ? "100%"
      : props.size == "small"
      ? "119px"
      : ""};
  height: ${(props: ITypes) =>
    props.size == "large"
      ? "40px"
      : props.size == "medium"
      ? "40px"
      : props.size == "full"
      ? "40px"
      : props.size == "small"
      ? "29px"
      : ""};
  background-color: #7550b1;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: ${(props: ITypes) =>
    props.size == "large" ? "17px" : props.size == "small" ? "12px" : "15px"};
  cursor: pointer;
  margin: ${(props: ITypes) => props.margin || 0};
  position: relative;
  overflow: hidden;
  font-weight: bold;

  &span {
    z-index: 2;
  }

  &:after {
    background-color: #fff;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.3;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: 1;
  }

  &:hover {
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  &:active {
    transform: scale(0.98);
    transition: linear 0.2s;
  }
`;

export const SwitchInput = styled.div`
  .switch {
    position: absolute;
    margin-left: -9999px;
    visibility: hidden;

    & + label {
      display: block;
      position: relative;
      cursor: pointer;
      outline: none;
      user-select: none;
    }
  }

  .ToggleInput + label {
    padding: 2px;
    width: 32px;
    height: 20px;
    background-color: #6d6d6d;
    border-radius: 25px;
  }

  .ToggleInput + label:before,
  .ToggleInput + label:after {
    display: block;
    position: absolute;
    top: 1px;
    left: 1px;
    bottom: 1px;
    content: "";
  }
  .ToggleInput + label:before {
    right: 1px;
    background-color: #dddddd;
    border-radius: 25px;
    transition: all 0.4s;
  }
  .ToggleInput + label:after {
    width: 18px;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.4s;
  }

  .ToggleInput:checked + label:before {
    background-color: #68f285;
  }
  .ToggleInput:checked + label:after {
    transform: translateX(16px);
  }
`;

export const InputText = styled.input`
  background-color: ${(props: ITypes) =>
    props?.backgroundColor || props.theme.colors.inputBackground};
  color: ${(props: ITypes) => props.theme.colors.inputColor};
  margin: ${(props: ITypes) => props.margin || 0};
  width: ${(props: ITypes) =>
    props.size == "large"
      ? "289px"
      : props.size == "medium"
      ? "150px"
      : props.size == "full"
      ? "100%"
      : ""};
  height: ${(props: ITypes) =>
    props.size == "large"
      ? "40px"
      : props.size == "medium"
      ? "40px"
      : props.size == "full"
      ? "50px"
      : ""};
  font-size: 17px;
  border: 1px solid ${(props: ITypes) => props.theme.colors.inputBorder};
  outline: none;
  border-radius: 8px;
  padding-left: ${(props: ITypes) => props?.paddingLeft || "10px"};
  box-sizing: border-box;
  &:hover {
    box-shadow: 0px 0px 5px
      ${(props: ITypes) => props.theme.colors.highlightedInput};
    transition: all 0.2s;
  }
  &:focus {
    box-shadow: 0px 0px 5px
      ${(props: ITypes) => props.theme.colors.highlightedInput};
  }
`;

export const InputNumber = styled(InputText)`
  height: ${(props) => props.height || "40px"};
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
