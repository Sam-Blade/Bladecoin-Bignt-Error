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
export type RevokeLockedTransferV1InstructionAccounts = {
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
export type RevokeLockedTransferV1InstructionData = {
    discriminator: number;
    revokeLockedTransferV1Discriminator: number;
};
export type RevokeLockedTransferV1InstructionDataArgs = {};
export declare function getRevokeLockedTransferV1InstructionDataSerializer(): Serializer<RevokeLockedTransferV1InstructionDataArgs, RevokeLockedTransferV1InstructionData>;
export type RevokeLockedTransferV1InstructionExtraArgs = {
    tokenStandard: TokenStandardArgs;
    tokenOwner: PublicKey;
};
export type RevokeLockedTransferV1InstructionArgs = PickPartial<RevokeLockedTransferV1InstructionExtraArgs, 'tokenOwner'>;
export declare function revokeLockedTransferV1(context: Pick<Context, 'eddsa' | 'identity' | 'payer' | 'programs'>, input: RevokeLockedTransferV1InstructionAccounts & RevokeLockedTransferV1InstructionArgs): TransactionBuilder;
