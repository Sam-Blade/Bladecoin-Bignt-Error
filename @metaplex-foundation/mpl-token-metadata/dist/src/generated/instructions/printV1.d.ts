/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Context, Pda, PublicKey, Signer, TransactionBuilder } from '@metaplex-foundation/umi';
import { Serializer } from '@metaplex-foundation/umi/serializers';
import { TokenStandardArgs } from '../types';
export type PrintV1InstructionAccounts = {
    /** New Metadata key (pda of ['metadata', program id, mint id]) */
    editionMetadata?: PublicKey | Pda;
    /** New Edition (pda of ['metadata', program id, mint id, 'edition']) */
    edition?: PublicKey | Pda;
    /** Mint of new token - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY */
    editionMint: PublicKey | Pda | Signer;
    /** Owner of the token account of new token */
    editionTokenAccountOwner?: PublicKey | Pda;
    /** Token account of new token */
    editionTokenAccount?: PublicKey | Pda;
    /** Mint authority of new mint */
    editionMintAuthority?: Signer;
    /** Token record account */
    editionTokenRecord?: PublicKey | Pda;
    /** Master Record Edition V2 (pda of ['metadata', program id, master metadata mint id, 'edition']) */
    masterEdition?: PublicKey | Pda;
    /** Edition pda to mark creation - will be checked for pre-existence. (pda of ['metadata', program id, master metadata mint id, 'edition', edition_number]) where edition_number is NOT the edition number you pass in args but actually edition_number = floor(edition/EDITION_MARKER_BIT_SIZE). */
    editionMarkerPda?: PublicKey | Pda;
    /** payer */
    payer?: Signer;
    /** owner of token account containing master token */
    masterTokenAccountOwner?: Signer;
    /** token account containing token from master metadata mint */
    masterTokenAccount?: PublicKey | Pda;
    /** Master record metadata account */
    masterMetadata?: PublicKey | Pda;
    /** The update authority of the master edition. */
    updateAuthority?: PublicKey | Pda;
    /** Token program */
    splTokenProgram?: PublicKey | Pda;
    /** SPL Associated Token Account program */
    splAtaProgram?: PublicKey | Pda;
    /** Instructions sysvar account */
    sysvarInstructions?: PublicKey | Pda;
    /** System program */
    systemProgram?: PublicKey | Pda;
};
export type PrintV1InstructionData = {
    discriminator: number;
    printV1Discriminator: number;
    editionNumber: bigint;
};
export type PrintV1InstructionDataArgs = {
    editionNumber: number | bigint;
};
export declare function getPrintV1InstructionDataSerializer(): Serializer<PrintV1InstructionDataArgs, PrintV1InstructionData>;
export type PrintV1InstructionExtraArgs = {
    masterEditionMint: PublicKey;
    tokenStandard: TokenStandardArgs;
};
export type PrintV1InstructionArgs = PrintV1InstructionDataArgs & PrintV1InstructionExtraArgs;
export declare function printV1(context: Pick<Context, 'eddsa' | 'identity' | 'payer' | 'programs'>, input: PrintV1InstructionAccounts & PrintV1InstructionArgs): TransactionBuilder;
