/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Context, Option, OptionOrNullable, Pda, PublicKey, TransactionBuilder } from '@metaplex-foundation/umi';
import { Serializer } from '@metaplex-foundation/umi/serializers';
export type InitializeMintInstructionAccounts = {
    mint: PublicKey | Pda;
    rent?: PublicKey | Pda;
};
export type InitializeMintInstructionData = {
    discriminator: number;
    decimals: number;
    mintAuthority: PublicKey;
    freezeAuthority: Option<PublicKey>;
};
export type InitializeMintInstructionDataArgs = {
    decimals: number;
    mintAuthority: PublicKey;
    freezeAuthority: OptionOrNullable<PublicKey>;
};
export declare function getInitializeMintInstructionDataSerializer(): Serializer<InitializeMintInstructionDataArgs, InitializeMintInstructionData>;
export type InitializeMintInstructionArgs = InitializeMintInstructionDataArgs;
export declare function initializeMint(context: Pick<Context, 'programs'>, input: InitializeMintInstructionAccounts & InitializeMintInstructionArgs): TransactionBuilder;
