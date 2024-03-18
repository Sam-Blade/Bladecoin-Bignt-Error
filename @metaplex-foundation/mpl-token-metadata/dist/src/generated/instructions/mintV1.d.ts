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
export type MintV1InstructionAccounts = {
    /** Token or Associated Token account */
    token?: PublicKey | Pda;
    /** Owner of the token account */
    tokenOwner?: PublicKey | Pda;
    /** Metadata account (pda of ['metadata', program id, mint id]) */
    metadata?: PublicKey | Pda;
    /** Master Edition account */
    masterEdition?: PublicKey | Pda;
    /** Token record account */
    tokenRecord?: PublicKey | Pda;
    /** Mint of token asset */
    mint: PublicKey | Pda;
    /** (Mint or Update) authority */
    authority?: Signer;
    /** Metadata delegate record */
    delegateRecord?: PublicKey | Pda;
    /** Payer */
    payer?: Signer;
    /** System program */
    systemProgram?: PublicKey | Pda;
    /** Instructions sysvar account */
    sysvarInstructions?: PublicKey | Pda;
    /** SPL Token program */
    splTokenProgram?: PublicKey | Pda;
    /** SPL Associated Token Account program */
    splAtaProgram?: PublicKey | Pda;
    /** Token Authorization Rules program */
    authorizationRulesProgram?: PublicKey | Pda;
    /** Token Authorization Rules account */
    authorizationRules?: PublicKey | Pda;
};
export type MintV1InstructionData = {
    discriminator: number;
    mintV1Discriminator: number;
    amount: bigint;
    authorizationData: Option<AuthorizationData>;
};
export type MintV1InstructionDataArgs = {
    amount?: number | bigint;
    authorizationData?: OptionOrNullable<AuthorizationDataArgs>;
};
export declare function getMintV1InstructionDataSerializer(): Serializer<MintV1InstructionDataArgs, MintV1InstructionData>;
export type MintV1InstructionExtraArgs = {
    tokenStandard: TokenStandardArgs;
};
export type MintV1InstructionArgs = MintV1InstructionDataArgs & MintV1InstructionExtraArgs;
export declare function mintV1(context: Pick<Context, 'eddsa' | 'identity' | 'payer' | 'programs'>, input: MintV1InstructionAccounts & MintV1InstructionArgs): TransactionBuilder;
