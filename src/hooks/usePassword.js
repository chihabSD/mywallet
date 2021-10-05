import {useState} from 'react';

const usePassword = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePassword = () => {
    setPasswordVisible(prevState => !prevState);
  };
  return {togglePassword, passwordVisible};
};
export {usePassword};
