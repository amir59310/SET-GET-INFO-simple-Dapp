// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract example {
    string public result;
    uint public value;

    function myFunction() public {
        // انجام عملیات مورد نیاز
        // به عنوان مثال، در اینجا یک مقدار ثابت به عنوان نمونه استفاده شده است.
        result = "Hello from Solidity!";
    }
    
    function setValue(uint _value) public {
        value = _value;
    }
}
