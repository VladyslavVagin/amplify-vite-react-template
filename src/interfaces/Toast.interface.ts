export interface ToastProps {
    message: string;
    isVisible: boolean;
    type?: ToastType;
  }

type ToastType = 'info' | 'success' | 'warning' | 'error';