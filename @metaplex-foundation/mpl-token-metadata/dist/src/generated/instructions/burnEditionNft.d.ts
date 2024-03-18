/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Context, Pda, PublicKey, Signer, TransactionBuilder } from '@metaplex-foundation/umi';
import { Serializer } from '@metaplex-foundation/umi/serializers';
export type BurnEditionNftInstructionAccounts = {
    /** Metadata (pda of ['metadata', program id, mint id]) */
    metadata: PublicKey | Pda;
    /** NFT owner */
    owner: Signer;
    /** Mint of the print edition NFT */
    printEditionMint: PublicKey | Pda;
    /** Mint of the original/master NFT */
    masterEditionMint: PublicKey | Pda;
    /** Token account the print edition NFT is in */
    printEditionTokenAccount: PublicKey | Pda;
    /** Token account the Master Edition NFT is in */
    masterEditionTokenAccount: PublicKey | Pda;
    /** MasterEdition2 of the original NFT */
    masterEditionAccount: PublicKey | Pda;
    /** Print Edition account of the NFT */
    printEditionAccount: PublicKey | Pda;
    /** Edition Marker PDA of the NFT */
    editionMarkerAccount: PublicKey | Pda;
    /** SPL Token Program */
    splTokenProgram?: PublicKey | Pda;
};
export type BurnEditionNftInstructionData = {
    discriminator: number;
};
export type BurnEditionNftInstructionDataArgs = {};
export declare function getBurnEditionNftInstructionDataSerializer(): Serializer<BurnEditionNftInstructionDataArgs, BurnEditionNftInstructionData>;
export declare function burnEditionNft(context: Pick<Context, 'programs'>, input: BurnEditionNftInstructionAccounts): TransactionBuilder;