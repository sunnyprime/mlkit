import React from 'react'
import Checkboxcomp from '../Components/Checkboxcomp'
import { Checkbox } from 'antd';

export default function Checkboxpage() {
const defaultCheckedList = ['Apple', 'Orange'];
const CheckboxGroup = Checkbox.Group;
const [checkedList,setcheckList]= React.useState(defaultCheckedList)
const [indeterminate,setindeterminate]= React.useState(true)
const [checkAll,setcheckAll]= React.useState(false)


const plainOptions = ['Apple', 'Pear', 'Orange'];


const onChange = checkedList => {

      setindeterminate(!!checkedList.length && checkedList.length < plainOptions.length)
      setcheckAll(checkedList.length === plainOptions.length);

  }

  const onCheckAllChange = e => {
   
        setcheckList(e.target.checked ? plainOptions : [])
      setindeterminate(false)
      setcheckAll(e.target.checked)

  };
    return (
        <div>
            <Checkboxcomp checkedList={checkedList} 
            indeterminate={indeterminate} checkAll={checkAll} 
            indeterminate={indeterminate} plainOptions={plainOptions} 
            CheckboxGroup={CheckboxGroup} 
            onCheckAllChange={onCheckAllChange} onChange={onChange} />
        </div>
    )
}
