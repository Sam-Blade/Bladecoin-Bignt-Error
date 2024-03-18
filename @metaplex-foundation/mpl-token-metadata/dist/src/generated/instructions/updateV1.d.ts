/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Context, Option, OptionOrNullable, Pda, PublicKey, Signer, TransactionBuilder } from '@metaplex-foundation/umi';
import { Serializer } from '@metaplex-foundation/umi/serializers';
import { AuthorizationData, AuthorizationDataArgs, CollectionDetailsToggle, CollectionDetailsToggleArgs, CollectionToggle, CollectionToggleArgs, Data, DataArgs, RuleSetToggle, RuleSetToggleArgs, UsesToggle, UsesToggleArgs } from '../types';
export type UpdateV1InstructionAccounts = {
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
export type UpdateV1InstructionData = {
    discriminator: number;
    updateV1Discriminator: number;
    newUpdateAuthority: Option<PublicKey>;
    data: Option<Data>;
    primarySaleHappened: Option<boolean>;
    isMutable: Option<boolean>;
    collection: CollectionToggle;
    collectionDetails: CollectionDetailsToggle;
    uses: UsesToggle;
    ruleSet: RuleSetToggle;
    authorizationData: Option<AuthorizationData>;
};
export type UpdateV1InstructionDataArgs = {
    newUpdateAuthority?: OptionOrNullable<PublicKey>;
    data?: OptionOrNullable<DataArgs>;
    primarySaleHappened?: OptionOrNullable<boolean>;
    isMutable?: OptionOrNullable<boolean>;
    collection?: CollectionToggleArgs;
    collectionDetails?: CollectionDetailsToggleArgs;
    uses?: UsesToggleArgs;
    ruleSet?: RuleSetToggleArgs;
    authorizationData?: OptionOrNullable<AuthorizationDataArgs>;
};
export declare function getUpdateV1InstructionDataSerializer(): Serializer<UpdateV1InstructionDataArgs, UpdateV1InstructionData>;
export type UpdateV1InstructionArgs = UpdateV1InstructionDataArgs;
export declare function updateV1(context: Pick<Context, 'eddsa' | 'identity' | 'payer' | 'programs'>, input: UpdateV1InstructionAccounts & UpdateV1InstructionArgs): TransactionBuilder;