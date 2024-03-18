/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Context, Pda, PublicKey, Signer, TransactionBuilder } from '@metaplex-foundation/umi';
import { Serializer } from '@metaplex-foundation/umi/serializers';
export type ApproveUseAuthorityInstructionAccounts = {
    /** Use Authority Record PDA */
    useAuthorityRecord: PublicKey | Pda;
    /** Owner */
    owner: Signer;
    /** Payer */
    payer?: Signer;
    /** A Use Authority */
    user: PublicKey | Pda;
    /** Owned Token Account Of Mint */
    ownerTokenAccount: PublicKey | Pda;
    /** Metadata account */
    metadata?: PublicKey | Pda;
    /** Mint of Metadata */
    mint: PublicKey | Pda;
    /** Program As Signer (Burner) */
    burner: PublicKey | Pda;
    /** Token program */
    tokenProgram?: PublicKey | Pda;
    /** System program */
    systemProgram?: PublicKey | Pda;
    /** Rent info */
    rent?: PublicKey | Pda;
};
export type ApproveUseAuthorityInstructionData = {
    discriminator: number;
    numberOfUses: bigint;
};
export type ApproveUseAuthorityInstructionDataArgs = {
    numberOfUses: number | bigint;
};
export declare function getApproveUseAuthorityInstructionDataSerializer(): Serializer<ApproveUseAuthorityInstructionDataArgs, ApproveUseAuthorityInstructionData>;
export type ApproveUseAuthorityInstructionArgs = ApproveUseAuthorityInstructionDataArgs;
export declare function approveUseAuthority(context: Pick<Context, 'eddsa' | 'payer' | 'programs'>, input: ApproveUseAuthorityInstructionAccounts & ApproveUseAuthorityInstructionArgs): TransactionBuilder;