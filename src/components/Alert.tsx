import type { ReactNode } from "react";

import classes from "./Alert.module.css";

interface AlertProps {
  label: string;
  onClose: () => void;
  variant?: "primary";
}
const Alert = (props: AlertProps) => {
  return (
    <div className={classes.submit_status}>
      <span className={classes.submit_status_label}>{props.label}</span>

      <button
        type="button"
        className={classes.submit_status__close}
        onClick={props.onClose}
      >
        <img src="/images/cross.svg" alt="" width="18" height="18" />
      </button>
    </div>
  );
};

export default Alert;
