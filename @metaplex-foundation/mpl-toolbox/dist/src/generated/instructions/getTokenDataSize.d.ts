/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Context, Pda, PublicKey, TransactionBuilder } from '@metaplex-foundation/umi';
import { Serializer } from '@metaplex-foundation/umi/serializers';
export type GetTokenDataSizeInstructionAccounts = {
    mint: PublicKey | Pda;
};
export type GetTokenDataSizeInstructionData = {
    discriminator: number;
};
export type GetTokenDataSizeInstructionDataArgs = {};
export declare function getGetTokenDataSizeInstructionDataSerializer(): Serializer<GetTokenDataSizeInstructionDataArgs, GetTokenDataSizeInstructionData>;
export declare function getTokenDataSize(context: Pick<Context, 'programs'>, input: GetTokenDataSizeInstructionAccounts): TransactionBuilder;