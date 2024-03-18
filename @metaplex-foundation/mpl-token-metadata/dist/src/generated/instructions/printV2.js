"use strict";
/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.printV2 = exports.getPrintV2InstructionDataSerializer = void 0;
const mpl_toolbox_1 = require("@metaplex-foundation/mpl-toolbox");
const umi_1 = require("@metaplex-foundation/umi");
const serializers_1 = require("@metaplex-foundation/umi/serializers");
const hooked_1 = require("../../hooked");
const accounts_1 = require("../accounts");
const shared_1 = require("../shared");
const types_1 = require("../types");
function getPrintV2InstructionDataSerializer() {
    return (0, serializers_1.mapSerializer)((0, serializers_1.struct)([
        ['discriminator', (0, serializers_1.u8)()],
        ['printV2Discriminator', (0, serializers_1.u8)()],
        ['editionNumber', (0, serializers_1.u64)()],
    ], { description: 'PrintV2InstructionData' }), (value) => ({ ...value, discriminator: 55, printV2Discriminator: 1 }));
}
exports.getPrintV2InstructionDataSerializer = getPrintV2InstructionDataSerializer;
// Instruction.
function printV2(context, input) {
    // Program ID.
    const programId = context.programs.getPublicKey('mplTokenMetadata', 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');
    // Accounts.
    const resolvedAccounts = {
        editionMetadata: {
            index: 0,
            isWritable: true,
            value: input.editionMetadata ?? null,
        },
        edition: {
            index: 1,
            isWritable: true,
            value: input.edition ?? null,
        },
        editionMint: {
            index: 2,
            isWritable: true,
            value: input.editionMint ?? null,
        },
        editionTokenAccountOwner: {
            index: 3,
            isWritable: false,
            value: input.editionTokenAccountOwner ?? null,
        },
        editionTokenAccount: {
            index: 4,
            isWritable: true,
            value: input.editionTokenAccount ?? null,
        },
        editionMintAuthority: {
            index: 5,
            isWritable: false,
            value: input.editionMintAuthority ?? null,
        },
        editionTokenRecord: {
            index: 6,
            isWritable: true,
            value: input.editionTokenRecord ?? null,
        },
        masterEdition: {
            index: 7,
            isWritable: true,
            value: input.masterEdition ?? null,
        },
        editionMarkerPda: {
            index: 8,
            isWritable: true,
            value: input.editionMarkerPda ?? null,
        },
        payer: {
            index: 9,
            isWritable: true,
            value: input.payer ?? null,
        },
        masterTokenAccountOwner: {
            index: 10,
            isWritable: false,
            value: input.masterTokenAccountOwner ?? null,
        },
        masterTokenAccount: {
            index: 11,
            isWritable: false,
            value: input.masterTokenAccount ?? null,
        },
        masterMetadata: {
            index: 12,
            isWritable: false,
            value: input.masterMetadata ?? null,
        },
        updateAuthority: {
            index: 13,
            isWritable: false,
            value: input.updateAuthority ?? null,
        },
        splTokenProgram: {
            index: 14,
            isWritable: false,
            value: input.splTokenProgram ?? null,
        },
        splAtaProgram: {
            index: 15,
            isWritable: false,
            value: input.splAtaProgram ?? null,
        },
        sysvarInstructions: {
            index: 16,
            isWritable: false,
            value: input.sysvarInstructions ?? null,
        },
        systemProgram: {
            index: 17,
            isWritable: false,
            value: input.systemProgram ?? null,
        },
        holderDelegateRecord: {
            index: 18,
            isWritable: false,
            value: input.holderDelegateRecord ?? null,
        },
        delegate: {
            index: 19,
            isWritable: false,
            value: input.delegate ?? null,
        },
    };
    // Arguments.
    const resolvedArgs = { ...input };
    // Default values.
    if (!resolvedAccounts.editionMetadata.value) {
        resolvedAccounts.editionMetadata.value = (0, accounts_1.findMetadataPda)(context, {
            mint: (0, shared_1.expectPublicKey)(resolvedAccounts.editionMint.value),
        });
    }
    if (!resolvedAccounts.edition.value) {
        resolvedAccounts.edition.value = (0, accounts_1.findMasterEditionPda)(context, {
            mint: (0, shared_1.expectPublicKey)(resolvedAccounts.editionMint.value),
        });
    }
    if (!resolvedAccounts.editionTokenAccountOwner.value) {
        resolvedAccounts.editionTokenAccountOwner.value =
            context.identity.publicKey;
    }
    if (!resolvedAccounts.editionTokenAccount.value) {
        resolvedAccounts.editionTokenAccount.value = (0, mpl_toolbox_1.findAssociatedTokenPda)(context, {
            mint: (0, shared_1.expectPublicKey)(resolvedAccounts.editionMint.value),
            owner: (0, shared_1.expectPublicKey)(resolvedAccounts.editionTokenAccountOwner.value),
        });
    }
    if (!resolvedAccounts.payer.value) {
        resolvedAccounts.payer.value = context.payer;
    }
    if (!resolvedAccounts.editionMintAuthority.value) {
        if (resolvedAccounts.holderDelegateRecord.value) {
            if (resolvedAccounts.delegate.value) {
                resolvedAccounts.editionMintAuthority.value = (0, shared_1.expectSome)(resolvedAccounts.delegate.value);
            }
            else {
                resolvedAccounts.editionMintAuthority.value = (0, shared_1.expectSome)(resolvedAccounts.payer.value);
            }
        }
        else {
            resolvedAccounts.editionMintAuthority.value = context.identity;
        }
    }
    if (!resolvedAccounts.editionTokenRecord.value) {
        if (resolvedArgs.tokenStandard === types_1.TokenStandard.ProgrammableNonFungible) {
            resolvedAccounts.editionTokenRecord.value = (0, accounts_1.findTokenRecordPda)(context, {
                mint: (0, shared_1.expectPublicKey)(resolvedAccounts.editionMint.value),
                token: (0, shared_1.expectPublicKey)(resolvedAccounts.editionTokenAccount.value),
            });
        }
    }
    if (!resolvedAccounts.masterEdition.value) {
        resolvedAccounts.masterEdition.value = (0, accounts_1.findMasterEditionPda)(context, {
            mint: (0, shared_1.expectSome)(resolvedArgs.masterEditionMint),
        });
    }
    if (!resolvedAccounts.editionMarkerPda.value) {
        if (resolvedArgs.tokenStandard === types_1.TokenStandard.ProgrammableNonFungible) {
            resolvedAccounts.editionMarkerPda.value = (0, accounts_1.findEditionMarkerV2Pda)(context, { mint: (0, shared_1.expectSome)(resolvedArgs.masterEditionMint) });
        }
        else {
            resolvedAccounts.editionMarkerPda.value =
                (0, hooked_1.findEditionMarkerFromEditionNumberPda)(context, {
                    mint: (0, shared_1.expectSome)(resolvedArgs.masterEditionMint),
                    editionNumber: (0, shared_1.expectSome)(resolvedArgs.editionNumber),
                });
        }
    }
    if (!resolvedAccounts.masterTokenAccountOwner.value) {
        if (!resolvedAccounts.holderDelegateRecord.value) {
            resolvedAccounts.masterTokenAccountOwner.value = context.identity;
        }
    }
    if (!resolvedAccounts.masterTokenAccount.value) {
        resolvedAccounts.masterTokenAccount.value = (0, mpl_toolbox_1.findAssociatedTokenPda)(context, {
            mint: (0, shared_1.expectSome)(resolvedArgs.masterEditionMint),
            owner: (0, shared_1.expectPublicKey)(resolvedAccounts.masterTokenAccountOwner.value),
        });
    }
    if (!resolvedAccounts.masterMetadata.value) {
        resolvedAccounts.masterMetadata.value = (0, accounts_1.findMetadataPda)(context, {
            mint: (0, shared_1.expectSome)(resolvedArgs.masterEditionMint),
        });
    }
    if (!resolvedAccounts.updateAuthority.value) {
        resolvedAccounts.updateAuthority.value = context.identity.publicKey;
    }
    if (!resolvedAccounts.splTokenProgram.value) {
        resolvedAccounts.splTokenProgram.value = context.programs.getPublicKey('splToken', 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');
        resolvedAccounts.splTokenProgram.isWritable = false;
    }
    if (!resolvedAccounts.splAtaProgram.value) {
        resolvedAccounts.splAtaProgram.value = context.programs.getPublicKey('splAssociatedToken', 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL');
        resolvedAccounts.splAtaProgram.isWritable = false;
    }
    if (!resolvedAccounts.sysvarInstructions.value) {
        resolvedAccounts.sysvarInstructions.value = (0, umi_1.publicKey)('Sysvar1nstructions1111111111111111111111111');
    }
    if (!resolvedAccounts.systemProgram.value) {
        resolvedAccounts.systemProgram.value = context.programs.getPublicKey('splSystem', '11111111111111111111111111111111');
        resolvedAccounts.systemProgram.isWritable = false;
    }
    // Accounts in order.
    const orderedAccounts = Object.values(resolvedAccounts).sort((a, b) => a.index - b.index);
    // Keys and Signers.
    const [keys, signers] = (0, shared_1.getAccountMetasAndSigners)(orderedAccounts, 'programId', programId);
    // Data.
    const data = getPrintV2InstructionDataSerializer().serialize(resolvedArgs);
    // Bytes Created On Chain.
    const bytesCreatedOnChain = 0;
    return (0, umi_1.transactionBuilder)([
        { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
    ]);
}
exports.printV2 = printV2;
//# sourceMappingURL=printV2.js.map