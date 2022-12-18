// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.7;

import "hardhat/console.sol";

contract Transactions {
    uint public id;

    function getId() public returns (uint) {
        return id += 1;
    }

    // PLACE ENERGY UP FOR SALE IN THE AVAILABEL OPTIONS
    uint256 availableOptionsCount;

    struct AvailableOptionStruct {
        uint id;
        address sender;
        string powerSource;
        string amountOfPower;
        string pricePerKW;
        string duration;
        string timeToStart;
    }

    AvailableOptionStruct[] public availableOptions;

    // function to list energy up for sale in the available options
    function addToAvailableOptions(
        string memory powerSource, // Source of generated power
        string memory amountOfPower, // Amount of Power Generated
        string memory pricePerKW, // Price per KW
        string memory duration, // Duration of Power Suppply
        string memory timeToStart // Time of supply
    ) public {
        getId();
        availableOptions.push(
            AvailableOptionStruct(
                id,
                msg.sender,
                powerSource,
                amountOfPower,
                pricePerKW,
                duration,
                timeToStart
            )
        );
    }

    function getAvailableOptions()
        public
        view
        returns (AvailableOptionStruct[] memory)
    {
        return availableOptions;
    }

    //////////////////////////////////
    /////////////// BUY //////////////
    //////////////////////////////////
    uint256 transactionCount;

    event Transfer(address sender, address receiverAddress, uint parsedAmount);

    struct TransferStruct {
        address sender;
        address receiver;
        uint amountOfPower;
        uint pricePerKW;
        uint parsedAmount;
    }

    TransferStruct[] transactions;

    //  BUY ENERGY
    function addToBlockchain(
        address receiverAddress, // Address of the buyer
        uint amountOfPower, // Amount of Power in KW
        uint pricePerKW, // Price of Power
        uint parsedAmount
    ) public {
        transactionCount += 1;
        transactions.push(
            TransferStruct(
                msg.sender,
                receiverAddress,
                amountOfPower,
                pricePerKW,
                parsedAmount
            )
        );
        emit Transfer(msg.sender, receiverAddress, parsedAmount);
    }

    function getAllTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }

    /////////////////////////////////////////////////////
    /////////////////// APPROVE /////////////////////////
    /////////////////////////////////////////////////////

    // COMMUNITY MANGER TO APPROVE TRANSACTION
    // function approveTransaction(
    //     address receiverAddress,
    //     uint parsedAmount
    // ) public {
    //     emit Transfer(msg.sender, receiverAddress, parsedAmount);
    // }
}
