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
export type UnlockV1InstructionAccounts = {
    /** Delegate or freeze authority */
    authority?: Signer;
    /** Token owner account */
    tokenOwner?: PublicKey | Pda;
    /** Token account */
    token?: PublicKey | Pda;
    /** Mint account */
    mint: PublicKey | Pda;
    /** Metadata account */
    metadata?: PublicKey | Pda;
    /** Edition account */
    edition?: PublicKey | Pda;
    /** Token record account */
    tokenRecord?: PublicKey | Pda;
    /** Payer */
    payer?: Signer;
    /** System program */
    systemProgram?: PublicKey | Pda;
    /** System program */
    sysvarInstructions?: PublicKey | Pda;
    /** SPL Token Program */
    splTokenProgram?: PublicKey | Pda;
    /** Token Authorization Rules Program */
    authorizationRulesProgram?: PublicKey | Pda;
    /** Token Authorization Rules account */
    authorizationRules?: PublicKey | Pda;
};
export type UnlockV1InstructionData = {
    discriminator: number;
    unlockV1Discriminator: number;
    authorizationData: Option<AuthorizationData>;
};
export type UnlockV1InstructionDataArgs = {
    authorizationData?: OptionOrNullable<AuthorizationDataArgs>;
};
export declare function getUnlockV1InstructionDataSerializer(): Serializer<UnlockV1InstructionDataArgs, UnlockV1InstructionData>;
export type UnlockV1InstructionExtraArgs = {
    tokenStandard: TokenStandardArgs;
};
export type UnlockV1InstructionArgs = UnlockV1InstructionDataArgs & UnlockV1InstructionExtraArgs;
export declare function unlockV1(context: Pick<Context, 'eddsa' | 'identity' | 'payer' | 'programs'>, input: UnlockV1InstructionAccounts & UnlockV1InstructionArgs): TransactionBuilder;
