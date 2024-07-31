import { useCallback, useState } from 'react';

export const useLocalStorage = (key: string, initialValue: any) => {
  const [state, setState] = useState(() => {
    try {
      const valueStoraged = localStorage?.getItem(key);

      return valueStoraged ? JSON.parse(valueStoraged) : initialValue;
    } catch (err) {
      console.log(err);
      return initialValue;
    }
  });

  // prettier-ignore
  const setValue = useCallback((value) => {
    try {
      localStorage?.setItem(key, JSON.stringify(value));
      setState(value);
    } catch (err) {
      console.log(err);
    }
  }, [key]);

  return [state, setValue];
};

// import { useCallback, useEffect, useState } from 'react';

// export const useLocalStorage = (key: string, initialValue: any) => {
//   // Check if `window` is defined to ensure we're in a client-side environment
//   const [state, setState] = useState(() => {
//     if (typeof window === 'undefined') {
//       return initialValue; // Return initial value if on the server
//     }

//     try {
//       const valueStoraged = window.localStorage.getItem(key);
//       return valueStoraged ? JSON.parse(valueStoraged) : initialValue;
//     } catch (err) {
//       console.error(err);
//       return initialValue;
//     }
//   });

//   const setValue = useCallback((value: any) => {
//     try {
//       if (typeof window !== 'undefined') {
//         window.localStorage.setItem(key, JSON.stringify(value));
//         setState(value);
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   }, [key]);

//   useEffect(() => {
//     if (typeof window === 'undefined') return;

//     try {
//       const valueStoraged = window.localStorage.getItem(key);
//       if (valueStoraged) {
//         setState(JSON.parse(valueStoraged));
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   }, [key]);

//   return [state, setValue];
// };
