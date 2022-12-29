pragma solidity ^0.8.9;

contract Contact {

   function callAttempt(address winner) external {
      (bool success, ) = winner.call(
           abi.encodeWithSignature("attempt()")
        );
        require(success);   
   }
}