import React from 'react';
import { Input } from 'modules/common';


function checkValue(str, max) {
    if (str.charAt(0) !== '0' || str == '00') {
        var num = parseInt(str);
        if (isNaN(num) || num <= 0 || num > max) num = 1;
        str = num > parseInt(max.toString().charAt(0)) && num.toString().length == 1 ? '0' + num : num.toString();
    };
    return str;
};

function DobText({ onChange, name, ...props }) {

    const onChangeDob = ({ target: { value } }) => {
        let input = value;
        if(/\D\/$/.test(input)) input = input.substr(0, input.length - 3);

        let values = input.split('/').map(v => v.replace(/\D/g, ''));
        if (values[0]) values[0] = checkValue(values[0], 12);
        if (values[1]) values[1] = checkValue(values[1], 31);

        let output = values.map((v, i) => v.length == 2 && i < 2 ? v + ' / ' : v);
        output = output.join('').substr(0, 14);

        onChange({ target: { name, value: output }})
    }

    return <Input type="text" onChange={onChangeDob} {...props} />;
}

DobText.propTypes = {
};

export default DobText;
