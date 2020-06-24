import React from 'react'
import { Checkbox } from 'antd';

export default function Checkboxcomp({onCheckAllChange, onChange, CheckboxGroup,plainOptions,indeterminate,checkAll,checkedList}) {
    return (
        <div>
            <div>
        <div className="site-checkbox-all-wrapper">
          <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
          >
            Check all
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup
          options={plainOptions}
          value={checkedList}
          onChange={onChange}
        />
      </div>
        </div>
    )
}
