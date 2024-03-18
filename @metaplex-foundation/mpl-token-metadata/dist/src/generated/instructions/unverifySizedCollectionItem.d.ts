/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Context, Pda, PublicKey, Signer, TransactionBuilder } from '@metaplex-foundation/umi';
import { Serializer } from '@metaplex-foundation/umi/serializers';
export type UnverifySizedCollectionItemInstructionAccounts = {
    /** Metadata account */
    metadata: PublicKey | Pda;
    /** Collection Authority */
    collectionAuthority: Signer;
    /** payer */
    payer?: Signer;
    /** Mint of the Collection */
    collectionMint: PublicKey | Pda;
    /** Metadata Account of the Collection */
    collection: PublicKey | Pda;
    /** MasterEdition2 Account of the Collection Token */
    collectionMasterEditionAccount: PublicKey | Pda;
    /** Collection Authority Record PDA */
    collectionAuthorityRecord?: PublicKey | Pda;
};
export type UnverifySizedCollectionItemInstructionData = {
    discriminator: number;
};
export type UnverifySizedCollectionItemInstructionDataArgs = {};
export declare function getUnverifySizedCollectionItemInstructionDataSerializer(): Serializer<UnverifySizedCollectionItemInstructionDataArgs, UnverifySizedCollectionItemInstructionData>;
export declare function unverifySizedCollectionItem(context: Pick<Context, 'payer' | 'programs'>, input: UnverifySizedCollectionItemInstructionAccounts): TransactionBuilder;
