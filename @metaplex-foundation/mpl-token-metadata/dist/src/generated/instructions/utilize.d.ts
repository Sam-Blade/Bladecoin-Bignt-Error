/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Context, Pda, PublicKey, Signer, TransactionBuilder } from '@metaplex-foundation/umi';
import { Serializer } from '@metaplex-foundation/umi/serializers';
export type UtilizeInstructionAccounts = {
    /** Metadata account */
    metadata?: PublicKey | Pda;
    /** Token Account Of NFT */
    tokenAccount: PublicKey | Pda;
    /** Mint of the Metadata */
    mint: PublicKey | Pda;
    /** A Use Authority / Can be the current Owner of the NFT */
    useAuthority: Signer;
    /** Owner */
    owner: PublicKey | Pda;
    /** Token program */
    tokenProgram?: PublicKey | Pda;
    /** Associated Token program */
    ataProgram?: PublicKey | Pda;
    /** System program */
    systemProgram?: PublicKey | Pda;
    /** Rent info */
    rent?: PublicKey | Pda;
    /** Use Authority Record PDA If present the program Assumes a delegated use authority */
    useAuthorityRecord?: PublicKey | Pda;
    /** Program As Signer (Burner) */
    burner?: PublicKey | Pda;
};
export type UtilizeInstructionData = {
    discriminator: number;
    numberOfUses: bigint;
};
export type UtilizeInstructionDataArgs = {
    numberOfUses: number | bigint;
};
export declare function getUtilizeInstructionDataSerializer(): Serializer<UtilizeInstructionDataArgs, UtilizeInstructionData>;
export type UtilizeInstructionArgs = UtilizeInstructionDataArgs;
export declare function utilize(context: Pick<Context, 'eddsa' | 'programs'>, input: UtilizeInstructionAccounts & UtilizeInstructionArgs): TransactionBuilder;
