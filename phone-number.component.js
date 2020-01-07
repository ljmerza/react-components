import React from 'react';
import { AsYouType, formatIncompletePhoneNumber } from 'libphonenumber-js';

import { Input } from 'modules/common';

function PhoneNumberText({ onChange, name, value, ...props }) {
  const onPhoneChange = event => {
  
    // issue: https://github.com/catamphetamine/libphonenumber-js/issues/225
    let newValue = event.target.value ? new AsYouType('US').input(event.target.value) : '';
    const newValueFormatted = formatIncompletePhoneNumber(value, 'US');

    if (newValue === newValueFormatted && newValueFormatted.indexOf(event.target.value) === 0) {
      newValue = newValue.slice(0, -1);
    }

    onChange({ target: { name, value: newValue } });
  };

  return <Input type="text" onChange={onPhoneChange} value={value} {...props} />;
}

export default PhoneNumberText;
