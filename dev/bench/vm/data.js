window.BENCHMARK_DATA = {
  "lastUpdate": 1649870850054,
  "repoUrl": "https://github.com/ethereumjs/ethereumjs-monorepo",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de8f6dd3751832db4278d56bb5574ed800e45ba8",
          "message": "VM: EIP-3450, EIP-3670 Improvements and Test Clean-Ups (#1795)\n\n* VM: removed unnecessary EIP-3541 activation in EIP-3540 tests (part of London HF)\r\n\r\n* VM: basic EIP-3540/EIP-3670 test formatting corrections\r\n\r\n* VM: moved EOF code to dedicated file, new constants for FORMAT, MAGIC and VERSION\r\n\r\n* VM: simplify EIP-3540 test code\r\n\r\n* VM: further simplify EIP-3540 test code\r\n\r\n* VM: further clean-ups, simplify EIP-3670 test code\r\n\r\n* VM: minor EIP-3670 test clean-up and improvements",
          "timestamp": "2022-03-16T14:23:18+01:00",
          "tree_id": "1d3b8c289311b1634df62c18aa03104c5d35ad30",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/de8f6dd3751832db4278d56bb5574ed800e45ba8"
        },
        "date": 1647437363491,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20545,
            "range": "±6.86%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 21949,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 18772,
            "range": "±15.02%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422908",
            "value": 21475,
            "range": "±1.44%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422910",
            "value": 20940,
            "range": "±1.62%",
            "unit": "ops/sec",
            "extra": "72 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18f96c24d8f7020ff7791f693872344566f05c10",
          "message": "Client: Improve stalled Kiln startup (#1796)\n\n* Client: extracted default status check interval to dedicated constant, set from 20 to 10 secs (better overall client connection times)\r\n\r\n* Client: reinitiate bootstrap on status checks, do not limit status checks to discovery scenarios\r\n\r\n* Client: moved back to 20 secs status check intervals (integration test instability)",
          "timestamp": "2022-03-16T19:04:13+01:00",
          "tree_id": "d7ed77eb7679487b7d5285e43a4362fc6f6d8c00",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/18f96c24d8f7020ff7791f693872344566f05c10"
        },
        "date": 1647454175573,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 11616,
            "range": "±4.24%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 11441,
            "range": "±6.61%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 11822,
            "range": "±2.70%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 12063,
            "range": "±2.90%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422910",
            "value": 9567,
            "range": "±16.10%",
            "unit": "ops/sec",
            "extra": "64 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "76567250+g11tech@users.noreply.github.com",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3916fc0f375d07aa56473c40980a7948c8a367bd",
          "message": "client: Fetcher reorg handling (#1792)\n\n* Fetcher reorg handling\r\n\r\n* making lint happy\r\n\r\n* fixing the edge cases around enqueing as well as clearing the *in* job map\r\n\r\n* fix the job gap created because of adopt\r\n\r\n* add adopt test cases\r\n\r\n* nits/typos/grammar\r\n\r\n* add test to re-enqueue task with step back for safeReorgDistance on a non-fatal error\r\n\r\n* small nits\r\n\r\n* add private helpers:\r\n* jobStr for deduped log format\r\n* isBlockFetcherJobTask for improved type accessibility\r\n\r\n* two more nits\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2022-03-17T09:44:38+01:00",
          "tree_id": "c61d91b655a45d05e0e2a2d1cedf57615f8d03a2",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/3916fc0f375d07aa56473c40980a7948c8a367bd"
        },
        "date": 1647506974718,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19165,
            "range": "±8.04%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20626,
            "range": "±2.12%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16524,
            "range": "±14.89%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20031,
            "range": "±2.11%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19766,
            "range": "±2.09%",
            "unit": "ops/sec",
            "extra": "76 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55178f44c26182e1abdb35409ec6200f8483ec6a",
          "message": "client: small fixes (txpool result not iterable, rpc validation for exchangeTransitionConfiguration) (#1793)\n\n* engine: add validation for exchangeTransitionConfiguration\r\n\r\n* create separate type for test utils type StartRPCOpts\r\n\r\n* TxPool: fix `(intermediate value) is not iterable` error on `await getPooledTransactions`",
          "timestamp": "2022-03-17T10:18:52+01:00",
          "tree_id": "2300a405a281dead58ef02b448568977a47657c0",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/55178f44c26182e1abdb35409ec6200f8483ec6a"
        },
        "date": 1647509021724,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19105,
            "range": "±7.19%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20307,
            "range": "±2.22%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16516,
            "range": "±14.89%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19852,
            "range": "±1.77%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19794,
            "range": "±2.01%",
            "unit": "ops/sec",
            "extra": "76 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2843b6eca643947d15f28f4f47a323d3a119a6ba",
          "message": "Client: added Kiln bootnodes, fixed comma-separated bootnode input parsing (#1798)",
          "timestamp": "2022-03-17T14:53:11+01:00",
          "tree_id": "814372f67bd5536d3e73aab866b1c92426e4c1de",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/2843b6eca643947d15f28f4f47a323d3a119a6ba"
        },
        "date": 1647525491580,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19466,
            "range": "±7.16%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20981,
            "range": "±1.96%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 17046,
            "range": "±16.20%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20247,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422910",
            "value": 20120,
            "range": "±1.94%",
            "unit": "ops/sec",
            "extra": "75 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8c4bd4703513f6a127fb9d3633eea41c004e708",
          "message": "Common: Fixed Event Listener Take-Over on Common.copy() (#1799)\n\n* Common: fixed event listener take-over on copy() method\r\n\r\n* Add new test for copy function\r\n\r\n* nit, improve newly added test\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2022-03-17T20:47:10+01:00",
          "tree_id": "077c043b56742b5136fd880135c6fcb4272a6e8c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e8c4bd4703513f6a127fb9d3633eea41c004e708"
        },
        "date": 1647546700751,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 21418,
            "range": "±5.74%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 22633,
            "range": "±1.80%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422907",
            "value": 17861,
            "range": "±15.43%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422908",
            "value": 22102,
            "range": "±1.37%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 21385,
            "range": "±1.81%",
            "unit": "ops/sec",
            "extra": "74 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cesarbrazon10@gmail.com",
            "name": "Cesar Brazon",
            "username": "cbrzn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1a859a9dad24b5d9f95434acc249cc9a01e80bc5",
          "message": "Client: Terminal block validation (#1797)\n\n* client/engine: add terminal block validation\r\n* client/engine: test to validate terminal block added\r\n* fixup! client/engine: test to validate terminal block added\r\n* fixing the conditions\r\n* Update packages/client/lib/rpc/modules/engine.ts\r\n* fixup! Update packages/client/lib/rpc/modules/engine.ts\r\n* Update packages/client/lib/rpc/modules/engine.ts\r\n* Update packages/client/lib/rpc/modules/engine.ts\r\n* client/engine: add test case for invalid terminal block with 1+ blocks\r\n* fix hf.td check when 0\r\n* nit: dependency order (order: external deps -> internal deps -> local relative paths)\r\nCo-authored-by: harkamal <gajinder@g11.in>\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2022-03-17T18:26:05-07:00",
          "tree_id": "bfa94afaefd5c55d050bdcc547d34a53f931225d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/1a859a9dad24b5d9f95434acc249cc9a01e80bc5"
        },
        "date": 1647567073963,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 16728,
            "range": "±7.50%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 17672,
            "range": "±2.44%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422907",
            "value": 15054,
            "range": "±15.93%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422908",
            "value": 14755,
            "range": "±24.83%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422910",
            "value": 17148,
            "range": "±4.34%",
            "unit": "ops/sec",
            "extra": "72 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5c25698475b39d4a0c4c1abeec4039435c9e157e",
          "message": "Client: Merge/HF Logger Improvements (#1800)\n\n* Client: added hardfork changed note on chain HF update (with dedicated Merge note)\r\n\r\n* Client: added logger attention API, HF attention notes on non-merge HFs and the Merge\r\n\r\n* Client: added basic connection status notification to Engine API\r\n\r\n* Client: added consensus client connection check to Engine API, clear connection status indicator\r\n\r\n* Client: added regular Engine API paylod and forkchoice logging\r\n\r\n* refactor out to CLConnectionManager, add Event.CLIENT_SHUTDOWN to clear intervals\r\n\r\n* some refactor to logging.ts to make it easier to read\r\n\r\n* use hardforkTD(Hardfork.Merge) rather than hardforks().find ... thanks for the tip @holgerd77!\r\n\r\n* fix race condition on transition block by using hardforkByTD in Block constructor opts\r\n\r\n* add ConnectionStatus.Lost to update `[ CL ? ]` -> `[ CL ]` when re-established\r\n\r\n* adjust / improve log intervals\r\n\r\n* fix td remaining comparison\r\n\r\n* fix file name\r\n\r\n* improve readability\r\n\r\n* remove superflous word (`with` in `with txs=num`)\r\n\r\n* set attentionHF when within 10% of ttd\r\n\r\n* move client shutdown to client class\r\n\r\n* nits, silent invalid tx logger error\r\n\r\n* start CLConnectionManager once we hit PreMerge (should fix hanging), emit shutdown event in integration tests\r\n\r\n* last fix\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2022-03-19T13:03:26+01:00",
          "tree_id": "50fd4b5cc45ec17ab656a7d632faf4aec241fc13",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/5c25698475b39d4a0c4c1abeec4039435c9e157e"
        },
        "date": 1647691723515,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 16790,
            "range": "±8.13%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 17444,
            "range": "±2.62%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422907",
            "value": 15733,
            "range": "±10.03%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422908",
            "value": 13631,
            "range": "±27.90%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422910",
            "value": 17980,
            "range": "±2.63%",
            "unit": "ops/sec",
            "extra": "77 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "76567250+g11tech@users.noreply.github.com",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe71b043539371ead283f751d8e1f344070b8dc4",
          "message": "client: Handle partial results in multi-peer safe manner (#1802)\n\n* Handle partial results in multi-peer safe manner\r\n\r\n* nits\r\n\r\n* tests for partial requests\r\n\r\n* nit\r\n\r\n* Client: more Merge-related logger improvments (#1805)\r\n\r\n* Client: removed diff note from Merge HF countdown\r\n* Client: prevent redundant Merge-HF reached logging and fetcher closing on Merge HF transition block\r\n* Client: added first block for CL-framed execution log message for clear differentiation between Merge block/first execution block\r\n* Client: added continued preMerge and a one-time post Merge warning on no available CL client connection\r\n* Client: added logging not about initial consensus payload and forkchoice update from CL client\r\n* Client: make block execution error more present in the logs\r\n* Client: added additional CL client sync note to de-confuse people waiting fo CLr connection notice\r\n* Client: fix invalid receiptTrie error on first Merge block receival\r\n* nit, declutter engine by moving more connection logic to CLConnectionManager\r\n* nit: use td from chain\r\n* fix getter/setter collision (use underscore)\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>\r\n\r\n* add runBlock opt hardforkByTD\r\n\r\n* increase connection check interval to 10s\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2022-03-22T09:01:17+01:00",
          "tree_id": "9050d828c8bfcd23bf205b928945b54b52a3ed2c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fe71b043539371ead283f751d8e1f344070b8dc4"
        },
        "date": 1647936366772,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19945,
            "range": "±8.43%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422906",
            "value": 21160,
            "range": "±1.99%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422907",
            "value": 17212,
            "range": "±17.76%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Block 9422908",
            "value": 21250,
            "range": "±1.60%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422910",
            "value": 20828,
            "range": "±1.79%",
            "unit": "ops/sec",
            "extra": "73 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cesarbrazon10@gmail.com",
            "name": "Cesar Brazon",
            "username": "cbrzn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa286c3acc50887ed0f3ea0c5488476d5e2ca90e",
          "message": "Client: Validate block safe hash on ForkchoiceUpdated (#1804)\n\n* engine/fcu: safe block hash validation added\r\n\r\n* engine/fcu: throw error instead of return invalid in safe block hash validation",
          "timestamp": "2022-03-22T10:02:27+01:00",
          "tree_id": "60a5ae2ee798dc7f5ccff54f7e68b64d5799470e",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fa286c3acc50887ed0f3ea0c5488476d5e2ca90e"
        },
        "date": 1647940039341,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19569,
            "range": "±7.14%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20758,
            "range": "±2.07%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 17152,
            "range": "±16.96%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20269,
            "range": "±1.90%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19367,
            "range": "±4.10%",
            "unit": "ops/sec",
            "extra": "73 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cesarbrazon10@gmail.com",
            "name": "Cesar Brazon",
            "username": "cbrzn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f774042f6a0b984ebb013e15c35d5b06eac6bd8b",
          "message": "Client: eth_getBlockByNumber method returns array of tx object when asked (#1801)\n\n* client/eth: get block by number returns transaction object when true is passed\r\n\r\n* client/eth: get block by number tests added with include transactions",
          "timestamp": "2022-03-22T10:34:00+01:00",
          "tree_id": "e788fb7dc070bca2accb3aea1a50f8fa821bb3d3",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/f774042f6a0b984ebb013e15c35d5b06eac6bd8b"
        },
        "date": 1647941967168,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 15906,
            "range": "±6.91%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 16992,
            "range": "±2.92%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16806,
            "range": "±3.67%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 13418,
            "range": "±15.97%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422910",
            "value": 16603,
            "range": "±2.94%",
            "unit": "ops/sec",
            "extra": "78 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ae51b7f5d0ab1e6100df71dbf5a91729eefc49e",
          "message": "VM: Add option to add custom opcodes (#1705)\n\n* vm: add customOpcodes\r\n\r\n* vm: add custom opcode tests\r\n\r\n* vm: add custom opcode docs\r\n\r\n* vm: ensure opcode maps get deep-copied\r\n\r\n* vm: move custom opcode tests, add deep copy test\r\n\r\n* vm: fix example\r\n\r\n* vm: fix merge\r\n\r\n* vm: remove updateOpcodes\r\n\r\n* VM: add code review comments\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2022-03-22T11:44:45+01:00",
          "tree_id": "426af8ca291544a06be9cb1a788fba5fea5c9b20",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/3ae51b7f5d0ab1e6100df71dbf5a91729eefc49e"
        },
        "date": 1647946563482,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 16952,
            "range": "±9.77%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18059,
            "range": "±2.54%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 15166,
            "range": "±14.62%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422908",
            "value": 17948,
            "range": "±2.45%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 17458,
            "range": "±3.18%",
            "unit": "ops/sec",
            "extra": "73 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cesarbrazon10@gmail.com",
            "name": "Cesar Brazon",
            "username": "cbrzn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe45ddc7258d1bf6488e8b89dd68a2996ae2af2e",
          "message": "Client: Validate finalized block hash on ForkchoiceUpdated  (#1803)\n\n* engine/fcu: finalized block hash validation added\r\n* engine/fcu: fix skip validation on finalized block hash zero",
          "timestamp": "2022-03-22T16:16:40-07:00",
          "tree_id": "55d970b7a48d0ba3137216c5ac798586543ba249",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fe45ddc7258d1bf6488e8b89dd68a2996ae2af2e"
        },
        "date": 1647991278252,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20455,
            "range": "±7.14%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 22302,
            "range": "±1.54%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 17717,
            "range": "±14.72%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422908",
            "value": 21663,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422910",
            "value": 21262,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "73 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "70874947646bab26686a53c16b523156f2150d76",
          "message": "client: Add new startBlock parameter to client (#1807)",
          "timestamp": "2022-03-23T00:16:39-07:00",
          "tree_id": "b970be31623b6b480531394ba26310c69b9356a1",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/70874947646bab26686a53c16b523156f2150d76"
        },
        "date": 1648020090340,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19343,
            "range": "±8.11%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20447,
            "range": "±2.05%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16802,
            "range": "±16.87%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20237,
            "range": "±1.88%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 20036,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "76 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41bca62feb87bd1f7847e71af071d3e480ca644d",
          "message": "Client: even more Merge logging improvements (#1808)\n\n* Client -> CLConnectionManager: factor out disconnected and uncertain threshold values\r\n\r\n* Client -> CLConnectionManager: be more gracious on uncertain status decision (too many false positives in synced state)\r\n\r\n* Client -> CLConnectionManager: add non-event based triggering to start() to also cover client-start-on-preMerge state scenario\r\n\r\n* Client -> CLConnectionManager: even more gracious disconnected and uncertain thresholds\r\n\r\n* Client -> CLConnectionManager: reworked forkchoiceUpdate to integrate EL client response or error and head block read from chain\r\n\r\n* Client -> CLConnectionManager / Engine: limit synchronized update to narrow ts block receptions, output head block time diff on forkchoice update\r\n\r\n* nits, cleanup, implement lastNewPayload\r\n\r\n* Client -> CLConnectionManager: rewording of the pre-Merge no CL client connection message\r\n\r\n* Client -> CLConnectionManager: going up to full slot length on uncertainty interval\r\n\r\n* Client -> CLConnectionManager: added optimistic-sync-not-implemented one-time logger warning on future block request\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2022-03-23T10:46:16+01:00",
          "tree_id": "e74a12822ddd36cb0cfed41ca684b4bf59eb3c3d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/41bca62feb87bd1f7847e71af071d3e480ca644d"
        },
        "date": 1648029064781,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19770,
            "range": "±6.98%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20728,
            "range": "±1.98%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 17121,
            "range": "±16.69%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20813,
            "range": "±1.77%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 20465,
            "range": "±2.04%",
            "unit": "ops/sec",
            "extra": "77 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7330c4ace495903748c606a47a8b993812504db8",
          "message": "New Releases: Kiln v2 Testnet, EIP-3860, Extended VM Genesis (Code/Storage) (#1774)\n\n* Client, VM, Block, Trie, Tx, Common -> New Releases: Added CHANGELOG\r\n\r\n* Apply suggestions from code review\r\n\r\nsmall changelog typos/grammar\r\n\r\n* Common -> Release: bumped version to v2.6.3, updated README, updated upstream dependency versions\r\n\r\n* Common -> Release: Rebuild documentation\r\n\r\n* Tx -> Release: Bumped version to v3.5.1, updated README, updated upstream dependency versions\r\n\r\n* Tx -> Release: Rebuild documentation\r\n\r\n* Trie -> Release: Bumped version to 4.2.4, updated README, updated upstream dependency versions\r\n\r\n* Block -> Release: Bumped version to v3.6.2, updated upstream dependency versions\r\n\r\n* Block -> Release: Rebuild documentation\r\n\r\n* VM -> Release: Bumped version to v5.8.0, updated README, updated upstream dependency versions\r\n\r\n* Client -> Release: Bumped version to v0.4.0, updated README, added Kiln README notes\r\n\r\n* Monorepo: updated package-lock.json\r\n\r\n* Blockchain -> Release: bumped version to v5.5.2, added CHANGELOG entry, updated upstream dependency versions\r\n\r\n* VM, Common, Client: updated release notes, particularly on EIP-3540 (EVM Object Format) and EIP-3670: EOF - Code Validation\r\n\r\n* Client -> Release: CHANGELOG additions\r\n\r\n* Trie -> Release: modified typedoc exclude directive, rebuild documentation\r\n\r\n* Client, VM, Common: updated CHANGELOG entries\r\n\r\n* Client -> Release: added Merge sync-scenarios section to README\r\n\r\n* Monorepo: Updated package-lock.json\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2022-03-23T13:11:09+01:00",
          "tree_id": "c4039081d3be7ac1a83d607328046220198512d4",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/7330c4ace495903748c606a47a8b993812504db8"
        },
        "date": 1648037769722,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 21310,
            "range": "±6.94%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 22655,
            "range": "±1.38%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 18143,
            "range": "±17.11%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422908",
            "value": 21526,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 21377,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "75 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mark.tyneway@gmail.com",
            "name": "Mark Tyneway",
            "username": "tynes"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "83ff48a6c2a3d978742c0ea3bc9decb52dcd08c7",
          "message": "VM, Common: Implement EIP 1153, Transient storage opcodes (#1768)\n\n* feat: eip1153\r\n\r\nImplement EIP 1153 - transient storage\r\n\r\nTLOAD 0xb3\r\nTSTORE 0xb4\r\n\r\nCo-authored-by: Moody Salem <moody.salem@gmail.com>\r\n\r\n* move transient storage to the EVM\r\n\r\n* bring back method in eei for transient storage loads and stores\r\n\r\n* cleanup\r\n\r\n* test: add reverting test\r\n\r\n* lint: fix\r\n\r\n* tests: get passing again\r\n\r\n* tests: more coverage\r\n\r\n* lint: fix\r\n\r\n* eip1153: more cleanup\r\n\r\n* lint: fix\r\n\r\n* - optimize the changeset recording (only store the first previous value)\r\n- add a test about copying\r\n- add a test about reverting\r\n- add a test about stringifying map keys\r\n\r\n* undo accidental commit of arrowGlacier.json\r\n\r\n* eip1153: fix build\r\n\r\nCo-authored-by: Moody Salem <moody.salem@gmail.com>\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2022-03-25T09:23:43+01:00",
          "tree_id": "479f884ae585bdc492f3e9b836e36a7769446fff",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/83ff48a6c2a3d978742c0ea3bc9decb52dcd08c7"
        },
        "date": 1648196950066,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 15800,
            "range": "±11.44%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422906",
            "value": 16928,
            "range": "±2.98%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422907",
            "value": 15920,
            "range": "±9.29%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422908",
            "value": 12669,
            "range": "±22.89%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422910",
            "value": 17249,
            "range": "±2.93%",
            "unit": "ops/sec",
            "extra": "74 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "739f839380bc11d794d560aabd11235f18b93d43",
          "message": "VM, Common -> Implement EIP 3651: Warm COINBASE (#1814)\n\n* common: add eip 3651\r\n\r\n* vm: implement eip3651\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2022-03-25T10:09:21+01:00",
          "tree_id": "7de42d04a110c1d350ee253d6b1d0614cd2c3a7c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/739f839380bc11d794d560aabd11235f18b93d43"
        },
        "date": 1648199654118,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19261,
            "range": "±7.19%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20480,
            "range": "±1.99%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422907",
            "value": 17021,
            "range": "±14.48%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20311,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422910",
            "value": 20058,
            "range": "±1.87%",
            "unit": "ops/sec",
            "extra": "78 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cesarbrazon10@gmail.com",
            "name": "Cesar Brazon",
            "username": "cbrzn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a87bccd99501226a4b112301b8ec9f0fcf71cc3a",
          "message": "Client: Fcu handles if headBlockHash is an old block (#1820)",
          "timestamp": "2022-03-28T13:08:34-07:00",
          "tree_id": "0114b54ebb1b7235a555e7dac68b956a2139d368",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a87bccd99501226a4b112301b8ec9f0fcf71cc3a"
        },
        "date": 1648498679212,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20044,
            "range": "±6.84%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 21267,
            "range": "±1.99%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422907",
            "value": 17489,
            "range": "±14.60%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20792,
            "range": "±1.73%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 20627,
            "range": "±1.81%",
            "unit": "ops/sec",
            "extra": "77 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05bfd35e359565eb8c905794a2ad77db58ff1d04",
          "message": "Update ethereum-tests to 10.3 (#1826)",
          "timestamp": "2022-03-29T13:13:26-07:00",
          "tree_id": "e1a37a2a6813043dba23bf7d4ee08a4d4091171c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/05bfd35e359565eb8c905794a2ad77db58ff1d04"
        },
        "date": 1648585063374,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20834,
            "range": "±6.20%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422906",
            "value": 22140,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 17586,
            "range": "±16.60%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Block 9422908",
            "value": 21742,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 21111,
            "range": "±1.57%",
            "unit": "ops/sec",
            "extra": "72 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cesarbrazon10@gmail.com",
            "name": "Cesar Brazon",
            "username": "cbrzn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c969f1f411a098b6434c76137c26a2149f04dd42",
          "message": "Client: NewPayload handle already existing payload (#1824)\n\n* engine: newPayload handles already existing payload\r\n* chore/engine: remove .only in new test",
          "timestamp": "2022-03-29T13:40:08-07:00",
          "tree_id": "de915f883b0658979ebc65f30cbc370ec7c8cede",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/c969f1f411a098b6434c76137c26a2149f04dd42"
        },
        "date": 1648586673116,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19533,
            "range": "±8.24%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20612,
            "range": "±2.02%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16848,
            "range": "±15.94%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20372,
            "range": "±2.03%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 20030,
            "range": "±2.01%",
            "unit": "ops/sec",
            "extra": "76 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "053a3a178d76d1123e5bd2994115fc8cea26e977",
          "message": "client/engine: speed and resiliency improvements (#1827)\n\n* CLConnectionManager: start on first updateStatus in case PreMerge wasn't reached before merge\r\n* chain: safer closing to not cause db corruption during engine requests\r\n* parse: some improvements and reorganization\r\n* vm/client/engine: add ability to add blocks to blockchain without setting the head. this allows us to do runBlock work in newPayload once, and not again in fcU\r\n* CLConnectionManager: improve logging output\r\n* use ellipsis character\r\n* add space to align with fcu log msg\r\n* add last payload txs count\r\n* add baseFee to last payload log\r\n* fix type doc ref\r\n* add gasUsed to last payload log\r\n* rename PreMerge to MergeForkBlock for increased clarity\r\nuse hardfork enums in vm supportedHardforks\r\n* format numbers to locale string, use compact num for gasUsed\r\nupdate from 5 to 4 chars on each side of hash\r\n* fix tests, use `pass` instead of `ok`\r\n* various fixes, remove toLocaleString, improve short func\r\n* add plural to timeDiffStr if not 1\r\n* Add coverage on `formatNonce`\r\n* Add CLConnectionManager test skeleton and fix `running` method\r\n* Add forkchoice/newpayload tests\r\n* Remove listeners on test\r\n* Tighten up tests to check for specific block\r\n* More connection manager constructor tests\r\n* nits\r\n* remove leading zeros on cumulative gas in eth_getTransactionsReceipt (thanks @cbrzn)\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2022-03-30T13:48:22-07:00",
          "tree_id": "0e1a44a69868dab30bf223dfdc0b36a9fc2e1025",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/053a3a178d76d1123e5bd2994115fc8cea26e977"
        },
        "date": 1648673868891,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 17193,
            "range": "±7.53%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18233,
            "range": "±2.49%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16437,
            "range": "±8.68%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422908",
            "value": 13383,
            "range": "±22.11%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18139,
            "range": "±2.75%",
            "unit": "ops/sec",
            "extra": "76 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66335769+ScottyPoi@users.noreply.github.com",
            "name": "Scotty",
            "username": "ScottyPoi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a3549aed58836adfaf03bcb64bac4384096afc0",
          "message": "devp2p: solve \"DPT discovers nodes when open_slots = 0\" (#1816)\n\n* devp2p: remove OpenSlots check\r\nin favor of queue length cap\r\n\r\n* devp2p/rlpx: remove extraneous `peer:` label\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>\r\n\r\n* devp2p/rlpx: add helper function\r\n`_getOpenQueueSlots()`\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2022-04-02T10:29:53+02:00",
          "tree_id": "dd3ecb00abc26971e0d9a280e2ba52abdbed7cdc",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/7a3549aed58836adfaf03bcb64bac4384096afc0"
        },
        "date": 1648888447354,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 21185,
            "range": "±7.70%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 21985,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 18477,
            "range": "±13.16%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Block 9422908",
            "value": 21424,
            "range": "±1.82%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 20937,
            "range": "±1.45%",
            "unit": "ops/sec",
            "extra": "73 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f91195fc04ccb6155a1e37df0e7feec45d86a1d3",
          "message": "client: fix eth_call, add remoteBlocks to engine (#1830)\n\n* improve eth_call to use runCall\r\nformat and return vm internal errors so they display in json rpc\r\n\r\n* add remoteBlocks, refactor out assembleBlock, return `latestValidHash: null` when SYNCING to follow spec\r\n\r\n* engine: add parent hash equals to block hash test case in new payload\r\n\r\n* improve return type of assembleBlock\r\n\r\n* pass array of blocks to setHead to save pending receipts\r\n\r\nCo-authored-by: cbrzn <cesarbrazon10@gmail.com>",
          "timestamp": "2022-04-06T17:21:40+02:00",
          "tree_id": "2a5957be8e6316aee36d78caf41b24da8a27d361",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/f91195fc04ccb6155a1e37df0e7feec45d86a1d3"
        },
        "date": 1649258965566,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 10510,
            "range": "±4.32%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 10128,
            "range": "±6.67%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422907",
            "value": 10907,
            "range": "±3.43%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 10280,
            "range": "±7.56%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 8699,
            "range": "±19.33%",
            "unit": "ops/sec",
            "extra": "73 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b9520450cfac21cb49013f4d4e8a38861165769",
          "message": "common: add require examples to readme (#1837)\n\n* add require usage examples, refine parameters section\r\n\r\n* lint\r\n\r\n* improve example order",
          "timestamp": "2022-04-06T18:04:47+02:00",
          "tree_id": "e9ca9482d86bbc469b784f13668f0f1debeabc0e",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/0b9520450cfac21cb49013f4d4e8a38861165769"
        },
        "date": 1649261374085,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 18477,
            "range": "±8.67%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20344,
            "range": "±2.22%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16275,
            "range": "±15.51%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19795,
            "range": "±2.00%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19645,
            "range": "±4.17%",
            "unit": "ops/sec",
            "extra": "76 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "07a6d2e8a672d6bebad57a1e9df80c3e735fbf2e",
          "message": "set caller to zero address if not provided (#1840)",
          "timestamp": "2022-04-06T13:35:45-07:00",
          "tree_id": "4bc9ccccadb2c8b44254d9851d7ee71145ce5cbd",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/07a6d2e8a672d6bebad57a1e9df80c3e735fbf2e"
        },
        "date": 1649277609974,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20241,
            "range": "±6.37%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Block 9422906",
            "value": 21819,
            "range": "±1.63%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 17458,
            "range": "±16.70%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19511,
            "range": "±2.37%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19671,
            "range": "±3.58%",
            "unit": "ops/sec",
            "extra": "69 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1bd84986578095565600f668ec86453675ec4294",
          "message": "client: move TxPool to FullEthereumService (#1853)\n\n* move txpool from FullSync to FullEthereumService\r\nremove execution from client class\r\n* move execution init to service\r\n* use pool peer count directly now\r\n* nit (dedupe `any` cast)",
          "timestamp": "2022-04-09T10:41:43-07:00",
          "tree_id": "3f5834e55ed34f683845856e138227947c588469",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/1bd84986578095565600f668ec86453675ec4294"
        },
        "date": 1649526512040,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19331,
            "range": "±8.14%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20740,
            "range": "±2.14%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16419,
            "range": "±17.26%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19994,
            "range": "±1.95%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19254,
            "range": "±4.07%",
            "unit": "ops/sec",
            "extra": "72 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f4463730eaf081c19102816829926a9b699d1f9",
          "message": "Common: fixed non-option passing on custom() method (#1851)\n\n* Common: fixed non-option passing on custom() method\r\n* Common: custom options test sanity check (review suggestion)\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>\r\n* lint, fix test\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2022-04-09T10:53:02-07:00",
          "tree_id": "da80442adf461a715b48e66e0219bb3d69de4546",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/1f4463730eaf081c19102816829926a9b699d1f9"
        },
        "date": 1649527304257,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19100,
            "range": "±8.00%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20376,
            "range": "±1.75%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16726,
            "range": "±15.67%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19765,
            "range": "±1.94%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19482,
            "range": "±4.03%",
            "unit": "ops/sec",
            "extra": "76 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d7d4193c60da23793660967a31f4c6d3c2055d7",
          "message": "VM: Custom precompiles (#1813)\n\n* vm/precompiles: do not export precompiles list\r\n\r\n* vm: change precompile logic, use maps\r\n\r\n* vm/tests: ensure these run\r\n\r\n* vm: fixed custom precompile bugs\r\n\r\n* vm: add custom precompile tests\r\n\r\n* review, clean up, nits\r\n\r\n* add _customPrecompiles to stateManager\r\n\r\n* vm: fixes custom opcodes\r\n\r\n* vm: re-export precompiles\r\n\r\n* vm: attempt to fix ci\r\n\r\n* vm: experiment 2 to fix CI\r\n\r\n* vm: add public precompile method, remove experiment\r\n\r\n* vm: fix CI\r\n\r\n* vm: change function sig\r\n\r\n* vm: remove TODO\r\n\r\n* vm: remove precompile logic from statemanager\r\n\r\n* vm: remove customprecompiles from statemanager\r\n\r\n* vm: use `precompiles` getter\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2022-04-13T18:53:03+02:00",
          "tree_id": "81edd7896101775c22e29e832c7ce94593446b2a",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/1d7d4193c60da23793660967a31f4c6d3c2055d7"
        },
        "date": 1649869326119,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 21989,
            "range": "±3.67%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422906",
            "value": 22903,
            "range": "±1.52%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19848,
            "range": "±13.37%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422908",
            "value": 22374,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422910",
            "value": 21982,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "80 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "moodysalem@users.noreply.github.com",
            "name": "Moody Salem",
            "username": "moodysalem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2707449df4521bfc5c3edc728d70e582b2320f3a",
          "message": "VM: revert TSTORE opcode if in static context (#1821)\n\n* revert TSTORE opcode if in static context\r\n\r\n* merge transient storage on commit",
          "timestamp": "2022-04-13T19:23:21+02:00",
          "tree_id": "8e7c41f48ee92dcbde34df1e4bd10f516114c9fd",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/2707449df4521bfc5c3edc728d70e582b2320f3a"
        },
        "date": 1649870849588,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19320,
            "range": "±6.17%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20507,
            "range": "±2.00%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 16590,
            "range": "±15.19%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20034,
            "range": "±1.87%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19744,
            "range": "±3.84%",
            "unit": "ops/sec",
            "extra": "75 samples"
          }
        ]
      }
    ]
  }
}