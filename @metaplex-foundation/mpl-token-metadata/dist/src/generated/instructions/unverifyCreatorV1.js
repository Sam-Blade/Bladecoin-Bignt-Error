"use strict";
/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.unverifyCreatorV1 = exports.getUnverifyCreatorV1InstructionDataSerializer = void 0;
const umi_1 = require("@metaplex-foundation/umi");
const serializers_1 = require("@metaplex-foundation/umi/serializers");
const shared_1 = require("../shared");
function getUnverifyCreatorV1InstructionDataSerializer() {
    return (0, serializers_1.mapSerializer)((0, serializers_1.struct)([
        ['discriminator', (0, serializers_1.u8)()],
        ['unverifyCreatorV1Discriminator', (0, serializers_1.u8)()],
    ], { description: 'UnverifyCreatorV1InstructionData' }), (value) => ({
        ...value,
        discriminator: 53,
        unverifyCreatorV1Discriminator: 0,
    }));
}
exports.getUnverifyCreatorV1InstructionDataSerializer = getUnverifyCreatorV1InstructionDataSerializer;
// Instruction.
function unverifyCreatorV1(context, input) {
    // Program ID.
    const programId = context.programs.getPublicKey('mplTokenMetadata', 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');
    // Accounts.
    const resolvedAccounts = {
        authority: {
            index: 0,
            isWritable: false,
            value: input.authority ?? null,
        },
        delegateRecord: {
            index: 1,
            isWritable: false,
            value: input.delegateRecord ?? null,
        },
        metadata: {
            index: 2,
            isWritable: true,
            value: input.metadata ?? null,
        },
        collectionMint: {
            index: 3,
            isWritable: false,
            value: input.collectionMint ?? null,
        },
        collectionMetadata: {
            index: 4,
            isWritable: true,
            value: input.collectionMetadata ?? null,
        },
        systemProgram: {
            index: 5,
            isWritable: false,
            value: input.systemProgram ?? null,
        },
        sysvarInstructions: {
            index: 6,
            isWritable: false,
            value: input.sysvarInstructions ?? null,
        },
    };
    // Default values.
    if (!resolvedAccounts.authority.value) {
        resolvedAccounts.authority.value = context.identity;
    }
    if (!resolvedAccounts.systemProgram.value) {
        resolvedAccounts.systemProgram.value = context.programs.getPublicKey('splSystem', '11111111111111111111111111111111');
        resolvedAccounts.systemProgram.isWritable = false;
    }
    if (!resolvedAccounts.sysvarInstructions.value) {
        resolvedAccounts.sysvarInstructions.value = (0, umi_1.publicKey)('Sysvar1nstructions1111111111111111111111111');
    }
    // Accounts in order.
    const orderedAccounts = Object.values(resolvedAccounts).sort((a, b) => a.index - b.index);
    // Keys and Signers.
    const [keys, signers] = (0, shared_1.getAccountMetasAndSigners)(orderedAccounts, 'programId', programId);
    // Data.
    const data = getUnverifyCreatorV1InstructionDataSerializer().serialize({});
    // Bytes Created On Chain.
    const bytesCreatedOnChain = 0;
    return (0, umi_1.transactionBuilder)([
        { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
    ]);
}
exports.unverifyCreatorV1 = unverifyCreatorV1;
//# sourceMappingURL=unverifyCreatorV1.js.map