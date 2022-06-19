import { toast as toastLib } from "react-toastify";
import { ToastOptions } from "react-toastify/dist/types";

const toast = {
  success: (message, option?: ToastOptions | undefined) => {
    toastLib.success(message, option);
    setTimeout(() => {
      toastLib.clearWaitingQueue();
    }, 2000);
  },
  error: (message, option?: ToastOptions | undefined) => {
    toastLib.error(message || "네트워크 환경이 불안전합니다.", option);
    setTimeout(() => {
      toastLib.clearWaitingQueue();
    }, 2000);
  },
  info: (message, option?: ToastOptions | undefined) => {
    toastLib.info(message, option);
    setTimeout(() => {
      toastLib.clearWaitingQueue();
    }, 2000);
  },
};

export default toast;
