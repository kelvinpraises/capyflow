const data = {
  name: "Allo",
  address: "0x983d25586AC2f6f56308dB532b6309A4A7c22aE6",
  abi: [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_poolId",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "_manager",
          type: "address",
        },
      ],
      name: "addPoolManager",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_strategy",
          type: "address",
        },
      ],
      name: "addToCloneableStrategies",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_poolId",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "_data",
          type: "bytes",
        },
      ],
      name: "allocate",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "ALLOCATION_ACTIVE",
      type: "error",
    },
    {
      inputs: [],
      name: "ALLOCATION_NOT_ACTIVE",
      type: "error",
    },
    {
      inputs: [],
      name: "ALLOCATION_NOT_ENDED",
      type: "error",
    },
    {
      inputs: [],
      name: "ALREADY_INITIALIZED",
      type: "error",
    },
    {
      inputs: [],
      name: "AMOUNT_MISMATCH",
      type: "error",
    },
    {
      inputs: [],
      name: "ANCHOR_ERROR",
      type: "error",
    },
    {
      inputs: [],
      name: "ARRAY_MISMATCH",
      type: "error",
    },
    {
      inputs: [],
      name: "INVALID",
      type: "error",
    },
    {
      inputs: [],
      name: "INVALID_ADDRESS",
      type: "error",
    },
    {
      inputs: [],
      name: "INVALID_FEE",
      type: "error",
    },
    {
      inputs: [],
      name: "INVALID_METADATA",
      type: "error",
    },
    {
      inputs: [],
      name: "INVALID_REGISTRATION",
      type: "error",
    },
    {
      inputs: [],
      name: "IS_APPROVED_STRATEGY",
      type: "error",
    },
    {
      inputs: [],
      name: "MISMATCH",
      type: "error",
    },
    {
      inputs: [],
      name: "NONCE_NOT_AVAILABLE",
      type: "error",
    },
    {
      inputs: [],
      name: "NON_ZERO_VALUE",
      type: "error",
    },
    {
      inputs: [],
      name: "NOT_APPROVED_STRATEGY",
      type: "error",
    },
    {
      inputs: [],
      name: "NOT_ENOUGH_FUNDS",
      type: "error",
    },
    {
      inputs: [],
      name: "NOT_IMPLEMENTED",
      type: "error",
    },
    {
      inputs: [],
      name: "NOT_INITIALIZED",
      type: "error",
    },
    {
      inputs: [],
      name: "NOT_PENDING_OWNER",
      type: "error",
    },
    {
      inputs: [],
      name: "NewOwnerIsZeroAddress",
      type: "error",
    },
    {
      inputs: [],
      name: "NoHandoverRequest",
      type: "error",
    },
    {
      inputs: [],
      name: "POOL_ACTIVE",
      type: "error",
    },
    {
      inputs: [],
      name: "POOL_INACTIVE",
      type: "error",
    },
    {
      inputs: [],
      name: "RECIPIENT_ALREADY_ACCEPTED",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "recipientId",
          type: "address",
        },
      ],
      name: "RECIPIENT_ERROR",
      type: "error",
    },
    {
      inputs: [],
      name: "RECIPIENT_NOT_ACCEPTED",
      type: "error",
    },
    {
      inputs: [],
      name: "REGISTRATION_ACTIVE",
      type: "error",
    },
    {
      inputs: [],
      name: "REGISTRATION_NOT_ACTIVE",
      type: "error",
    },
    {
      inputs: [],
      name: "UNAUTHORIZED",
      type: "error",
    },
    {
      inputs: [],
      name: "Unauthorized",
      type: "error",
    },
    {
      inputs: [],
      name: "ZERO_ADDRESS",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "poolId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "BaseFeePaid",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "baseFee",
          type: "uint256",
        },
      ],
      name: "BaseFeeUpdated",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "uint256[]",
          name: "_poolIds",
          type: "uint256[]",
        },
        {
          internalType: "bytes[]",
          name: "_datas",
          type: "bytes[]",
        },
      ],
      name: "batchAllocate",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256[]",
          name: "_poolIds",
          type: "uint256[]",
        },
        {
          internalType: "bytes[]",
          name: "_data",
          type: "bytes[]",
        },
      ],
      name: "batchRegisterRecipient",
      outputs: [
        {
          internalType: "address[]",
          name: "recipientIds",
          type: "address[]",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "cancelOwnershipHandover",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "pendingOwner",
          type: "address",
        },
      ],
      name: "completeOwnershipHandover",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "_profileId",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "_strategy",
          type: "address",
        },
        {
          internalType: "bytes",
          name: "_initStrategyData",
          type: "bytes",
        },
        {
          internalType: "address",
          name: "_token",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_amount",
          type: "uint256",
        },
        {
          components: [
            {
              internalType: "uint256",
              name: "protocol",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "pointer",
              type: "string",
            },
          ],
          internalType: "struct Metadata",
          name: "_metadata",
          type: "tuple",
        },
        {
          internalType: "address[]",
          name: "_managers",
          type: "address[]",
        },
      ],
      name: "createPool",
      outputs: [
        {
          internalType: "uint256",
          name: "poolId",
          type: "uint256",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "_profileId",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "_strategy",
          type: "address",
        },
        {
          internalType: "bytes",
          name: "_initStrategyData",
          type: "bytes",
        },
        {
          internalType: "address",
          name: "_token",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_amount",
          type: "uint256",
        },
        {
          components: [
            {
              internalType: "uint256",
              name: "protocol",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "pointer",
              type: "string",
            },
          ],
          internalType: "struct Metadata",
          name: "_metadata",
          type: "tuple",
        },
        {
          internalType: "address[]",
          name: "_managers",
          type: "address[]",
        },
      ],
      name: "createPoolWithCustomStrategy",
      outputs: [
        {
          internalType: "uint256",
          name: "poolId",
          type: "uint256",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_poolId",
          type: "uint256",
        },
        {
          internalType: "address[]",
          name: "_recipientIds",
          type: "address[]",
        },
        {
          internalType: "bytes",
          name: "_data",
          type: "bytes",
        },
      ],
      name: "distribute",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_poolId",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_amount",
          type: "uint256",
        },
      ],
      name: "fundPool",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "grantRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "_registry",
          type: "address",
        },
        {
          internalType: "address payable",
          name: "_treasury",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_percentFee",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_baseFee",
          type: "uint256",
        },
      ],
      name: "initialize",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint8",
          name: "version",
          type: "uint8",
        },
      ],
      name: "Initialized",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "pendingOwner",
          type: "address",
        },
      ],
      name: "OwnershipHandoverCanceled",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "pendingOwner",
          type: "address",
        },
      ],
      name: "OwnershipHandoverRequested",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "oldOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "percentFee",
          type: "uint256",
        },
      ],
      name: "PercentFeeUpdated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "poolId",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "profileId",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "contract IStrategy",
          name: "strategy",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          components: [
            {
              internalType: "uint256",
              name: "protocol",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "pointer",
              type: "string",
            },
          ],
          indexed: false,
          internalType: "struct Metadata",
          name: "metadata",
          type: "tuple",
        },
      ],
      name: "PoolCreated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "poolId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "fee",
          type: "uint256",
        },
      ],
      name: "PoolFunded",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "poolId",
          type: "uint256",
        },
        {
          components: [
            {
              internalType: "uint256",
              name: "protocol",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "pointer",
              type: "string",
            },
          ],
          indexed: false,
          internalType: "struct Metadata",
          name: "metadata",
          type: "tuple",
        },
      ],
      name: "PoolMetadataUpdated",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_token",
          type: "address",
        },
        {
          internalType: "address",
          name: "_recipient",
          type: "address",
        },
      ],
      name: "recoverFunds",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_poolId",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "_data",
          type: "bytes",
        },
      ],
      name: "registerRecipient",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "registry",
          type: "address",
        },
      ],
      name: "RegistryUpdated",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_strategy",
          type: "address",
        },
      ],
      name: "removeFromCloneableStrategies",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_poolId",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "_manager",
          type: "address",
        },
      ],
      name: "removePoolManager",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "renounceRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "requestOwnershipHandover",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "revokeRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "previousAdminRole",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "newAdminRole",
          type: "bytes32",
        },
      ],
      name: "RoleAdminChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleGranted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleRevoked",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "strategy",
          type: "address",
        },
      ],
      name: "StrategyApproved",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "strategy",
          type: "address",
        },
      ],
      name: "StrategyRemoved",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "treasury",
          type: "address",
        },
      ],
      name: "TreasuryUpdated",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_baseFee",
          type: "uint256",
        },
      ],
      name: "updateBaseFee",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_percentFee",
          type: "uint256",
        },
      ],
      name: "updatePercentFee",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_poolId",
          type: "uint256",
        },
        {
          components: [
            {
              internalType: "uint256",
              name: "protocol",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "pointer",
              type: "string",
            },
          ],
          internalType: "struct Metadata",
          name: "_metadata",
          type: "tuple",
        },
      ],
      name: "updatePoolMetadata",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_registry",
          type: "address",
        },
      ],
      name: "updateRegistry",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address payable",
          name: "_treasury",
          type: "address",
        },
      ],
      name: "updateTreasury",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "DEFAULT_ADMIN_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getBaseFee",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getFeeDenominator",
      outputs: [
        {
          internalType: "uint256",
          name: "FEE_DENOMINATOR",
          type: "uint256",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [],
      name: "getPercentFee",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_poolId",
          type: "uint256",
        },
      ],
      name: "getPool",
      outputs: [
        {
          components: [
            {
              internalType: "bytes32",
              name: "profileId",
              type: "bytes32",
            },
            {
              internalType: "contract IStrategy",
              name: "strategy",
              type: "address",
            },
            {
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "protocol",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "pointer",
                  type: "string",
                },
              ],
              internalType: "struct Metadata",
              name: "metadata",
              type: "tuple",
            },
            {
              internalType: "bytes32",
              name: "managerRole",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "adminRole",
              type: "bytes32",
            },
          ],
          internalType: "struct IAllo.Pool",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getRegistry",
      outputs: [
        {
          internalType: "contract IRegistry",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
      ],
      name: "getRoleAdmin",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_poolId",
          type: "uint256",
        },
      ],
      name: "getStrategy",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getTreasury",
      outputs: [
        {
          internalType: "address payable",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "hasRole",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_strategy",
          type: "address",
        },
      ],
      name: "isCloneableStrategy",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_poolId",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "_address",
          type: "address",
        },
      ],
      name: "isPoolAdmin",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_poolId",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "_address",
          type: "address",
        },
      ],
      name: "isPoolManager",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "NATIVE",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "result",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "pendingOwner",
          type: "address",
        },
      ],
      name: "ownershipHandoverExpiresAt",
      outputs: [
        {
          internalType: "uint256",
          name: "result",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4",
        },
      ],
      name: "supportsInterface",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
} as const;

export default data;
