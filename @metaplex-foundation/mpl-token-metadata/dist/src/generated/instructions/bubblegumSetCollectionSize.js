"use strict";
/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubblegumSetCollectionSize = exports.getBubblegumSetCollectionSizeInstructionDataSerializer = void 0;
const umi_1 = require("@metaplex-foundation/umi");
const serializers_1 = require("@metaplex-foundation/umi/serializers");
const shared_1 = require("../shared");
const types_1 = require("../types");
function getBubblegumSetCollectionSizeInstructionDataSerializer() {
    return (0, serializers_1.mapSerializer)((0, serializers_1.struct)([
        ['discriminator', (0, serializers_1.u8)()],
        ['setCollectionSizeArgs', (0, types_1.getSetCollectionSizeArgsSerializer)()],
    ], { description: 'BubblegumSetCollectionSizeInstructionData' }), (value) => ({ ...value, discriminator: 36 }));
}
exports.getBubblegumSetCollectionSizeInstructionDataSerializer = getBubblegumSetCollectionSizeInstructionDataSerializer;
// Instruction.
function bubblegumSetCollectionSize(context, input) {
    // Program ID.
    const programId = context.programs.getPublicKey('mplTokenMetadata', 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');
    // Accounts.
    const resolvedAccounts = {
        collectionMetadata: {
            index: 0,
            isWritable: true,
            value: input.collectionMetadata ?? null,
        },
        collectionAuthority: {
            index: 1,
            isWritable: false,
            value: input.collectionAuthority ?? null,
        },
        collectionMint: {
            index: 2,
            isWritable: false,
            value: input.collectionMint ?? null,
        },
        bubblegumSigner: {
            index: 3,
            isWritable: false,
            value: input.bubblegumSigner ?? null,
        },
        collectionAuthorityRecord: {
            index: 4,
            isWritable: false,
            value: input.collectionAuthorityRecord ?? null,
        },
    };
    // Arguments.
    const resolvedArgs = { ...input };
    // Accounts in order.
    const orderedAccounts = Object.values(resolvedAccounts).sort((a, b) => a.index - b.index);
    // Keys and Signers.
    const [keys, signers] = (0, shared_1.getAccountMetasAndSigners)(orderedAccounts, 'omitted', programId);
    // Data.
    const data = getBubblegumSetCollectionSizeInstructionDataSerializer().serialize(resolvedArgs);
    // Bytes Created On Chain.
    const bytesCreatedOnChain = 0;
    return (0, umi_1.transactionBuilder)([
        { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
    ]);
}
exports.bubblegumSetCollectionSize = bubblegumSetCollectionSize;
//# sourceMappingURL=bubblegumSetCollectionSize.js.map