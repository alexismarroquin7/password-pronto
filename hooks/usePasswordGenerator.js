import { useState } from "react";

const option = {
  lower: 'abcdefghijklmnopqrstuvwxyz',
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  digit: '1234567890',
  special: '!@#$%^&*-_=+?.',
  grouping: '(){}[]<>',
  ambig: '\'`\"',
};

const randListItem = (list) => {
  return list[ Math.floor(Math.random() * list.length) ];
}

const initialPassword = {
  generated: '',
  lengthToUse: 8,
  useLower: true,
  useUpper: true,
  useDigit: true,
  useSpecial: true,
  useAmbig: true,
};

export const usePasswordGenerator = () => {
  const [password, setPassword] = useState(initialPassword);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const valueToUse = type === 'checkbox' ? checked : value;

    setPassword({
      ...password,
      [name]: valueToUse
    });
    
  }

  const make = () => {
    const charTypes = [];

    if(password.useLower) {
      charTypes.push('lower')
    }

    if(password.useUpper) {
      charTypes.push('upper')
    }

    if(password.useDigit) {
      charTypes.push('digit')
    }

    if(password.useSpecial) {
      charTypes.push('special')
    }

    if(password.useAmbig) {
      charTypes.push('ambig')
    }

    let newPassword = '';

    for(let i = 0, len = password.lengthToUse; i < len; i++){
      const charType = randListItem(charTypes);
      newPassword += randListItem(option[charType]);
    }

    console.log(newPassword);

    setPassword({
      ...password,
      generated: newPassword
    });
  }

  return {
    password,
    setPassword,
    handleChange,
    make
  };
}