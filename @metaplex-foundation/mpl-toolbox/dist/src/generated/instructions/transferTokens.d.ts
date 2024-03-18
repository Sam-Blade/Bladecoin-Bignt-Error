/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Context, Pda, PublicKey, Signer, TransactionBuilder } from '@metaplex-foundation/umi';
import { Serializer } from '@metaplex-foundation/umi/serializers';
export type TransferTokensInstructionAccounts = {
    source: PublicKey | Pda;
    destination: PublicKey | Pda;
    authority?: Signer;
};
export type TransferTokensInstructionData = {
    discriminator: number;
    amount: bigint;
};
export type TransferTokensInstructionDataArgs = {
    amount: number | bigint;
};
export declare function getTransferTokensInstructionDataSerializer(): Serializer<TransferTokensInstructionDataArgs, TransferTokensInstructionData>;
export type TransferTokensInstructionArgs = TransferTokensInstructionDataArgs;
export declare function transferTokens(context: Pick<Context, 'identity' | 'programs'>, input: TransferTokensInstructionAccounts & TransferTokensInstructionArgs): TransactionBuilder;
