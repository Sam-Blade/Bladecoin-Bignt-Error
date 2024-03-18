/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Context, Option, OptionOrNullable, Pda, PublicKey, Signer, TransactionBuilder } from '@metaplex-foundation/umi';
import { Serializer } from '@metaplex-foundation/umi/serializers';
import { AuthorizationData, AuthorizationDataArgs } from '../types';
export type UseV1InstructionAccounts = {
    /** Token owner or delegate */
    authority?: Signer;
    /** Delegate record PDA */
    delegateRecord?: PublicKey | Pda;
    /** Token account */
    token?: PublicKey | Pda;
    /** Mint account */
    mint: PublicKey | Pda;
    /** Metadata account */
    metadata?: PublicKey | Pda;
    /** Edition account */
    edition?: PublicKey | Pda;
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
export type UseV1InstructionData = {
    discriminator: number;
    useV1Discriminator: number;
    authorizationData: Option<AuthorizationData>;
};
export type UseV1InstructionDataArgs = {
    authorizationData?: OptionOrNullable<AuthorizationDataArgs>;
};
export declare function getUseV1InstructionDataSerializer(): Serializer<UseV1InstructionDataArgs, UseV1InstructionData>;
export type UseV1InstructionArgs = UseV1InstructionDataArgs;
export declare function useV1(context: Pick<Context, 'eddsa' | 'identity' | 'payer' | 'programs'>, input: UseV1InstructionAccounts & UseV1InstructionArgs): TransactionBuilder;