import { useState } from "react";

export const charTypeOption = {
  lower: 'abcdefghijklmnopqrstuvwxyz',
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  digit: '1234567890',
  special: '!@#$%^&*-_=+?.',
  group: '(){}[]<>/\\',
  ambig: '\'`\"|',
};

const randListItem = (list) => {
  return list[ Math.floor(Math.random() * list.length) ];
}

const initialPassword = {
  generated: '',
  lengthToUse: 12,
  useLower: true,
  useUpper: true,
  useDigit: true,
  useSpecial: true,
  useGroup: false,
  useAmbig: false,
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
      charTypes.push('lower');
    }

    if(password.useUpper) {
      charTypes.push('upper');
    }

    if(password.useDigit) {
      charTypes.push('digit');
    }

    if(password.useSpecial) {
      charTypes.push('special');
    }
    
    if(password.useGroup) {
      charTypes.push('group');
    }

    if(password.useAmbig) {
      charTypes.push('ambig');
    }

    let newPassword = '';

    for(let i = 0, len = password.lengthToUse; i < len; i++){
      const charType = randListItem(charTypes);
      newPassword += randListItem(charTypeOption[charType]);
    }

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