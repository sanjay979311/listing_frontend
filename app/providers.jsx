
// "use client";

// import { Provider } from "react-redux";
// import { store } from "../redux/store"; // import persistor
// import { PersistGate } from "redux-persist/integration/react";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Providers({ children }) {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} >
//         {children}
//         {/* Global Toast notifications */}
//         <ToastContainer
//           position="top-right"
//           autoClose={3000}
//           hideProgressBar={false}
//           newestOnTop
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="colored"
//         />
//       </PersistGate>
//     </Provider>
//   );
// }

"use client";

import { Provider } from "react-redux";
import { store, persistor } from "../redux/store"; 
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}

        {/* Global Toast notifications */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </PersistGate>
    </Provider>
  );
}
