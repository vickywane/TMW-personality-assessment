import { ButtonProps } from "@/utils/types";
import cn from "classnames";

/**
 * A button component.
 * @param {ButtonProps} props - The properties of the button.
 * @param {boolean} props.disabled - Indicates whether the button is disabled.
 * @param {Function} props.onClick - The function to be called when the button is clicked.
 * @param {string} props.title - The title or text content of the button.
 * @param {boolean} [props.hidden=false] - Indicates whether the button should be hidden. Defaults to false.
 * @param {string} [props.styleClass=""] - Additional CSS class names to be applied to the button.
 * @returns {JSX.Element | null} The button element or null if hidden is true.
 */
const Button = ({
  disabled,
  onClick,
  title,
  hidden,
  styleClass,
}: ButtonProps) => {
  if (hidden) return null;

  return (
    <button
      {...{ disabled, onClick }}
      className={cn(
        "text-white font-medium py-2 px-8 rounded-full",
        styleClass
      )}
    >
      {title}
    </button>
  );
};

export default Button;
