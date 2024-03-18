"use strict";
/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.collect = exports.getCollectInstructionDataSerializer = void 0;
const umi_1 = require("@metaplex-foundation/umi");
const serializers_1 = require("@metaplex-foundation/umi/serializers");
const shared_1 = require("../shared");
function getCollectInstructionDataSerializer() {
    return (0, serializers_1.mapSerializer)((0, serializers_1.struct)([['discriminator', (0, serializers_1.u8)()]], {
        description: 'CollectInstructionData',
    }), (value) => ({ ...value, discriminator: 54 }));
}
exports.getCollectInstructionDataSerializer = getCollectInstructionDataSerializer;
// Instruction.
function collect(context, input) {
    // Program ID.
    const programId = context.programs.getPublicKey('mplTokenMetadata', 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');
    // Accounts.
    const resolvedAccounts = {
        authority: {
            index: 0,
            isWritable: false,
            value: input.authority ?? null,
        },
        recipient: {
            index: 1,
            isWritable: false,
            value: input.recipient ?? null,
        },
    };
    // Default values.
    if (!resolvedAccounts.authority.value) {
        resolvedAccounts.authority.value = context.identity;
    }
    // Accounts in order.
    const orderedAccounts = Object.values(resolvedAccounts).sort((a, b) => a.index - b.index);
    // Keys and Signers.
    const [keys, signers] = (0, shared_1.getAccountMetasAndSigners)(orderedAccounts, 'programId', programId);
    // Data.
    const data = getCollectInstructionDataSerializer().serialize({});
    // Bytes Created On Chain.
    const bytesCreatedOnChain = 0;
    return (0, umi_1.transactionBuilder)([
        { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
    ]);
}
exports.collect = collect;
//# sourceMappingURL=collect.js.map