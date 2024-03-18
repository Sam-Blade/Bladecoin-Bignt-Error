"use strict";
/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deprecatedMintNewEditionFromMasterEditionViaPrintingToken = exports.getDeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionDataSerializer = void 0;
const umi_1 = require("@metaplex-foundation/umi");
const serializers_1 = require("@metaplex-foundation/umi/serializers");
const accounts_1 = require("../accounts");
const shared_1 = require("../shared");
function getDeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionDataSerializer() {
    return (0, serializers_1.mapSerializer)((0, serializers_1.struct)([['discriminator', (0, serializers_1.u8)()]], {
        description: 'DeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionData',
    }), (value) => ({ ...value, discriminator: 3 }));
}
exports.getDeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionDataSerializer = getDeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionDataSerializer;
// Instruction.
function deprecatedMintNewEditionFromMasterEditionViaPrintingToken(context, input) {
    // Program ID.
    const programId = context.programs.getPublicKey('mplTokenMetadata', 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');
    // Accounts.
    const resolvedAccounts = {
        metadata: {
            index: 0,
            isWritable: true,
            value: input.metadata ?? null,
        },
        edition: {
            index: 1,
            isWritable: true,
            value: input.edition ?? null,
        },
        masterEdition: {
            index: 2,
            isWritable: true,
            value: input.masterEdition ?? null,
        },
        mint: { index: 3, isWritable: true, value: input.mint ?? null },
        mintAuthority: {
            index: 4,
            isWritable: false,
            value: input.mintAuthority ?? null,
        },
        printingMint: {
            index: 5,
            isWritable: true,
            value: input.printingMint ?? null,
        },
        masterTokenAccount: {
            index: 6,
            isWritable: true,
            value: input.masterTokenAccount ?? null,
        },
        editionMarker: {
            index: 7,
            isWritable: true,
            value: input.editionMarker ?? null,
        },
        burnAuthority: {
            index: 8,
            isWritable: false,
            value: input.burnAuthority ?? null,
        },
        payer: {
            index: 9,
            isWritable: false,
            value: input.payer ?? null,
        },
        masterUpdateAuthority: {
            index: 10,
            isWritable: false,
            value: input.masterUpdateAuthority ?? null,
        },
        masterMetadata: {
            index: 11,
            isWritable: false,
            value: input.masterMetadata ?? null,
        },
        tokenProgram: {
            index: 12,
            isWritable: false,
            value: input.tokenProgram ?? null,
        },
        systemProgram: {
            index: 13,
            isWritable: false,
            value: input.systemProgram ?? null,
        },
        rent: {
            index: 14,
            isWritable: false,
            value: input.rent ?? null,
        },
        reservationList: {
            index: 15,
            isWritable: true,
            value: input.reservationList ?? null,
        },
    };
    // Default values.
    if (!resolvedAccounts.metadata.value) {
        resolvedAccounts.metadata.value = (0, accounts_1.findMetadataPda)(context, {
            mint: (0, shared_1.expectPublicKey)(resolvedAccounts.mint.value),
        });
    }
    if (!resolvedAccounts.edition.value) {
        resolvedAccounts.edition.value = (0, accounts_1.findMasterEditionPda)(context, {
            mint: (0, shared_1.expectPublicKey)(resolvedAccounts.mint.value),
        });
    }
    if (!resolvedAccounts.masterEdition.value) {
        resolvedAccounts.masterEdition.value = (0, accounts_1.findMasterEditionPda)(context, {
            mint: (0, shared_1.expectPublicKey)(resolvedAccounts.mint.value),
        });
    }
    if (!resolvedAccounts.editionMarker.value) {
        resolvedAccounts.editionMarker.value = (0, accounts_1.findMasterEditionPda)(context, {
            mint: (0, shared_1.expectPublicKey)(resolvedAccounts.mint.value),
        });
    }
    if (!resolvedAccounts.payer.value) {
        resolvedAccounts.payer.value = context.payer;
    }
    if (!resolvedAccounts.tokenProgram.value) {
        resolvedAccounts.tokenProgram.value = context.programs.getPublicKey('splToken', 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');
        resolvedAccounts.tokenProgram.isWritable = false;
    }
    if (!resolvedAccounts.systemProgram.value) {
        resolvedAccounts.systemProgram.value = context.programs.getPublicKey('splSystem', '11111111111111111111111111111111');
        resolvedAccounts.systemProgram.isWritable = false;
    }
    if (!resolvedAccounts.rent.value) {
        resolvedAccounts.rent.value = (0, umi_1.publicKey)('SysvarRent111111111111111111111111111111111');
    }
    // Accounts in order.
    const orderedAccounts = Object.values(resolvedAccounts).sort((a, b) => a.index - b.index);
    // Keys and Signers.
    const [keys, signers] = (0, shared_1.getAccountMetasAndSigners)(orderedAccounts, 'omitted', programId);
    // Data.
    const data = getDeprecatedMintNewEditionFromMasterEditionViaPrintingTokenInstructionDataSerializer().serialize({});
    // Bytes Created On Chain.
    const bytesCreatedOnChain = 0;
    return (0, umi_1.transactionBuilder)([
        { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
    ]);
}
exports.deprecatedMintNewEditionFromMasterEditionViaPrintingToken = deprecatedMintNewEditionFromMasterEditionViaPrintingToken;
//# sourceMappingURL=deprecatedMintNewEditionFromMasterEditionViaPrintingToken.js.map