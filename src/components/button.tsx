import {
  buttonVariantsA,
  buttonVariantsB,
  buttonVariantsC,
  buttonVariantsD,
  buttonVariantsE,
  buttonVariantsF,
} from "../data/button.data";
import StarIcon from "../icons/star";
import "../styles/button.css";

export interface ButtonProps {
  key: string;
  label?: string;
  classNames: string;
  isDisabled?: boolean;
  withText?: boolean;
  withIcon?: boolean;
  iconPosition?: "left" | "right";
  iconSize?: 20 | 24;
}

export function Button(props: ButtonProps) {
  const {
    key,
    label,
    classNames,
    isDisabled,
    withText = true,
    withIcon,
    iconPosition,
    iconSize = 20,
  } = props;

  return (
    <button
      key={key}
      aria-label="label || button"
      className={"flex items-center font-medium" + " " + classNames}
      disabled={isDisabled}
    >
      {withIcon && iconPosition === "left" ? (
        <StarIcon size={iconSize} isDisabled={isDisabled} />
      ) : null}

      {withText ? label : null}

      {withIcon && iconPosition === "right" ? (
        <StarIcon size={iconSize} isDisabled={isDisabled} />
      ) : null}

      {!withText && withIcon && iconPosition === undefined ? (
        <StarIcon size={iconSize} isDisabled={isDisabled} />
      ) : null}
    </button>
  );
}

export default function ButtonPlayground() {
  return (
    <main className="gfe-main">
      <div className="flex max-w-full flex-wrap items-center justify-start gap-5 pb-12 mobileGfe:max-w-[323px]">
        {buttonVariantsA.map((button) => (
          <Button
            key={button.key}
            label={button.label}
            classNames={button.classNames}
            isDisabled={button.isDisabled}
            withText={button.withText}
            withIcon={button.withIcon}
            iconPosition={button.iconPosition}
            iconSize={button.iconSize}
          />
        ))}
      </div>
      {/* Variant B */}
      <div className="flex max-w-full flex-wrap items-center justify-start gap-5 pb-12 mobileGfe:max-w-[323px]">
        {buttonVariantsB.map((button) => (
          <Button
            key={button.key}
            label={button.label}
            classNames={button.classNames}
            isDisabled={button.isDisabled}
            withText={button.withText}
            withIcon={button.withIcon}
            iconPosition={button.iconPosition}
            iconSize={button.iconSize}
          />
        ))}
      </div>
      {/* Variant C */}
      <div className="flex max-w-full flex-wrap items-center justify-start gap-5 pb-12 mobileGfe:max-w-[323px]">
        {buttonVariantsC.map((button) => (
          <Button
            key={button.key}
            label={button.label}
            classNames={button.classNames}
            isDisabled={button.isDisabled}
            withText={button.withText}
            withIcon={button.withIcon}
            iconPosition={button.iconPosition}
            iconSize={button.iconSize}
          />
        ))}
      </div>
      {/* Variant D */}
      <div className="flex max-w-full flex-wrap items-center justify-start gap-5 pb-12 mobileGfe:max-w-[323px]">
        {buttonVariantsD.map((button) => (
          <Button
            key={button.key}
            label={button.label}
            classNames={button.classNames}
            isDisabled={button.isDisabled}
            withText={button.withText}
            withIcon={button.withIcon}
            iconPosition={button.iconPosition}
            iconSize={button.iconSize}
          />
        ))}
      </div>
      {/* Variant E */}
      <div className="flex max-w-full flex-wrap items-center justify-start gap-5 pb-12 mobileGfe:max-w-[323px]">
        {buttonVariantsE.map((button) => (
          <Button
            key={button.key}
            label={button.label}
            classNames={button.classNames}
            isDisabled={button.isDisabled}
            withText={button.withText}
            withIcon={button.withIcon}
            iconPosition={button.iconPosition}
            iconSize={button.iconSize}
          />
        ))}
      </div>
      {/* Variant F */}
      <div className="flex max-w-full flex-wrap items-center justify-start gap-5 mobileGfe:max-w-[323px]">
        {buttonVariantsF.map((button) => (
          <Button
            key={button.key}
            label={button.label}
            classNames={button.classNames}
            isDisabled={button.isDisabled}
            withText={button.withText}
            withIcon={button.withIcon}
            iconPosition={button.iconPosition}
            iconSize={button.iconSize}
          />
        ))}
      </div>
    </main>
  );
}
