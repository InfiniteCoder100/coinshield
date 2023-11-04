<p align="center"><h1 align="center">coinshield 🔮</h1></p>

## Mission

To bring zero knowledge privacy primitives to all web3 developers.

## Disclaimer

This code is unaudited and under construction. This is experimental software and is provided on an "as is" and "as available" basis and may not work at all. This code is not fit for human or AI consumption and should not be used in production.

## Roadmap

- [x] ZRC-20 (Token & Payment)
- [x] ZRC-1155 (Payment / Swap / NFTS / Airdrops)
- [x] Defi Swaps
- [x] Defiant Pools Prototype (Zero Knowledge Deposit Addresses pt I)
- [x] Refactor to groth16
- [x] Implement encrypted store in indexDB
- [ ] Test that utxo store recovers from partial hydration

## Future goals

- [ ] Deposit via proof of deposit (Requires TX proving in Zero Knowledge - possibly with Nova / Halo)
- [ ] Withdrawal via threshold network
- [ ] Refactor and redesign of API
- [ ] CLI creation

### Prerequisites

- pnpm (8.2.0+)
- circom (2.1.5+)
- b2sum (8.3.2+)



### Install dependencies

```
pnpm install
```

### Run tests

```
pnpm test
```

- Run integration tests

### Build project

```
pnpm build
```

- Build circuit artifacts
- Bundle all keys encoded to json files

### Run wallet example

```
pnpm wallet
```

- run the wallet application
