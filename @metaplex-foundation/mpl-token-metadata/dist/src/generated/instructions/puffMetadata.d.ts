/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Context, Pda, PublicKey, TransactionBuilder } from '@metaplex-foundation/umi';
import { Serializer } from '@metaplex-foundation/umi/serializers';
export type PuffMetadataInstructionAccounts = {
    /** Metadata account */
    metadata: PublicKey | Pda;
};
export type PuffMetadataInstructionData = {
    discriminator: number;
};
export type PuffMetadataInstructionDataArgs = {};
export declare function getPuffMetadataInstructionDataSerializer(): Serializer<PuffMetadataInstructionDataArgs, PuffMetadataInstructionData>;
export declare function puffMetadata(context: Pick<Context, 'programs'>, input: PuffMetadataInstructionAccounts): TransactionBuilder;