// import React from 'react';
import "./Sunglass.css"
import { add, multiply,divideTheFirstNumberByTheSecondNumber as divide } from '../../Utils/calculate';
// import add from '../../Utils/calculate';


const Sunglass = () => {
    const first = 30;
    const second = 40;
    const sum = add(first, second); 
    const  mul = multiply(first, second)
    const vag = divide(first,second);
    console.log(sum,mul,vag)

    return (
        <div>
            
        </div>
    );
};

export default Sunglass;