import { ButtonProps } from "../components/button";

type IButtonVariants = ButtonProps[];

const buttonLabel = "Button CTA";

const buttonVariantsA: IButtonVariants = [
  {
    // isDisabled: true,
    key: `${buttonLabel}-primary-md`,
    label: buttonLabel,
    classNames: "button-md button-primary",
  },
  {
    // isDisabled: true,
    key: `${buttonLabel}-primary-lg`,
    label: buttonLabel,
    classNames: "button-lg button-primary",
    withIcon: true,
    iconPosition: "left",
  },
  {
    // isDisabled: true,
    key: `${buttonLabel}-primary-xl`,
    label: buttonLabel,
    classNames: "button-xl button-primary",
    withIcon: true,
    iconPosition: "right",
  },
  {
    // isDisabled: true,
    key: `${buttonLabel}-primary-2xl`,
    label: buttonLabel,
    classNames: "button-2xl button-primary",
  },
  {
    // isDisabled: true,
    key: `${buttonLabel}-primary-2xl`,
    label: buttonLabel,
    classNames: "button-icon-2xl button-primary",
    withText: false,
    withIcon: true,
    iconSize: 24,
  },
];

const buttonVariantsB: IButtonVariants = [
  {
    // isDisabled: true,
    key: `${buttonLabel}-secondary-md`,
    label: buttonLabel,
    classNames: "button-md button-secondary",
  },
  {
    // isDisabled: true,
    key: `${buttonLabel}-secondary-lg`,
    label: buttonLabel,
    classNames: "button-lg button-secondary",
    withIcon: true,
    iconPosition: "left",
  },
  {
    // isDisabled: true,
    key: `${buttonLabel}-secondary-xl`,
    label: buttonLabel,
    classNames: "button-xl button-secondary",
    withIcon: true,
    iconPosition: "right",
  },
  {
    // isDisabled: true,
    key: `${buttonLabel}-secondary-2xl`,
    label: buttonLabel,
    classNames: "button-2xl button-secondary",
  },
  {
    // isDisabled: true,
    key: `${buttonLabel}-secondary-2xl`,
    label: buttonLabel,
    classNames: "button-icon-2xl button-secondary",
    withText: false,
    withIcon: true,
    iconSize: 24,
  },
];

const buttonVariantsC: IButtonVariants = [
  {
    // isDisabled: true,
    key: `${buttonLabel}-tertiary-md`,
    label: buttonLabel,
    classNames: "button-md button-tertiary",
  },
  {
    // isDisabled: true,
    key: `${buttonLabel}-tertiary-lg`,
    label: buttonLabel,
    classNames: "button-lg button-tertiary",
    withIcon: true,
    iconPosition: "left",
  },
  {
    // isDisabled: true,
    key: `${buttonLabel}-tertiary-xl`,
    label: buttonLabel,
    classNames: "button-xl button-tertiary",
    withIcon: true,
    iconPosition: "right",
  },
  {
    // isDisabled: true,
    key: `${buttonLabel}-tertiary-2xl`,
    label: buttonLabel,
    classNames: "button-2xl button-tertiary",
  },
  {
    // isDisabled: true,
    key: `${buttonLabel}-tertiary-2xl`,
    label: buttonLabel,
    classNames: "button-icon-2xl button-tertiary",
    withText: false,
    withIcon: true,
    iconSize: 24,
  },
];

const buttonVariantsD: IButtonVariants = [
  {
    // isDisabled: true,
    key: `${buttonLabel}-linkColor-md`,
    label: buttonLabel,
    classNames: "button-md-linkColor button-linkColor",
  },
  {
    // isDisabled: true,
    key: `${buttonLabel}-linkColor-lg`,
    label: buttonLabel,
    classNames: "button-lg-linkColor button-linkColor",
    withIcon: true,
    iconPosition: "left",
  },
  {
    // isDisabled: true,
    key: `${buttonLabel}-linkColor-xl`,
    label: buttonLabel,
    classNames: "button-xl-linkColor button-linkColor",
    withIcon: true,
    iconPosition: "right",
  },
  {
    // isDisabled: true,
    key: `${buttonLabel}-linkColor-2xl`,
    label: buttonLabel,
    classNames: "button-2xl-linkColor button-linkColor",
  },
  {
    // isDisabled: true,
    key: `${buttonLabel}-linkColor-2xl`,
    label: buttonLabel,
    classNames: "button-2xl-linkColor button-linkColor",
    withText: false,
    withIcon: true,
    iconSize: 24,
  },
];

const buttonVariantsE: IButtonVariants = [
  {
    // isDisabled: true,
    key: `${buttonLabel}-linkGray-md`,
    label: buttonLabel,
    classNames: "button-2xl-linkGray button-linkGray",
  },
  {
    // isDisabled: true,
    key: `${buttonLabel}-linkGray-lg`,
    label: buttonLabel,
    classNames: "button-lg-linkGray button-linkGray",
    withIcon: true,
    iconPosition: "left",
  },
  {
    // isDisabled: true,
    key: `${buttonLabel}-linkGray-xl`,
    label: buttonLabel,
    classNames: "button-xl-linkGray button-linkGray",
    withIcon: true,
    iconPosition: "right",
  },
  {
    // isDisabled: true,
    key: `${buttonLabel}-linkGray-2xl`,
    label: buttonLabel,
    classNames: "button-2xl-linkGray button-linkGray",
  },
  {
    //isDisabled: true,
    key: `${buttonLabel}-linkGray-2xl`,
    label: buttonLabel,
    classNames: "button-2xl-linkGray button-linkGray",
    withText: false,
    withIcon: true,
    iconSize: 24,
  },
];

const buttonVariantsF: IButtonVariants = [
  {
    // isDisabled: true,
    key: `${buttonLabel}-destructive-md`,
    label: buttonLabel,
    classNames: "button-md button-destructive",
  },
  {
    // isDisabled: true,
    key: `${buttonLabel}-destructive-lg`,
    label: buttonLabel,
    classNames: "button-lg button-destructive",
    withIcon: true,
    iconPosition: "left",
  },
  {
    // isDisabled: true,
    key: `${buttonLabel}-destructive-xl`,
    label: buttonLabel,
    classNames: "button-xl button-destructive",
    withIcon: true,
    iconPosition: "right",
  },
  {
    // isDisabled: true,
    key: `${buttonLabel}-destructive-2xl`,
    label: buttonLabel,
    classNames: "button-2xl button-destructive",
  },
  {
    // isDisabled: true,
    key: `${buttonLabel}-destructive-2xl`,
    label: buttonLabel,
    classNames: "button-2xl button-destructive",
    withText: false,
    withIcon: true,
    iconSize: 24,
  },
];

export {
  buttonVariantsA,
  buttonVariantsB,
  buttonVariantsC,
  buttonVariantsD,
  buttonVariantsE,
  buttonVariantsF,
};
