/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Context, Option, OptionOrNullable, Pda, PublicKey, Signer, TransactionBuilder } from '@metaplex-foundation/umi';
import { Serializer } from '@metaplex-foundation/umi/serializers';
import { AuthorizationData, AuthorizationDataArgs, TokenStandardArgs } from '../types';
export type TransferV1InstructionAccounts = {
    /** Token account */
    token?: PublicKey | Pda;
    /** Token account owner */
    tokenOwner?: PublicKey | Pda;
    /** Destination token account */
    destinationToken?: PublicKey | Pda;
    /** Destination token account owner */
    destinationOwner: PublicKey | Pda;
    /** Mint of token asset */
    mint: PublicKey | Pda;
    /** Metadata (pda of ['metadata', program id, mint id]) */
    metadata?: PublicKey | Pda;
    /** Edition of token asset */
    edition?: PublicKey | Pda;
    /** Owner token record account */
    tokenRecord?: PublicKey | Pda;
    /** Destination token record account */
    destinationTokenRecord?: PublicKey | Pda;
    /** Transfer authority (token owner or delegate) */
    authority?: Signer;
    /** Payer */
    payer?: Signer;
    /** System Program */
    systemProgram?: PublicKey | Pda;
    /** Instructions sysvar account */
    sysvarInstructions?: PublicKey | Pda;
    /** SPL Token Program */
    splTokenProgram?: PublicKey | Pda;
    /** SPL Associated Token Account program */
    splAtaProgram?: PublicKey | Pda;
    /** Token Authorization Rules Program */
    authorizationRulesProgram?: PublicKey | Pda;
    /** Token Authorization Rules account */
    authorizationRules?: PublicKey | Pda;
};
export type TransferV1InstructionData = {
    discriminator: number;
    transferV1Discriminator: number;
    amount: bigint;
    authorizationData: Option<AuthorizationData>;
};
export type TransferV1InstructionDataArgs = {
    amount?: number | bigint;
    authorizationData?: OptionOrNullable<AuthorizationDataArgs>;
};
export declare function getTransferV1InstructionDataSerializer(): Serializer<TransferV1InstructionDataArgs, TransferV1InstructionData>;
export type TransferV1InstructionExtraArgs = {
    tokenStandard: TokenStandardArgs;
};
export type TransferV1InstructionArgs = TransferV1InstructionDataArgs & TransferV1InstructionExtraArgs;
export declare function transferV1(context: Pick<Context, 'eddsa' | 'identity' | 'payer' | 'programs'>, input: TransferV1InstructionAccounts & TransferV1InstructionArgs): TransactionBuilder;
