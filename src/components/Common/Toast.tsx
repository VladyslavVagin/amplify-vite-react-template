import { FC } from "react";

interface ToastProps {
  message: string;
  isVisible: boolean;
  type?: 'info' | 'success' | 'warning' | 'error';
}

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
