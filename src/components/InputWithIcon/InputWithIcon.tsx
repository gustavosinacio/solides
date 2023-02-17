import { IconProps } from "phosphor-react";
import styles from "./InputWithIcon.module.css";

type InputWithIconProps = {
  inputClassName?: string;
  wrapperClassName?: string;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
};

export const InputWithIcon: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > &
    InputWithIconProps
> = ({ inputClassName, wrapperClassName, icon: Icon, ...props }) => {
  return (
    <div className={`${styles["input-wrapper"]} ${wrapperClassName}`}>
      <Icon />

      <input
        className={`${styles["input-with-icon"]} ${inputClassName}`}
        {...props}
      />
    </div>
  );
};
