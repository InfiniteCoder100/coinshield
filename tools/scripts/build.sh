#!/bin/bash

capitalize() {
  printf '%s' "$1" | head -c 1 | tr [:lower:] [:upper:]
  printf '%s' "$1" | tail -c '+2'
}

FNAME=$1
FNAME_CAPS=$(capitalize $FNAME)

mkdir -p ./compiled
mkdir -p ./contracts

circom ./circuits/$FNAME.circom --r1cs --wasm -o ./compiled

snarkjs plonk setup ./compiled/$FNAME.r1cs ./pot/pot.ptau ./compiled/$FNAME.zkey

snarkjs zkey export solidityverifier ./compiled/${FNAME}.zkey ./contracts/${FNAME}_verifier.sol

# Detect OS type
OS_TYPE="$(uname)"

if [ "$OS_TYPE" = "Darwin" ]; then
  # macOS
  sed -i '' "s/contract PlonkVerifier/contract ${FNAME_CAPS}Verifier/g" ./contracts/${FNAME}_verifier.sol
else
  # Linux
  sed -i "s/contract PlonkVerifier/contract ${FNAME_CAPS}Verifier/g" ./contracts/${FNAME}_verifier.sol
fi