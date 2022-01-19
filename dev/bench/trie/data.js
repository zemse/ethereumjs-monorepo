window.BENCHMARK_DATA = {
  "lastUpdate": 1648199693481,
  "repoUrl": "https://github.com/ethereumjs/ethereumjs-monorepo",
  "entries": {
    "Benchmark": [
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
          "id": "b66c38226ce078e3ccbce9cda1000cd9cf56b2bd",
          "message": "VM, Common: Complex Genesis State tests (#1757)\n\n* tests(common): complex genesis state tests added & documentation improved\r\n\r\n* chore(package.json): remove unused test script\r\n\r\n* chore(vm): trying to run transaction with custom genesis state\r\n\r\n* vm(genesis-state): activateGenesisState flag added to inject genesis state from common, tests on progress\r\n\r\n* vm(genesis-state): tests finished\r\n\r\n* vm: remove non used script\r\n\r\n* vm(genesis-state): add documentation in readme about activate genesis state flag\r\n\r\n* vm: fix link on documentation\r\n\r\n* Update packages/vm/src/index.ts\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>\r\n\r\n* remove change in ethereum test sub module\r\n\r\n* common: documentation of genesis state init improved\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2022-03-09T14:27:06+01:00",
          "tree_id": "ee2215c0fe6ce9f96e8727d693d8dc570ff9089c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b66c38226ce078e3ccbce9cda1000cd9cf56b2bd"
        },
        "date": 1646832744555,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13190,
            "range": "±15.13%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 15751,
            "range": "±2.29%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14447,
            "range": "±2.54%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7172,
            "range": "±29.74%",
            "unit": "ops/sec",
            "extra": "40 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 18167,
            "range": "±3.43%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 826,
            "range": "±7.42%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 174,
            "range": "±10.56%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 23.32,
            "range": "±147.78%",
            "unit": "ops/sec",
            "extra": "17 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 17.77,
            "range": "±5.19%",
            "unit": "ops/sec",
            "extra": "31 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "samlior@foxmail.com",
            "name": "Samlior",
            "username": "samlior"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "94211ced392a8652d8f44ae47b0cd217058acb46",
          "message": "trie: add verifyRangeProof (#1731)\n\n* trie: add verify range proof\r\n\r\n* trie: add test for verify range proof\r\n\r\n* trie: reduce testing time\r\n\r\n* trie: fix comment\r\n\r\n* trie: add verifyRangeProof for SecureTrie\r\n\r\n* trie: use 'instanceof' instead of 'isRawNode'\r\n\r\n* trie: specify the return types\r\n\r\n* trie: change a more explicit way when proof is null\r\n\r\n* trie: add more descriptive errors\r\n\r\n* trie: delete useless blank lines\r\n\r\n* try to resolve karma \"buffer is undefined\" error\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2022-03-09T14:55:51+01:00",
          "tree_id": "dd7b9ee232ebdad6e8a37d414d346417bd95c71b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/94211ced392a8652d8f44ae47b0cd217058acb46"
        },
        "date": 1646834478232,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 12009,
            "range": "±15.37%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14150,
            "range": "±5.84%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12938,
            "range": "±3.23%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 10132,
            "range": "±16.89%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 8821,
            "range": "±46.79%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 821,
            "range": "±6.49%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 165,
            "range": "±10.52%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 32.01,
            "range": "±122.34%",
            "unit": "ops/sec",
            "extra": "23 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 17.38,
            "range": "±6.07%",
            "unit": "ops/sec",
            "extra": "31 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Amir Ghorbanian",
            "username": "Ghorbanian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f70f169ce7e71486a1ff58690237b777d91bb167",
          "message": "devp2p: ETH-LES class refactor (#1600)\n\n* Create superclass skeleton\r\n\r\n* Fix linting issues\r\n\r\n* Extend the new superclass in ETH and LES\r\n\r\n* Transfer _version to superclass\r\n\r\n* Transfer _peer to superclass\r\n\r\n* Transfer _statusTimeoutId to superclass\r\n\r\n* Transfer getVersion() to superclass\r\n\r\n* Revert \"Transfer getVersion() to superclass\"\r\n\r\nThis reverts commit 9abb3036cde7a3bd500c50bdd12fb157e0f18773.\r\n\r\n* Transfer _version back to subclasses\r\n\r\n* Rename ExchangeProtocol superclass to Protocol and ExchangeProtocol.ts file name to protocol.ts\r\n\r\n* Put protocol-related files in a single directory\r\n\r\n* Fix broken imports\r\n\r\n* Fix linting issue\r\n\r\n* Exclude protocol.ts from code documentation generation\r\n\r\n* Transfer debug functions and properties to superclass\r\n\r\n* Fix variable name\r\n\r\n* Include types for Protocol class variables\r\n\r\n* remove duplicated methods in child classes, lint:fix\r\n\r\nCo-authored-by: ScottyPoi <66335769+ScottyPoi@users.noreply.github.com>\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2022-03-10T09:20:56+01:00",
          "tree_id": "7fb6abc11c28dede408e7b80ed4b90526fdf84ce",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/f70f169ce7e71486a1ff58690237b777d91bb167"
        },
        "date": 1646900758840,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14843,
            "range": "±13.98%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17220,
            "range": "±1.79%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16499,
            "range": "±2.29%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7396,
            "range": "±36.41%",
            "unit": "ops/sec",
            "extra": "36 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 18319,
            "range": "±2.92%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 833,
            "range": "±7.80%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 171,
            "range": "±12.70%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 25.47,
            "range": "±142.58%",
            "unit": "ops/sec",
            "extra": "18 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 15.35,
            "range": "±34.39%",
            "unit": "ops/sec",
            "extra": "30 samples"
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
          "id": "550e8b56c831ef604d988e7fa80abac9a029fce0",
          "message": "client: Kiln public testnet update (#1775)\n\n* Kiln public testnet update\r\n* updating docker\r\n* fix webpack\r\n* standardize types, normalize log output\r\n* update kiln instructions\r\n* update cli-rpc ws test to new default port of 8545\r\n* log nits\r\n* fix following along chain head, normalize chain height log outputs\r\n* bump txpool log from 10s to 20s\r\n* Add logic to handle gap between chain head and handleBlockHashes\r\n* add rpc.spec.ts file for coverage, assign opts more simply\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2022-03-10T20:20:08-08:00",
          "tree_id": "927ca47b5c626bc9ceff3e1270c76e4c5c120b4d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/550e8b56c831ef604d988e7fa80abac9a029fce0"
        },
        "date": 1646972700528,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16134,
            "range": "±16.54%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 18252,
            "range": "±1.87%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15677,
            "range": "±11.32%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8442,
            "range": "±33.99%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 18854,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 901,
            "range": "±6.52%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 104,
            "range": "±84.62%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 90.63,
            "range": "±9.54%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 15.07,
            "range": "±42.43%",
            "unit": "ops/sec",
            "extra": "36 samples"
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
          "id": "2771a8becde2c6926a8e080194932491be01895b",
          "message": "client: kiln touchups (#1778)\n\n* util/rpc.spec.ts: add more coverage cases\r\n\r\n* re-add accidentially removed test\r\n\r\n* slim withEngineMiddleware fn",
          "timestamp": "2022-03-11T10:53:42+01:00",
          "tree_id": "f8a7c6d29b73b756ece84b23c66dcd57449888f6",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/2771a8becde2c6926a8e080194932491be01895b"
        },
        "date": 1646992753004,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15553,
            "range": "±15.21%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17017,
            "range": "±4.27%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16884,
            "range": "±2.28%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 9519,
            "range": "±30.82%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 18608,
            "range": "±3.22%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 861,
            "range": "±9.88%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 182,
            "range": "±12.37%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 54.58,
            "range": "±82.40%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 16.37,
            "range": "±24.52%",
            "unit": "ops/sec",
            "extra": "36 samples"
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
          "id": "ba916e5fdf0b5ac343100b1c8da47300a15a91b9",
          "message": "devp2p: fix per-message debug logging (#1776)\n\n* devp2p: fix debug logging\r\n\r\n* move _version to protocol class\r\n\r\n* move _send to protocol class\r\n\r\n* simplify types, set null defaults in class rather than in constructor",
          "timestamp": "2022-03-11T11:39:21+01:00",
          "tree_id": "0b630680d28a8d6a2bc231d45387073d8645d9c0",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ba916e5fdf0b5ac343100b1c8da47300a15a91b9"
        },
        "date": 1646995456485,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 18512,
            "range": "±12.84%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 20266,
            "range": "±2.05%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12882,
            "range": "±22.40%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 17761,
            "range": "±13.34%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 22140,
            "range": "±2.66%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1031,
            "range": "±5.24%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 114,
            "range": "±88.29%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 106,
            "range": "±6.06%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 11.1,
            "range": "±95.56%",
            "unit": "ops/sec",
            "extra": "32 samples"
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
          "id": "b5d9fb0765af7e6a176762acb548eed5033eda5f",
          "message": "common: update status fields for EIPs and hardforks (#1777)\n\n* common: update status fields for EIPs and hardforks\r\n\r\n* Common: EXPERIMENTAL -> Draft status (EIP-2315)\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2022-03-11T12:06:47+01:00",
          "tree_id": "73a0224cf326da3e3c447da9f2553812b0855c3f",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b5d9fb0765af7e6a176762acb548eed5033eda5f"
        },
        "date": 1646997105736,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16159,
            "range": "±15.14%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17811,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14858,
            "range": "±13.08%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7909,
            "range": "±38.18%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 18733,
            "range": "±1.83%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 890,
            "range": "±6.97%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 177,
            "range": "±12.08%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 52.29,
            "range": "±84.76%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 16.6,
            "range": "±22.65%",
            "unit": "ops/sec",
            "extra": "36 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "samlior@foxmail.com",
            "name": "Samlior",
            "username": "samlior"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "92587f7d27034fd07c995e2e08c054be81df61d3",
          "message": "blockchain: fix updateCache (#1786)",
          "timestamp": "2022-03-14T10:41:33+01:00",
          "tree_id": "acfd4256812dd9896ded808686deb2cec77a5c60",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/92587f7d27034fd07c995e2e08c054be81df61d3"
        },
        "date": 1647251195413,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14154,
            "range": "±13.57%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16853,
            "range": "±1.91%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15713,
            "range": "±1.90%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7624,
            "range": "±33.66%",
            "unit": "ops/sec",
            "extra": "37 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 18159,
            "range": "±3.44%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 854,
            "range": "±7.10%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 171,
            "range": "±11.84%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 23.83,
            "range": "±144.15%",
            "unit": "ops/sec",
            "extra": "17 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 17.58,
            "range": "±25.42%",
            "unit": "ops/sec",
            "extra": "34 samples"
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
          "id": "46e8394961fc8b2bdf54af8bc44af94621607d6a",
          "message": "Client: Mix hash added to JsonRpcBlock (#1791)",
          "timestamp": "2022-03-15T00:27:26-06:00",
          "tree_id": "b9e9d8968afaca83b1bb2b1139e920eb3fca2e69",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/46e8394961fc8b2bdf54af8bc44af94621607d6a"
        },
        "date": 1647325985051,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 12614,
            "range": "±16.74%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14617,
            "range": "±7.53%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14038,
            "range": "±2.83%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8872,
            "range": "±22.55%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13731,
            "range": "±18.07%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 750,
            "range": "±7.35%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 173,
            "range": "±6.23%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 30.95,
            "range": "±130.52%",
            "unit": "ops/sec",
            "extra": "29 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 13.12,
            "range": "±27.28%",
            "unit": "ops/sec",
            "extra": "31 samples"
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
          "id": "3b8734170ab424355531cc97dc9d719f063df346",
          "message": "client/cli: start script now accepts files with private keys (#1790)\n\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2022-03-15T11:41:00+01:00",
          "tree_id": "c7c8553514f044666e63e0631b65fd0173ce50af",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/3b8734170ab424355531cc97dc9d719f063df346"
        },
        "date": 1647341207236,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 12097,
            "range": "±8.15%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 10682,
            "range": "±19.55%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12958,
            "range": "±3.35%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 12061,
            "range": "±3.86%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6481,
            "range": "±37.90%",
            "unit": "ops/sec",
            "extra": "38 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 775,
            "range": "±6.53%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 161,
            "range": "±11.95%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 59.39,
            "range": "±51.81%",
            "unit": "ops/sec",
            "extra": "32 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 16.15,
            "range": "±8.28%",
            "unit": "ops/sec",
            "extra": "29 samples"
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
          "id": "b1bf67c41c627057ebe23f244780b199886b12ec",
          "message": "client: Sync stall investigation improvements (#1781)\n\n* Sync stall investigation improvements\r\n\r\n* remove comma from logs\r\n\r\n* fixing the fetcher error handling\r\n\r\n* TODO for handling the writer error better\r\n\r\n* fetcher cleanup on error\r\n\r\n* fix test for fullsync spec\r\n\r\n* resolve the fetcher on successful run\r\n\r\n* referesh status of peer on fetcher error\r\n\r\n* stubs for server\r\n\r\n* updating the sig of connect to match with mockserver\r\n\r\n* fetcher error debug log\r\n\r\n* Handle  reorg possibility\r\n\r\n* fix fullsync test case\r\n\r\n* nits, cleanup, add peer reconnection after ban if peerpool is empty\r\n\r\n* fixing the writer as async writev was messing with order\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2022-03-15T12:05:32+01:00",
          "tree_id": "7f95f8b3ca1ee36b8221d90565b117a88048ddbf",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b1bf67c41c627057ebe23f244780b199886b12ec"
        },
        "date": 1647342713909,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 12828,
            "range": "±16.13%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 15256,
            "range": "±6.99%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14410,
            "range": "±2.46%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8022,
            "range": "±27.77%",
            "unit": "ops/sec",
            "extra": "47 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14423,
            "range": "±21.68%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 770,
            "range": "±7.96%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 167,
            "range": "±10.90%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 28.56,
            "range": "±134.03%",
            "unit": "ops/sec",
            "extra": "21 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 13.99,
            "range": "±27.71%",
            "unit": "ops/sec",
            "extra": "30 samples"
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
          "id": "010322d80663e34844b92bbbdbbf12d150dd7be1",
          "message": "VM, Common: implement eip-3540 (EOF1) (#1719)\n\n* Add EIP json\r\n\r\n* Partial changes to enable EIp3540 and start code checks\r\n\r\n* Finish code validation checks and API tests\r\n\r\n* Move eof params to common\r\n\r\n* Code execution context updates\r\n\r\n* Add exception for invalid EOF format\r\n\r\n* Various fixes\r\n\r\n* Gate push handler changes behind EIP\r\n\r\n* Remove ethereum/tests tests\r\n\r\n* Clarify eof helper variable names\r\n\r\n* more naming clarifications\r\n\r\n* rename bytecode to container\r\n\r\n* check that section sizes are greater than 0\r\n\r\n* VM, Common: Add EIP-3670 (EOF - Code Validation) (#1743)\r\n\r\n* EIP3670 EOF1 code validation changes\r\n\r\n* Fix typos, add tests, update error EOF handler\r\n\r\n* EIP3540 tests\r\n\r\n* Lint fixes\r\n\r\n* Fix tests\r\n\r\n* Lint/uncomment tests\r\n\r\n* More adjustments to EOF1 logic\r\n\r\n* compartmentalize tests\r\n\r\n* Add checks for newly deployed contract code\r\n\r\n* Fix state test runner for specified EIPs\r\n\r\n* vm: add eip3540 tests invalid eof initcode\r\n\r\n* vm: lint\r\n\r\n* vm/tests: cleanup 3540 tests\r\n\r\n* Address feedback\r\n\r\n* lint\r\n\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2022-03-15T12:42:11+01:00",
          "tree_id": "e18329763464ddefc5df254eea16fa2ee81f5e67",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/010322d80663e34844b92bbbdbbf12d150dd7be1"
        },
        "date": 1647344890431,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11857,
            "range": "±6.78%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 10921,
            "range": "±15.62%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11972,
            "range": "±3.54%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 11653,
            "range": "±3.89%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6445,
            "range": "±46.25%",
            "unit": "ops/sec",
            "extra": "30 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 750,
            "range": "±6.67%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 153,
            "range": "±12.32%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 39.31,
            "range": "±99.46%",
            "unit": "ops/sec",
            "extra": "36 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 12.78,
            "range": "±28.35%",
            "unit": "ops/sec",
            "extra": "29 samples"
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
          "id": "fb7d52a401958bfbc3732a77504cdad43e340917",
          "message": "client: expand getLogs to accept array of addresses (#1783)\n\n* expand getLogs to accept array of addresses\r\n\r\n* bump getLogs block range limit from 2000 to 2500 for teku",
          "timestamp": "2022-03-16T09:49:08+01:00",
          "tree_id": "e2cd0783e020789b95bd13370199a04f2cd63959",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fb7d52a401958bfbc3732a77504cdad43e340917"
        },
        "date": 1647420890330,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11824,
            "range": "±9.02%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 10867,
            "range": "±16.29%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 13556,
            "range": "±2.89%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 10256,
            "range": "±16.50%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 8063,
            "range": "±44.97%",
            "unit": "ops/sec",
            "extra": "53 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 781,
            "range": "±5.79%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 149,
            "range": "±12.99%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 35.21,
            "range": "±106.68%",
            "unit": "ops/sec",
            "extra": "33 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 14.36,
            "range": "±15.74%",
            "unit": "ops/sec",
            "extra": "31 samples"
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
          "id": "de8f6dd3751832db4278d56bb5574ed800e45ba8",
          "message": "VM: EIP-3450, EIP-3670 Improvements and Test Clean-Ups (#1795)\n\n* VM: removed unnecessary EIP-3541 activation in EIP-3540 tests (part of London HF)\r\n\r\n* VM: basic EIP-3540/EIP-3670 test formatting corrections\r\n\r\n* VM: moved EOF code to dedicated file, new constants for FORMAT, MAGIC and VERSION\r\n\r\n* VM: simplify EIP-3540 test code\r\n\r\n* VM: further simplify EIP-3540 test code\r\n\r\n* VM: further clean-ups, simplify EIP-3670 test code\r\n\r\n* VM: minor EIP-3670 test clean-up and improvements",
          "timestamp": "2022-03-16T14:23:18+01:00",
          "tree_id": "1d3b8c289311b1634df62c18aa03104c5d35ad30",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/de8f6dd3751832db4278d56bb5574ed800e45ba8"
        },
        "date": 1647437375879,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16014,
            "range": "±14.36%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 18180,
            "range": "±1.89%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15113,
            "range": "±13.67%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7465,
            "range": "±42.11%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 18949,
            "range": "±1.65%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 900,
            "range": "±7.25%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 153,
            "range": "±35.37%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 93.79,
            "range": "±6.95%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 17.17,
            "range": "±25.42%",
            "unit": "ops/sec",
            "extra": "36 samples"
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
        "date": 1647454189988,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 12312,
            "range": "±16.24%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 11357,
            "range": "±18.00%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 13806,
            "range": "±2.99%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 10021,
            "range": "±17.95%",
            "unit": "ops/sec",
            "extra": "53 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 9921,
            "range": "±49.72%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 760,
            "range": "±7.83%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 155,
            "range": "±11.22%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 64.02,
            "range": "±42.71%",
            "unit": "ops/sec",
            "extra": "31 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 13.61,
            "range": "±25.63%",
            "unit": "ops/sec",
            "extra": "31 samples"
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
        "date": 1647506973941,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14545,
            "range": "±16.11%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17121,
            "range": "±2.40%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16125,
            "range": "±2.22%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7335,
            "range": "±29.20%",
            "unit": "ops/sec",
            "extra": "37 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 18567,
            "range": "±2.60%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 872,
            "range": "±7.50%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 177,
            "range": "±10.84%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 24.37,
            "range": "±145.23%",
            "unit": "ops/sec",
            "extra": "17 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 15.8,
            "range": "±30.09%",
            "unit": "ops/sec",
            "extra": "31 samples"
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
        "date": 1647509032132,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15333,
            "range": "±15.55%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16915,
            "range": "±1.29%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15717,
            "range": "±1.91%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8184,
            "range": "±30.20%",
            "unit": "ops/sec",
            "extra": "39 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 18136,
            "range": "±2.57%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 881,
            "range": "±6.01%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 183,
            "range": "±10.89%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 28.18,
            "range": "±137.18%",
            "unit": "ops/sec",
            "extra": "20 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 16.94,
            "range": "±25.30%",
            "unit": "ops/sec",
            "extra": "33 samples"
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
        "date": 1647546728088,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15796,
            "range": "±14.62%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17569,
            "range": "±1.17%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16377,
            "range": "±1.72%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7475,
            "range": "±33.22%",
            "unit": "ops/sec",
            "extra": "51 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 18493,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 886,
            "range": "±7.61%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 182,
            "range": "±11.12%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 59.42,
            "range": "±62.40%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 15.73,
            "range": "±29.58%",
            "unit": "ops/sec",
            "extra": "31 samples"
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
        "date": 1647567085106,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13673,
            "range": "±15.26%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16113,
            "range": "±1.65%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15097,
            "range": "±1.79%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6876,
            "range": "±36.30%",
            "unit": "ops/sec",
            "extra": "35 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 17963,
            "range": "±2.64%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 823,
            "range": "±7.03%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 171,
            "range": "±10.81%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 35.28,
            "range": "±106.34%",
            "unit": "ops/sec",
            "extra": "16 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 15.99,
            "range": "±27.82%",
            "unit": "ops/sec",
            "extra": "31 samples"
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
        "date": 1647691691154,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 17500,
            "range": "±15.03%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 19764,
            "range": "±2.39%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 13367,
            "range": "±18.16%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 12533,
            "range": "±42.04%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 20559,
            "range": "±2.38%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 968,
            "range": "±5.82%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 88.55,
            "range": "±103.92%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 97.53,
            "range": "±8.73%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9,
            "range": "±100.86%",
            "unit": "ops/sec",
            "extra": "33 samples"
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
        "date": 1647936443030,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 10561,
            "range": "±10.06%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 9718,
            "range": "±16.86%",
            "unit": "ops/sec",
            "extra": "53 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11370,
            "range": "±3.18%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 10910,
            "range": "±3.14%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 8917,
            "range": "±21.51%",
            "unit": "ops/sec",
            "extra": "43 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 467,
            "range": "±46.25%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 142,
            "range": "±11.10%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 42.89,
            "range": "±85.63%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 13.91,
            "range": "±9.29%",
            "unit": "ops/sec",
            "extra": "36 samples"
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
        "date": 1647940045678,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15339,
            "range": "±16.00%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17278,
            "range": "±2.20%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15426,
            "range": "±2.14%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7684,
            "range": "±32.16%",
            "unit": "ops/sec",
            "extra": "39 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 18101,
            "range": "±2.84%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 838,
            "range": "±7.13%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 176,
            "range": "±10.94%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 25.62,
            "range": "±141.88%",
            "unit": "ops/sec",
            "extra": "18 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 18.53,
            "range": "±5.86%",
            "unit": "ops/sec",
            "extra": "32 samples"
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
        "date": 1647941976015,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 12849,
            "range": "±10.75%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 10489,
            "range": "±30.51%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 13253,
            "range": "±3.27%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 10625,
            "range": "±21.57%",
            "unit": "ops/sec",
            "extra": "39 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6866,
            "range": "±26.84%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 664,
            "range": "±9.04%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 143,
            "range": "±13.03%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 40.22,
            "range": "±94.04%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 13.19,
            "range": "±25.83%",
            "unit": "ops/sec",
            "extra": "29 samples"
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
        "date": 1647946435765,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16248,
            "range": "±14.61%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 18307,
            "range": "±1.86%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16974,
            "range": "±4.06%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6806,
            "range": "±28.06%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 19361,
            "range": "±2.52%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 925,
            "range": "±6.24%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 158,
            "range": "±33.01%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 83.65,
            "range": "±18.95%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.88,
            "range": "±98.79%",
            "unit": "ops/sec",
            "extra": "36 samples"
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
        "date": 1647991283763,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 17685,
            "range": "±13.45%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 19462,
            "range": "±1.50%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14873,
            "range": "±14.93%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 9210,
            "range": "±33.83%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 18011,
            "range": "±2.87%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 892,
            "range": "±6.50%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 110,
            "range": "±85.84%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 86.11,
            "range": "±19.73%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.94,
            "range": "±101.17%",
            "unit": "ops/sec",
            "extra": "35 samples"
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
        "date": 1648020101178,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14182,
            "range": "±13.88%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16115,
            "range": "±1.83%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15460,
            "range": "±2.22%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8057,
            "range": "±33.88%",
            "unit": "ops/sec",
            "extra": "38 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 17713,
            "range": "±3.02%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 755,
            "range": "±8.52%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 159,
            "range": "±12.94%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 28.83,
            "range": "±132.50%",
            "unit": "ops/sec",
            "extra": "21 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 16.37,
            "range": "±15.16%",
            "unit": "ops/sec",
            "extra": "32 samples"
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
        "date": 1648029076329,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15475,
            "range": "±15.52%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17587,
            "range": "±2.22%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16103,
            "range": "±2.12%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8289,
            "range": "±32.59%",
            "unit": "ops/sec",
            "extra": "40 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 18503,
            "range": "±1.98%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 892,
            "range": "±7.53%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 178,
            "range": "±12.00%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 51.64,
            "range": "±84.61%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 15.96,
            "range": "±25.90%",
            "unit": "ops/sec",
            "extra": "35 samples"
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
        "date": 1648037844421,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13678,
            "range": "±10.58%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 13162,
            "range": "±11.34%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 8295,
            "range": "±39.14%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13093,
            "range": "±3.24%",
            "unit": "ops/sec",
            "extra": "51 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 15652,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "47 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 751,
            "range": "±7.29%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 152,
            "range": "±12.84%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 17.95,
            "range": "±158.46%",
            "unit": "ops/sec",
            "extra": "15 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 16.52,
            "range": "±5.30%",
            "unit": "ops/sec",
            "extra": "31 samples"
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
        "date": 1648196983447,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11156,
            "range": "±18.24%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 13385,
            "range": "±3.30%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 7619,
            "range": "±25.87%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 11898,
            "range": "±3.00%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14471,
            "range": "±3.25%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 774,
            "range": "±7.06%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 146,
            "range": "±13.48%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 21.26,
            "range": "±153.65%",
            "unit": "ops/sec",
            "extra": "18 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 14.76,
            "range": "±8.39%",
            "unit": "ops/sec",
            "extra": "30 samples"
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
        "date": 1648199692829,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14384,
            "range": "±15.44%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14563,
            "range": "±7.98%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 7716,
            "range": "±31.25%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13959,
            "range": "±2.68%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 16564,
            "range": "±1.62%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 823,
            "range": "±6.67%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 171,
            "range": "±6.51%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 44.12,
            "range": "±90.92%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 17.3,
            "range": "±5.19%",
            "unit": "ops/sec",
            "extra": "30 samples"
          }
        ]
      }
    ]
  }
}