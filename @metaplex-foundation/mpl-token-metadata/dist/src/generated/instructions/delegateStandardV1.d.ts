/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Context, Pda, PublicKey, Signer, TransactionBuilder } from '@metaplex-foundation/umi';
import { Serializer } from '@metaplex-foundation/umi/serializers';
import { PickPartial } from '../shared';
import { TokenStandardArgs } from '../types';
export type DelegateStandardV1InstructionAccounts = {
    /** Delegate record account */
    delegateRecord?: PublicKey | Pda;
    /** Owner of the delegated account */
    delegate: PublicKey | Pda;
    /** Metadata account */
    metadata?: PublicKey | Pda;
    /** Master Edition account */
    masterEdition?: PublicKey | Pda;
    /** Token record account */
    tokenRecord?: PublicKey | Pda;
    /** Mint of metadata */
    mint: PublicKey | Pda;
    /** Token account of mint */
    token?: PublicKey | Pda;
    /** Update authority or token owner */
    authority?: Signer;
    /** Payer */
    payer?: Signer;
    /** System Program */
    systemProgram?: PublicKey | Pda;
    /** Instructions sysvar account */
    sysvarInstructions?: PublicKey | Pda;
    /** SPL Token Program */
    splTokenProgram?: PublicKey | Pda;
    /** Token Authorization Rules Program */
    authorizationRulesProgram?: PublicKey | Pda;
    /** Token Authorization Rules account */
    authorizationRules?: PublicKey | Pda;
};
export type DelegateStandardV1InstructionData = {
    discriminator: number;
    delegateStandardV1Discriminator: number;
    amount: bigint;
};
export type DelegateStandardV1InstructionDataArgs = {
    amount?: number | bigint;
};
export declare function getDelegateStandardV1InstructionDataSerializer(): Serializer<DelegateStandardV1InstructionDataArgs, DelegateStandardV1InstructionData>;
export type DelegateStandardV1InstructionExtraArgs = {
    tokenStandard: TokenStandardArgs;
    tokenOwner: PublicKey;
};
export type DelegateStandardV1InstructionArgs = PickPartial<DelegateStandardV1InstructionDataArgs & DelegateStandardV1InstructionExtraArgs, 'tokenOwner'>;
export declare function delegateStandardV1(context: Pick<Context, 'eddsa' | 'identity' | 'payer' | 'programs'>, input: DelegateStandardV1InstructionAccounts & DelegateStandardV1InstructionArgs): TransactionBuilder;
