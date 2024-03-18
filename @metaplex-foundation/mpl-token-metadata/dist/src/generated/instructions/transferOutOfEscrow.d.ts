/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Context, Pda, PublicKey, Signer, TransactionBuilder } from '@metaplex-foundation/umi';
import { Serializer } from '@metaplex-foundation/umi/serializers';
export type TransferOutOfEscrowInstructionAccounts = {
    /** Escrow account */
    escrow: PublicKey | Pda;
    /** Metadata account */
    metadata: PublicKey | Pda;
    /** Wallet paying for the transaction and new account */
    payer?: Signer;
    /** Mint account for the new attribute */
    attributeMint: PublicKey | Pda;
    /** Token account source for the new attribute */
    attributeSrc: PublicKey | Pda;
    /** Token account, owned by TM, destination for the new attribute */
    attributeDst: PublicKey | Pda;
    /** Mint account that the escrow is attached */
    escrowMint: PublicKey | Pda;
    /** Token account that holds the token the escrow is attached to */
    escrowAccount: PublicKey | Pda;
    /** System program */
    systemProgram?: PublicKey | Pda;
    /** Associated Token program */
    ataProgram?: PublicKey | Pda;
    /** Token program */
    tokenProgram?: PublicKey | Pda;
    /** Instructions sysvar account */
    sysvarInstructions?: PublicKey | Pda;
    /** Authority/creator of the escrow account */
    authority?: Signer;
};
export type TransferOutOfEscrowInstructionData = {
    discriminator: number;
    amount: bigint;
};
export type TransferOutOfEscrowInstructionDataArgs = {
    amount?: number | bigint;
};
export declare function getTransferOutOfEscrowInstructionDataSerializer(): Serializer<TransferOutOfEscrowInstructionDataArgs, TransferOutOfEscrowInstructionData>;
export type TransferOutOfEscrowInstructionArgs = TransferOutOfEscrowInstructionDataArgs;
export declare function transferOutOfEscrow(context: Pick<Context, 'payer' | 'programs'>, input: TransferOutOfEscrowInstructionAccounts & TransferOutOfEscrowInstructionArgs): TransactionBuilder;