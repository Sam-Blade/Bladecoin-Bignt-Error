/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Context, Pda, PublicKey, Signer, TransactionBuilder } from '@metaplex-foundation/umi';
import { Serializer } from '@metaplex-foundation/umi/serializers';
import { MintNewEditionFromMasterEditionViaTokenArgs, MintNewEditionFromMasterEditionViaTokenArgsArgs } from '../types';
export type MintNewEditionFromMasterEditionViaVaultProxyInstructionAccounts = {
    /** New Metadata key (pda of ['metadata', program id, mint id]) */
    newMetadata: PublicKey | Pda;
    /** New Edition (pda of ['metadata', program id, mint id, 'edition']) */
    newEdition: PublicKey | Pda;
    /** Master Record Edition V2 (pda of ['metadata', program id, master metadata mint id, 'edition'] */
    masterEdition: PublicKey | Pda;
    /** Mint of new token - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY */
    newMint: PublicKey | Pda;
    /** Edition pda to mark creation - will be checked for pre-existence. (pda of ['metadata', program id, master metadata mint id, 'edition', edition_number]) where edition_number is NOT the edition number you pass in args but actually edition_number = floor(edition/EDITION_MARKER_BIT_SIZE). */
    editionMarkPda: PublicKey | Pda;
    /** Mint authority of new mint */
    newMintAuthority: Signer;
    /** payer */
    payer?: Signer;
    /** Vault authority */
    vaultAuthority: Signer;
    /** Safety deposit token store account */
    safetyDepositStore: PublicKey | Pda;
    /** Safety deposit box */
    safetyDepositBox: PublicKey | Pda;
    /** Vault */
    vault: PublicKey | Pda;
    /** Update authority info for new metadata */
    newMetadataUpdateAuthority: PublicKey | Pda;
    /** Master record metadata account */
    metadata: PublicKey | Pda;
    /** Token program */
    tokenProgram?: PublicKey | Pda;
    /** Token vault program */
    tokenVaultProgram: PublicKey | Pda;
    /** System program */
    systemProgram?: PublicKey | Pda;
    /** Rent info */
    rent?: PublicKey | Pda;
};
export type MintNewEditionFromMasterEditionViaVaultProxyInstructionData = {
    discriminator: number;
    mintNewEditionFromMasterEditionViaTokenArgs: MintNewEditionFromMasterEditionViaTokenArgs;
};
export type MintNewEditionFromMasterEditionViaVaultProxyInstructionDataArgs = {
    mintNewEditionFromMasterEditionViaTokenArgs: MintNewEditionFromMasterEditionViaTokenArgsArgs;
};
export declare function getMintNewEditionFromMasterEditionViaVaultProxyInstructionDataSerializer(): Serializer<MintNewEditionFromMasterEditionViaVaultProxyInstructionDataArgs, MintNewEditionFromMasterEditionViaVaultProxyInstructionData>;
export type MintNewEditionFromMasterEditionViaVaultProxyInstructionArgs = MintNewEditionFromMasterEditionViaVaultProxyInstructionDataArgs;
export declare function mintNewEditionFromMasterEditionViaVaultProxy(context: Pick<Context, 'payer' | 'programs'>, input: MintNewEditionFromMasterEditionViaVaultProxyInstructionAccounts & MintNewEditionFromMasterEditionViaVaultProxyInstructionArgs): TransactionBuilder;