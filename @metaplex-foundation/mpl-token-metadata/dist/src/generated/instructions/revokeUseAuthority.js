"use strict";
/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.revokeUseAuthority = exports.getRevokeUseAuthorityInstructionDataSerializer = void 0;
const umi_1 = require("@metaplex-foundation/umi");
const serializers_1 = require("@metaplex-foundation/umi/serializers");
const accounts_1 = require("../accounts");
const shared_1 = require("../shared");
function getRevokeUseAuthorityInstructionDataSerializer() {
    return (0, serializers_1.mapSerializer)((0, serializers_1.struct)([['discriminator', (0, serializers_1.u8)()]], {
        description: 'RevokeUseAuthorityInstructionData',
    }), (value) => ({ ...value, discriminator: 21 }));
}
exports.getRevokeUseAuthorityInstructionDataSerializer = getRevokeUseAuthorityInstructionDataSerializer;
// Instruction.
function revokeUseAuthority(context, input) {
    // Program ID.
    const programId = context.programs.getPublicKey('mplTokenMetadata', 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');
    // Accounts.
    const resolvedAccounts = {
        useAuthorityRecord: {
            index: 0,
            isWritable: true,
            value: input.useAuthorityRecord ?? null,
        },
        owner: {
            index: 1,
            isWritable: true,
            value: input.owner ?? null,
        },
        user: { index: 2, isWritable: false, value: input.user ?? null },
        ownerTokenAccount: {
            index: 3,
            isWritable: true,
            value: input.ownerTokenAccount ?? null,
        },
        mint: { index: 4, isWritable: false, value: input.mint ?? null },
        metadata: {
            index: 5,
            isWritable: false,
            value: input.metadata ?? null,
        },
        tokenProgram: {
            index: 6,
            isWritable: false,
            value: input.tokenProgram ?? null,
        },
        systemProgram: {
            index: 7,
            isWritable: false,
            value: input.systemProgram ?? null,
        },
        rent: { index: 8, isWritable: false, value: input.rent ?? null },
    };
    // Default values.
    if (!resolvedAccounts.metadata.value) {
        resolvedAccounts.metadata.value = (0, accounts_1.findMetadataPda)(context, {
            mint: (0, shared_1.expectPublicKey)(resolvedAccounts.mint.value),
        });
    }
    if (!resolvedAccounts.tokenProgram.value) {
        resolvedAccounts.tokenProgram.value = context.programs.getPublicKey('splToken', 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');
        resolvedAccounts.tokenProgram.isWritable = false;
    }
    if (!resolvedAccounts.systemProgram.value) {
        resolvedAccounts.systemProgram.value = context.programs.getPublicKey('splSystem', '11111111111111111111111111111111');
        resolvedAccounts.systemProgram.isWritable = false;
    }
    // Accounts in order.
    const orderedAccounts = Object.values(resolvedAccounts).sort((a, b) => a.index - b.index);
    // Keys and Signers.
    const [keys, signers] = (0, shared_1.getAccountMetasAndSigners)(orderedAccounts, 'omitted', programId);
    // Data.
    const data = getRevokeUseAuthorityInstructionDataSerializer().serialize({});
    // Bytes Created On Chain.
    const bytesCreatedOnChain = 0;
    return (0, umi_1.transactionBuilder)([
        { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
    ]);
}
exports.revokeUseAuthority = revokeUseAuthority;
//# sourceMappingURL=revokeUseAuthority.js.map