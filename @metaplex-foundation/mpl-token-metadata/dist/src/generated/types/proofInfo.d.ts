/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Serializer } from '@metaplex-foundation/umi/serializers';
export type ProofInfo = {
    proof: Array<Uint8Array>;
};
export type ProofInfoArgs = ProofInfo;
export declare function getProofInfoSerializer(): Serializer<ProofInfoArgs, ProofInfo>;