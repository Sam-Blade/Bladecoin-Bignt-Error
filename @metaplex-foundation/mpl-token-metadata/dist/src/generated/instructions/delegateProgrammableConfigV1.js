"use strict";
/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.delegateProgrammableConfigV1 = exports.getDelegateProgrammableConfigV1InstructionDataSerializer = void 0;
const umi_1 = require("@metaplex-foundation/umi");
const serializers_1 = require("@metaplex-foundation/umi/serializers");
const hooked_1 = require("../../hooked");
const accounts_1 = require("../accounts");
const shared_1 = require("../shared");
const types_1 = require("../types");
function getDelegateProgrammableConfigV1InstructionDataSerializer() {
    return (0, serializers_1.mapSerializer)((0, serializers_1.struct)([
        ['discriminator', (0, serializers_1.u8)()],
        ['delegateProgrammableConfigV1Discriminator', (0, serializers_1.u8)()],
        ['authorizationData', (0, serializers_1.option)((0, types_1.getAuthorizationDataSerializer)())],
    ], { description: 'DelegateProgrammableConfigV1InstructionData' }), (value) => ({
        ...value,
        discriminator: 44,
        delegateProgrammableConfigV1Discriminator: 8,
        authorizationData: value.authorizationData ?? (0, umi_1.none)(),
    }));
}
exports.getDelegateProgrammableConfigV1InstructionDataSerializer = getDelegateProgrammableConfigV1InstructionDataSerializer;
// Instruction.
function delegateProgrammableConfigV1(context, input) {
    // Program ID.
    const programId = context.programs.getPublicKey('mplTokenMetadata', 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');
    // Accounts.
    const resolvedAccounts = {
        delegateRecord: {
            index: 0,
            isWritable: true,
            value: input.delegateRecord ?? null,
        },
        delegate: {
            index: 1,
            isWritable: false,
            value: input.delegate ?? null,
        },
        metadata: {
            index: 2,
            isWritable: true,
            value: input.metadata ?? null,
        },
        masterEdition: {
            index: 3,
            isWritable: false,
            value: input.masterEdition ?? null,
        },
        tokenRecord: {
            index: 4,
            isWritable: true,
            value: input.tokenRecord ?? null,
        },
        mint: { index: 5, isWritable: false, value: input.mint ?? null },
        token: {
            index: 6,
            isWritable: true,
            value: input.token ?? null,
        },
        authority: {
            index: 7,
            isWritable: false,
            value: input.authority ?? null,
        },
        payer: {
            index: 8,
            isWritable: true,
            value: input.payer ?? null,
        },
        systemProgram: {
            index: 9,
            isWritable: false,
            value: input.systemProgram ?? null,
        },
        sysvarInstructions: {
            index: 10,
            isWritable: false,
            value: input.sysvarInstructions ?? null,
        },
        splTokenProgram: {
            index: 11,
            isWritable: false,
            value: input.splTokenProgram ?? null,
        },
        authorizationRulesProgram: {
            index: 12,
            isWritable: false,
            value: input.authorizationRulesProgram ?? null,
        },
        authorizationRules: {
            index: 13,
            isWritable: false,
            value: input.authorizationRules ?? null,
        },
    };
    // Arguments.
    const resolvedArgs = {
        ...input,
    };
    // Default values.
    if (!resolvedAccounts.authority.value) {
        resolvedAccounts.authority.value = context.identity;
    }
    if (!resolvedArgs.updateAuthority) {
        resolvedArgs.updateAuthority = (0, shared_1.expectPublicKey)(resolvedAccounts.authority.value);
    }
    if (!resolvedAccounts.delegateRecord.value) {
        resolvedAccounts.delegateRecord.value = (0, accounts_1.findMetadataDelegateRecordPda)(context, {
            delegateRole: types_1.MetadataDelegateRole.ProgrammableConfig,
            updateAuthority: (0, shared_1.expectSome)(resolvedArgs.updateAuthority),
            mint: (0, shared_1.expectPublicKey)(resolvedAccounts.mint.value),
            delegate: (0, shared_1.expectPublicKey)(resolvedAccounts.delegate.value),
        });
    }
    if (!resolvedAccounts.metadata.value) {
        resolvedAccounts.metadata.value = (0, accounts_1.findMetadataPda)(context, {
            mint: (0, shared_1.expectPublicKey)(resolvedAccounts.mint.value),
        });
    }
    if (!resolvedAccounts.masterEdition.value) {
        if ((0, hooked_1.resolveIsNonFungible)(context, resolvedAccounts, resolvedArgs, programId, false)) {
            resolvedAccounts.masterEdition.value = (0, accounts_1.findMasterEditionPda)(context, {
                mint: (0, shared_1.expectPublicKey)(resolvedAccounts.mint.value),
            });
        }
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
    const data = getDelegateProgrammableConfigV1InstructionDataSerializer().serialize(resolvedArgs);
    // Bytes Created On Chain.
    const bytesCreatedOnChain = 0;
    return (0, umi_1.transactionBuilder)([
        { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
    ]);
}
exports.delegateProgrammableConfigV1 = delegateProgrammableConfigV1;
//# sourceMappingURL=delegateProgrammableConfigV1.js.map