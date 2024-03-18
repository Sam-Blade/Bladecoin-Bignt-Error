/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Context, Pda, PublicKey, Signer, SolAmount, TransactionBuilder } from '@metaplex-foundation/umi';
import { Serializer } from '@metaplex-foundation/umi/serializers';
export type TransferSolInstructionAccounts = {
    source?: Signer;
    destination: PublicKey | Pda;
};
export type TransferSolInstructionData = {
    discriminator: number;
    amount: SolAmount;
};
export type TransferSolInstructionDataArgs = {
    amount: SolAmount;
};
export declare function getTransferSolInstructionDataSerializer(): Serializer<TransferSolInstructionDataArgs, TransferSolInstructionData>;
export type TransferSolInstructionArgs = TransferSolInstructionDataArgs;
export declare function transferSol(context: Pick<Context, 'identity' | 'programs'>, input: TransferSolInstructionAccounts & TransferSolInstructionArgs): TransactionBuilder;
