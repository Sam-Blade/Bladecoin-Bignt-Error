/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Context, Pda, PublicKey, TransactionBuilder } from '@metaplex-foundation/umi';
import { Serializer } from '@metaplex-foundation/umi/serializers';
export type AmountToUiAmountInstructionAccounts = {
    mint: PublicKey | Pda;
};
export type AmountToUiAmountInstructionData = {
    discriminator: number;
    amount: bigint;
};
export type AmountToUiAmountInstructionDataArgs = {
    amount: number | bigint;
};
export declare function getAmountToUiAmountInstructionDataSerializer(): Serializer<AmountToUiAmountInstructionDataArgs, AmountToUiAmountInstructionData>;
export type AmountToUiAmountInstructionArgs = AmountToUiAmountInstructionDataArgs;
export declare function amountToUiAmount(context: Pick<Context, 'programs'>, input: AmountToUiAmountInstructionAccounts & AmountToUiAmountInstructionArgs): TransactionBuilder;
