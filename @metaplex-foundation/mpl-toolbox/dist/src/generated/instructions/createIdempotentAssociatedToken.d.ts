/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Context, Pda, PublicKey, Signer, TransactionBuilder } from '@metaplex-foundation/umi';
export type CreateIdempotentAssociatedTokenInstructionAccounts = {
    payer?: Signer;
    ata: PublicKey | Pda;
    owner: PublicKey | Pda;
    mint: PublicKey | Pda;
    systemProgram?: PublicKey | Pda;
    tokenProgram?: PublicKey | Pda;
};
export declare function createIdempotentAssociatedToken(context: Pick<Context, 'payer' | 'programs'>, input: CreateIdempotentAssociatedTokenInstructionAccounts): TransactionBuilder;
