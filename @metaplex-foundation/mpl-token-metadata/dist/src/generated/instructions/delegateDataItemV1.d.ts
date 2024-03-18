/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Context, Option, OptionOrNullable, Pda, PublicKey, Signer, TransactionBuilder } from '@metaplex-foundation/umi';
import { Serializer } from '@metaplex-foundation/umi/serializers';
import { PickPartial } from '../shared';
import { AuthorizationData, AuthorizationDataArgs, TokenStandardArgs } from '../types';
export type DelegateDataItemV1InstructionAccounts = {
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
export type DelegateDataItemV1InstructionData = {
    discriminator: number;
    delegateDataItemV1Discriminator: number;
    authorizationData: Option<AuthorizationData>;
};
export type DelegateDataItemV1InstructionDataArgs = {
    authorizationData?: OptionOrNullable<AuthorizationDataArgs>;
};
export declare function getDelegateDataItemV1InstructionDataSerializer(): Serializer<DelegateDataItemV1InstructionDataArgs, DelegateDataItemV1InstructionData>;
export type DelegateDataItemV1InstructionExtraArgs = {
    tokenStandard: TokenStandardArgs;
    updateAuthority: PublicKey;
};
export type DelegateDataItemV1InstructionArgs = PickPartial<DelegateDataItemV1InstructionDataArgs & DelegateDataItemV1InstructionExtraArgs, 'updateAuthority'>;
export declare function delegateDataItemV1(context: Pick<Context, 'eddsa' | 'identity' | 'payer' | 'programs'>, input: DelegateDataItemV1InstructionAccounts & DelegateDataItemV1InstructionArgs): TransactionBuilder;
