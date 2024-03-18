/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Context, Pda, PublicKey, Signer, TransactionBuilder } from '@metaplex-foundation/umi';
import { Serializer } from '@metaplex-foundation/umi/serializers';
import { SetCollectionSizeArgs, SetCollectionSizeArgsArgs } from '../types';
export type BubblegumSetCollectionSizeInstructionAccounts = {
    /** Collection Metadata account */
    collectionMetadata: PublicKey | Pda;
    /** Collection Update authority */
    collectionAuthority: Signer;
    /** Mint of the Collection */
    collectionMint: PublicKey | Pda;
    /** Signing PDA of Bubblegum program */
    bubblegumSigner: Signer;
    /** Collection Authority Record PDA */
    collectionAuthorityRecord?: PublicKey | Pda;
};
export type BubblegumSetCollectionSizeInstructionData = {
    discriminator: number;
    setCollectionSizeArgs: SetCollectionSizeArgs;
};
export type BubblegumSetCollectionSizeInstructionDataArgs = {
    setCollectionSizeArgs: SetCollectionSizeArgsArgs;
};
export declare function getBubblegumSetCollectionSizeInstructionDataSerializer(): Serializer<BubblegumSetCollectionSizeInstructionDataArgs, BubblegumSetCollectionSizeInstructionData>;
export type BubblegumSetCollectionSizeInstructionArgs = BubblegumSetCollectionSizeInstructionDataArgs;
export declare function bubblegumSetCollectionSize(context: Pick<Context, 'programs'>, input: BubblegumSetCollectionSizeInstructionAccounts & BubblegumSetCollectionSizeInstructionArgs): TransactionBuilder;