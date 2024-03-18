"use strict";
/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferTokensChecked = exports.getTransferTokensCheckedInstructionDataSerializer = void 0;
const umi_1 = require("@metaplex-foundation/umi");
const serializers_1 = require("@metaplex-foundation/umi/serializers");
const shared_1 = require("../shared");
function getTransferTokensCheckedInstructionDataSerializer() {
    return (0, serializers_1.mapSerializer)((0, serializers_1.struct)([
        ['discriminator', (0, serializers_1.u8)()],
        ['amount', (0, serializers_1.u64)()],
        ['decimals', (0, serializers_1.u8)()],
    ], { description: 'TransferTokensCheckedInstructionData' }), (value) => ({ ...value, discriminator: 12 }));
}
exports.getTransferTokensCheckedInstructionDataSerializer = getTransferTokensCheckedInstructionDataSerializer;
// Instruction.
function transferTokensChecked(context, input) {
    // Program ID.
    const programId = context.programs.getPublicKey('splToken', 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');
    // Accounts.
    const resolvedAccounts = {
        source: { index: 0, isWritable: true, value: input.source ?? null },
        mint: { index: 1, isWritable: false, value: input.mint ?? null },
        destination: {
            index: 2,
            isWritable: true,
            value: input.destination ?? null,
        },
        authority: { index: 3, isWritable: false, value: input.authority ?? null },
    };
    // Arguments.
    const resolvedArgs = { ...input };
    // Default values.
    if (!resolvedAccounts.authority.value) {
        resolvedAccounts.authority.value = context.identity;
    }
    // Accounts in order.
    const orderedAccounts = Object.values(resolvedAccounts).sort((a, b) => a.index - b.index);
    // Keys and Signers.
    const [keys, signers] = (0, shared_1.getAccountMetasAndSigners)(orderedAccounts, 'programId', programId);
    // Data.
    const data = getTransferTokensCheckedInstructionDataSerializer().serialize(resolvedArgs);
    // Bytes Created On Chain.
    const bytesCreatedOnChain = 0;
    return (0, umi_1.transactionBuilder)([
        { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
    ]);
}
exports.transferTokensChecked = transferTokensChecked;
//# sourceMappingURL=transferTokensChecked.js.map