import { FC } from "react";

import type { ToastProps } from "../../interfaces";

const Toast: FC<ToastProps> = ({ message, isVisible, type = 'info' }) => {
  if (!isVisible) return null;

  const alertClass = `alert alert-${type}`;

  return (
    <div className="toast toast-top toast-end">
      <div className={alertClass}>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
