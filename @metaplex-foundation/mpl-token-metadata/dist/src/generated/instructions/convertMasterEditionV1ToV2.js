"use strict";
/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMasterEditionV1ToV2 = exports.getConvertMasterEditionV1ToV2InstructionDataSerializer = void 0;
const umi_1 = require("@metaplex-foundation/umi");
const serializers_1 = require("@metaplex-foundation/umi/serializers");
const shared_1 = require("../shared");
function getConvertMasterEditionV1ToV2InstructionDataSerializer() {
    return (0, serializers_1.mapSerializer)((0, serializers_1.struct)([['discriminator', (0, serializers_1.u8)()]], { description: 'ConvertMasterEditionV1ToV2InstructionData' }), (value) => ({ ...value, discriminator: 12 }));
}
exports.getConvertMasterEditionV1ToV2InstructionDataSerializer = getConvertMasterEditionV1ToV2InstructionDataSerializer;
// Instruction.
function convertMasterEditionV1ToV2(context, input) {
    // Program ID.
    const programId = context.programs.getPublicKey('mplTokenMetadata', 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');
    // Accounts.
    const resolvedAccounts = {
        masterEdition: {
            index: 0,
            isWritable: true,
            value: input.masterEdition ?? null,
        },
        oneTimeAuth: {
            index: 1,
            isWritable: true,
            value: input.oneTimeAuth ?? null,
        },
        printingMint: {
            index: 2,
            isWritable: true,
            value: input.printingMint ?? null,
        },
    };
    // Accounts in order.
    const orderedAccounts = Object.values(resolvedAccounts).sort((a, b) => a.index - b.index);
    // Keys and Signers.
    const [keys, signers] = (0, shared_1.getAccountMetasAndSigners)(orderedAccounts, 'programId', programId);
    // Data.
    const data = getConvertMasterEditionV1ToV2InstructionDataSerializer().serialize({});
    // Bytes Created On Chain.
    const bytesCreatedOnChain = 0;
    return (0, umi_1.transactionBuilder)([
        { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
    ]);
}
exports.convertMasterEditionV1ToV2 = convertMasterEditionV1ToV2;
//# sourceMappingURL=convertMasterEditionV1ToV2.js.map