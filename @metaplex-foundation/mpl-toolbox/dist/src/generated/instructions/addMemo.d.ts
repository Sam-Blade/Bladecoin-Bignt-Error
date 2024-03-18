/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Context, TransactionBuilder } from '@metaplex-foundation/umi';
import { Serializer } from '@metaplex-foundation/umi/serializers';
export type AddMemoInstructionData = {
    memo: string;
};
export type AddMemoInstructionDataArgs = AddMemoInstructionData;
export declare function getAddMemoInstructionDataSerializer(): Serializer<AddMemoInstructionDataArgs, AddMemoInstructionData>;
export type AddMemoInstructionArgs = AddMemoInstructionDataArgs;
export declare function addMemo(context: Pick<Context, 'programs'>, input: AddMemoInstructionArgs): TransactionBuilder;