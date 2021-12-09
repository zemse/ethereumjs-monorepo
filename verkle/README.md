# Experiments in computing Verkle State Roots

This script takes in the below inputs and attempts to compute the verkle state root for Block 1 given the below inputs:
- Verkle state root for the genesis block computed by Geth from [these genesis parameters](./genesis.json)
- The only state transition that occurred
  - The account 0xa8ea391eacd86ab326843579060e42007a5fa93b increases its balance from 0x40000000000000000000 to 0x40001bc16d674ec80000 due to mining reward
- The verkle proof provided by Geth for Block 1

It computes the below result - 
```sh
Computed Block 1 State Root 0xfbf479fdbf971050a8dbc8308037dbff87070e44e20c31740dcad3320a8e9baa
Geth provided Block 1 State Root 0x12de1859fbd30a0b4ca9e583525334428fc1451fe938b16e8ee0cae67fc7935b
```