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
import { AuthorizationData, AuthorizationDataArgs, Data, DataArgs } from '../types';
export type UpdateAsDataDelegateV2InstructionAccounts = {
    /** Update authority or delegate */
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
    /** Instructions sysvar account */
    sysvarInstructions?: PublicKey | Pda;
    /** Token Authorization Rules Program */
    authorizationRulesProgram?: PublicKey | Pda;
    /** Token Authorization Rules account */
    authorizationRules?: PublicKey | Pda;
};
export type UpdateAsDataDelegateV2InstructionData = {
    discriminator: number;
    updateAsDataDelegateV2Discriminator: number;
    data: Option<Data>;
    authorizationData: Option<AuthorizationData>;
};
export type UpdateAsDataDelegateV2InstructionDataArgs = {
    data?: OptionOrNullable<DataArgs>;
    authorizationData?: OptionOrNullable<AuthorizationDataArgs>;
};
export declare function getUpdateAsDataDelegateV2InstructionDataSerializer(): Serializer<UpdateAsDataDelegateV2InstructionDataArgs, UpdateAsDataDelegateV2InstructionData>;
export type UpdateAsDataDelegateV2InstructionExtraArgs = {
    delegateMint: PublicKey;
    delegateUpdateAuthority: PublicKey;
};
export type UpdateAsDataDelegateV2InstructionArgs = PickPartial<UpdateAsDataDelegateV2InstructionDataArgs & UpdateAsDataDelegateV2InstructionExtraArgs, 'delegateMint' | 'delegateUpdateAuthority'>;
export declare function updateAsDataDelegateV2(context: Pick<Context, 'eddsa' | 'identity' | 'payer' | 'programs'>, input: UpdateAsDataDelegateV2InstructionAccounts & UpdateAsDataDelegateV2InstructionArgs): TransactionBuilder;