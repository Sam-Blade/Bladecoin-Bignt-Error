"use strict";
/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyCollection = exports.getVerifyCollectionInstructionDataSerializer = void 0;
const umi_1 = require("@metaplex-foundation/umi");
const serializers_1 = require("@metaplex-foundation/umi/serializers");
const shared_1 = require("../shared");
function getVerifyCollectionInstructionDataSerializer() {
    return (0, serializers_1.mapSerializer)((0, serializers_1.struct)([['discriminator', (0, serializers_1.u8)()]], {
        description: 'VerifyCollectionInstructionData',
    }), (value) => ({ ...value, discriminator: 18 }));
}
exports.getVerifyCollectionInstructionDataSerializer = getVerifyCollectionInstructionDataSerializer;
// Instruction.
function verifyCollection(context, input) {
    // Program ID.
    const programId = context.programs.getPublicKey('mplTokenMetadata', 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');
    // Accounts.
    const resolvedAccounts = {
        metadata: {
            index: 0,
            isWritable: true,
            value: input.metadata ?? null,
        },
        collectionAuthority: {
            index: 1,
            isWritable: true,
            value: input.collectionAuthority ?? null,
        },
        payer: {
            index: 2,
            isWritable: true,
            value: input.payer ?? null,
        },
        collectionMint: {
            index: 3,
            isWritable: false,
            value: input.collectionMint ?? null,
        },
        collection: {
            index: 4,
            isWritable: false,
            value: input.collection ?? null,
        },
        collectionMasterEditionAccount: {
            index: 5,
            isWritable: false,
            value: input.collectionMasterEditionAccount ?? null,
        },
        collectionAuthorityRecord: {
            index: 6,
            isWritable: false,
            value: input.collectionAuthorityRecord ?? null,
        },
    };
    // Default values.
    if (!resolvedAccounts.payer.value) {
        resolvedAccounts.payer.value = context.payer;
    }
    // Accounts in order.
    const orderedAccounts = Object.values(resolvedAccounts).sort((a, b) => a.index - b.index);
    // Keys and Signers.
    const [keys, signers] = (0, shared_1.getAccountMetasAndSigners)(orderedAccounts, 'omitted', programId);
    // Data.
    const data = getVerifyCollectionInstructionDataSerializer().serialize({});
    // Bytes Created On Chain.
    const bytesCreatedOnChain = 0;
    return (0, umi_1.transactionBuilder)([
        { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
    ]);
}
exports.verifyCollection = verifyCollection;
//# sourceMappingURL=verifyCollection.js.map