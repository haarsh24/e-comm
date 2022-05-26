import { Toaster } from "react-hot-toast";

const Toast = () => {
    return (
        <Toaster
        position="top-right"         
      />
    )
}
const dark= {
 
    style: {
      borderRadius: '10px',
      background: '#fff',
      color: '#0D1117',
    },
  }
export { Toast ,dark}
