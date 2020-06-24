import React from 'react'
import { Radio } from 'antd';

export default function RadioComp({radiovalue,onChange}) {

      
    return (
        <div>
             <Radio.Group onChange={onChange} value={radiovalue}>
        <Radio value="1">A</Radio>
        <Radio value="2">B</Radio>
        <Radio value="3">C</Radio>
        <Radio value="4">D</Radio>
      </Radio.Group>
        </div>
    )
}
