// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.7;

import "hardhat/console.sol";

contract Transactions {
    // PLACE ENERGY UP FOR SALE IN THE AVAILABEL OPTIONS
    struct AvailableOptionStruct {
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
        availableOptions.push(
            AvailableOptionStruct(
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
    event Transfer(
        address sender,
        address receiverAddress,
        uint amountOfPower,
        uint pricePerKW,
        string duration,
        string timeToStart
    );

    struct TransferStruct {
        address sender;
        address receiver;
        uint amountOfPower;
        uint pricePerKW;
        string duration;
        string timeToStart;
    }

    TransferStruct[] transactions;

    //  SEND ENERGY
    function addToBlockchain(
        address receiverAddress, // Address of the buyer
        uint amountOfPower, // Amount of Power in KW
        uint pricePerKW, // Price of Power
        string memory duration, // Duration of Power Suppply
        string memory timeToStart // Time of supply
    ) public {
        transactionCount += 1; // Increment the transaction count

        // Add transaction to the list of other transactions
        transactions.push(
            TransferStruct(
                msg.sender,
                receiverAddress,
                amountOfPower,
                pricePerKW,
                duration,
                timeToStart
            )
        );
    }

    // COMMUNITY MANGER TO APPROVE TRANSACTION
    function approveTransaction(
        address receiverAddress, // Address of the Buyer
        uint amountOfPower, // Address of the Seller
        uint pricePerKW, // Price of Power
        string memory duration, // Duration of Power Suppply
        string memory timeToStart // Time of supply
    ) public {
        emit Transfer(
            msg.sender,
            receiverAddress,
            amountOfPower * pricePerKW,
            pricePerKW,
            duration,
            timeToStart
        );
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
}
