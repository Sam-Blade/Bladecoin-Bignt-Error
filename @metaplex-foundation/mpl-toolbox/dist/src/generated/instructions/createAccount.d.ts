/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Context, PublicKey, Signer, SolAmount, TransactionBuilder } from '@metaplex-foundation/umi';
import { Serializer } from '@metaplex-foundation/umi/serializers';
export type CreateAccountInstructionAccounts = {
    payer?: Signer;
    newAccount: Signer;
};
export type CreateAccountInstructionData = {
    discriminator: number;
    lamports: SolAmount;
    space: bigint;
    programId: PublicKey;
};
export type CreateAccountInstructionDataArgs = {
    lamports: SolAmount;
    space: number | bigint;
    programId: PublicKey;
};
export declare function getCreateAccountInstructionDataSerializer(): Serializer<CreateAccountInstructionDataArgs, CreateAccountInstructionData>;
export type CreateAccountInstructionArgs = CreateAccountInstructionDataArgs;
export declare function createAccount(context: Pick<Context, 'payer' | 'programs'>, input: CreateAccountInstructionAccounts & CreateAccountInstructionArgs): TransactionBuilder;
