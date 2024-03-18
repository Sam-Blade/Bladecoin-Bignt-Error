"use strict";
/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMetadataAccountV3 = exports.getCreateMetadataAccountV3InstructionDataSerializer = void 0;
const umi_1 = require("@metaplex-foundation/umi");
const serializers_1 = require("@metaplex-foundation/umi/serializers");
const accounts_1 = require("../accounts");
const shared_1 = require("../shared");
const types_1 = require("../types");
function getCreateMetadataAccountV3InstructionDataSerializer() {
    return (0, serializers_1.mapSerializer)((0, serializers_1.struct)([
        ['discriminator', (0, serializers_1.u8)()],
        ['data', (0, types_1.getDataV2Serializer)()],
        ['isMutable', (0, serializers_1.bool)()],
        ['collectionDetails', (0, serializers_1.option)((0, types_1.getCollectionDetailsSerializer)())],
    ], { description: 'CreateMetadataAccountV3InstructionData' }), (value) => ({ ...value, discriminator: 33 }));
}
exports.getCreateMetadataAccountV3InstructionDataSerializer = getCreateMetadataAccountV3InstructionDataSerializer;
// Instruction.
function createMetadataAccountV3(context, input) {
    // Program ID.
    const programId = context.programs.getPublicKey('mplTokenMetadata', 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');
    // Accounts.
    const resolvedAccounts = {
        metadata: {
            index: 0,
            isWritable: true,
            value: input.metadata ?? null,
        },
        mint: { index: 1, isWritable: false, value: input.mint ?? null },
        mintAuthority: {
            index: 2,
            isWritable: false,
            value: input.mintAuthority ?? null,
        },
        payer: {
            index: 3,
            isWritable: true,
            value: input.payer ?? null,
        },
        updateAuthority: {
            index: 4,
            isWritable: false,
            value: input.updateAuthority ?? null,
        },
        systemProgram: {
            index: 5,
            isWritable: false,
            value: input.systemProgram ?? null,
        },
        rent: { index: 6, isWritable: false, value: input.rent ?? null },
    };
    // Arguments.
    const resolvedArgs = { ...input };
    // Default values.
    if (!resolvedAccounts.metadata.value) {
        resolvedAccounts.metadata.value = (0, accounts_1.findMetadataPda)(context, {
            mint: (0, shared_1.expectPublicKey)(resolvedAccounts.mint.value),
        });
    }
    if (!resolvedAccounts.payer.value) {
        resolvedAccounts.payer.value = context.payer;
    }
    if (!resolvedAccounts.updateAuthority.value) {
        resolvedAccounts.updateAuthority.value = context.identity;
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
    const data = getCreateMetadataAccountV3InstructionDataSerializer().serialize(resolvedArgs);
    // Bytes Created On Chain.
    const bytesCreatedOnChain = 0;
    return (0, umi_1.transactionBuilder)([
        { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
    ]);
}
exports.createMetadataAccountV3 = createMetadataAccountV3;
//# sourceMappingURL=createMetadataAccountV3.js.map