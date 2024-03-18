"use strict";
/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAsDataItemDelegateV2 = exports.getUpdateAsDataItemDelegateV2InstructionDataSerializer = void 0;
const umi_1 = require("@metaplex-foundation/umi");
const serializers_1 = require("@metaplex-foundation/umi/serializers");
const accounts_1 = require("../accounts");
const shared_1 = require("../shared");
const types_1 = require("../types");
function getUpdateAsDataItemDelegateV2InstructionDataSerializer() {
    return (0, serializers_1.mapSerializer)((0, serializers_1.struct)([
        ['discriminator', (0, serializers_1.u8)()],
        ['updateAsDataItemDelegateV2Discriminator', (0, serializers_1.u8)()],
        ['data', (0, serializers_1.option)((0, types_1.getDataSerializer)())],
        ['authorizationData', (0, serializers_1.option)((0, types_1.getAuthorizationDataSerializer)())],
    ], { description: 'UpdateAsDataItemDelegateV2InstructionData' }), (value) => ({
        ...value,
        discriminator: 50,
        updateAsDataItemDelegateV2Discriminator: 6,
        data: value.data ?? (0, umi_1.none)(),
        authorizationData: value.authorizationData ?? (0, umi_1.none)(),
    }));
}
exports.getUpdateAsDataItemDelegateV2InstructionDataSerializer = getUpdateAsDataItemDelegateV2InstructionDataSerializer;
// Instruction.
function updateAsDataItemDelegateV2(context, input) {
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
        token: {
            index: 2,
            isWritable: false,
            value: input.token ?? null,
        },
        mint: { index: 3, isWritable: false, value: input.mint ?? null },
        metadata: {
            index: 4,
            isWritable: true,
            value: input.metadata ?? null,
        },
        edition: {
            index: 5,
            isWritable: false,
            value: input.edition ?? null,
        },
        payer: {
            index: 6,
            isWritable: true,
            value: input.payer ?? null,
        },
        systemProgram: {
            index: 7,
            isWritable: false,
            value: input.systemProgram ?? null,
        },
        sysvarInstructions: {
            index: 8,
            isWritable: false,
            value: input.sysvarInstructions ?? null,
        },
        authorizationRulesProgram: {
            index: 9,
            isWritable: false,
            value: input.authorizationRulesProgram ?? null,
        },
        authorizationRules: {
            index: 10,
            isWritable: false,
            value: input.authorizationRules ?? null,
        },
    };
    // Arguments.
    const resolvedArgs = { ...input };
    // Default values.
    if (!resolvedAccounts.authority.value) {
        resolvedAccounts.authority.value = context.identity;
    }
    if (!resolvedArgs.updateAuthority) {
        resolvedArgs.updateAuthority = context.identity.publicKey;
    }
    if (!resolvedAccounts.delegateRecord.value) {
        resolvedAccounts.delegateRecord.value = (0, accounts_1.findMetadataDelegateRecordPda)(context, {
            delegateRole: types_1.MetadataDelegateRole.DataItem,
            updateAuthority: (0, shared_1.expectSome)(resolvedArgs.updateAuthority),
            delegate: (0, shared_1.expectPublicKey)(resolvedAccounts.authority.value),
            mint: (0, shared_1.expectPublicKey)(resolvedAccounts.mint.value),
        });
    }
    if (!resolvedAccounts.metadata.value) {
        resolvedAccounts.metadata.value = (0, accounts_1.findMetadataPda)(context, {
            mint: (0, shared_1.expectPublicKey)(resolvedAccounts.mint.value),
        });
    }
    if (!resolvedAccounts.payer.value) {
        resolvedAccounts.payer.value = context.payer;
    }
    if (!resolvedAccounts.systemProgram.value) {
        resolvedAccounts.systemProgram.value = context.programs.getPublicKey('splSystem', '11111111111111111111111111111111');
        resolvedAccounts.systemProgram.isWritable = false;
    }
    if (!resolvedAccounts.sysvarInstructions.value) {
        resolvedAccounts.sysvarInstructions.value = (0, umi_1.publicKey)('Sysvar1nstructions1111111111111111111111111');
    }
    if (!resolvedAccounts.authorizationRulesProgram.value) {
        if (resolvedAccounts.authorizationRules.value) {
            resolvedAccounts.authorizationRulesProgram.value =
                context.programs.getPublicKey('mplTokenAuthRules', 'auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg');
            resolvedAccounts.authorizationRulesProgram.isWritable = false;
        }
    }
    // Accounts in order.
    const orderedAccounts = Object.values(resolvedAccounts).sort((a, b) => a.index - b.index);
    // Keys and Signers.
    const [keys, signers] = (0, shared_1.getAccountMetasAndSigners)(orderedAccounts, 'programId', programId);
    // Data.
    const data = getUpdateAsDataItemDelegateV2InstructionDataSerializer().serialize(resolvedArgs);
    // Bytes Created On Chain.
    const bytesCreatedOnChain = 0;
    return (0, umi_1.transactionBuilder)([
        { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
    ]);
}
exports.updateAsDataItemDelegateV2 = updateAsDataItemDelegateV2;
//# sourceMappingURL=updateAsDataItemDelegateV2.js.map