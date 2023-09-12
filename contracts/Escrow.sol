//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface IERC721 {
    function transferFrom(
        address _from,
        address _to,
        uint256 _id
    ) external payable;
}

contract Escrow {
    address nftAddress;
    address payable public seller;
    address public inspector;
    address public lender;

    constructor(
        address _nftAddress,
        address payable _seller,
        address _inspector,
        address _lender
    ) public {
        nftAddress = _nftAddress;
        seller = _seller;
        inspector = _inspector;
        lender = _lender;
    }
}
