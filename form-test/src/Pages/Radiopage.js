import React from 'react'
import RadioComp from '../Components/RadioComp';

export default function Radiopage() {
    const [radiovalue, setradiovalue] = React.useState("1")
    // var radiovalue = "1"
    const  onChange = e => {
        console.log('radio checked', e.target.value);
        // this.setState({
        //   value: e.target.value,
        // });
        setradiovalue(e.target.value)
        console.log(radiovalue);
      };
    return (
        <div>
            <RadioComp onChange={onChange} radiovalue={radiovalue} />
        </div>
    )
}
