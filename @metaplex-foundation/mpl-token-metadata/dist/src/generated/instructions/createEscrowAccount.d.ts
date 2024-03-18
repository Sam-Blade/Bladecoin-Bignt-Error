/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Context, Pda, PublicKey, Signer, TransactionBuilder } from '@metaplex-foundation/umi';
import { Serializer } from '@metaplex-foundation/umi/serializers';
export type CreateEscrowAccountInstructionAccounts = {
    /** Escrow account */
    escrow: PublicKey | Pda;
    /** Metadata account */
    metadata?: PublicKey | Pda;
    /** Mint account */
    mint: PublicKey | Pda;
    /** Token account of the token */
    tokenAccount: PublicKey | Pda;
    /** Edition account */
    edition?: PublicKey | Pda;
    /** Wallet paying for the transaction and new account */
    payer?: Signer;
    /** System program */
    systemProgram?: PublicKey | Pda;
    /** Instructions sysvar account */
    sysvarInstructions?: PublicKey | Pda;
    /** Authority/creator of the escrow account */
    authority?: Signer;
};
export type CreateEscrowAccountInstructionData = {
    discriminator: number;
};
export type CreateEscrowAccountInstructionDataArgs = {};
export declare function getCreateEscrowAccountInstructionDataSerializer(): Serializer<CreateEscrowAccountInstructionDataArgs, CreateEscrowAccountInstructionData>;
export declare function createEscrowAccount(context: Pick<Context, 'eddsa' | 'payer' | 'programs'>, input: CreateEscrowAccountInstructionAccounts): TransactionBuilder;
