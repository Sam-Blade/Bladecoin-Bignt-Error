"use strict";
/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeFetchTokenRecordFromSeeds = exports.fetchTokenRecordFromSeeds = exports.findTokenRecordPda = exports.getTokenRecordSize = exports.getTokenRecordGpaBuilder = exports.safeFetchAllTokenRecord = exports.fetchAllTokenRecord = exports.safeFetchTokenRecord = exports.fetchTokenRecord = exports.deserializeTokenRecord = exports.getTokenRecordAccountDataSerializer = void 0;
const umi_1 = require("@metaplex-foundation/umi");
const serializers_1 = require("@metaplex-foundation/umi/serializers");
const types_1 = require("../types");
function getTokenRecordAccountDataSerializer() {
    return (0, serializers_1.mapSerializer)((0, serializers_1.struct)([
        ['key', (0, types_1.getKeySerializer)()],
        ['bump', (0, serializers_1.u8)()],
        ['state', (0, types_1.getTokenStateSerializer)()],
        ['ruleSetRevision', (0, serializers_1.option)((0, serializers_1.u64)())],
        ['delegate', (0, serializers_1.option)((0, serializers_1.publicKey)())],
        ['delegateRole', (0, serializers_1.option)((0, types_1.getTokenDelegateRoleSerializer)())],
        ['lockedTransfer', (0, serializers_1.option)((0, serializers_1.publicKey)())],
    ], { description: 'TokenRecordAccountData' }), (value) => ({ ...value, key: types_1.Key.TokenRecord }));
}
exports.getTokenRecordAccountDataSerializer = getTokenRecordAccountDataSerializer;
function deserializeTokenRecord(rawAccount) {
    return (0, umi_1.deserializeAccount)(rawAccount, getTokenRecordAccountDataSerializer());
}
exports.deserializeTokenRecord = deserializeTokenRecord;
async function fetchTokenRecord(context, publicKey, options) {
    const maybeAccount = await context.rpc.getAccount((0, umi_1.publicKey)(publicKey, false), options);
    (0, umi_1.assertAccountExists)(maybeAccount, 'TokenRecord');
    return deserializeTokenRecord(maybeAccount);
}
exports.fetchTokenRecord = fetchTokenRecord;
async function safeFetchTokenRecord(context, publicKey, options) {
    const maybeAccount = await context.rpc.getAccount((0, umi_1.publicKey)(publicKey, false), options);
    return maybeAccount.exists ? deserializeTokenRecord(maybeAccount) : null;
}
exports.safeFetchTokenRecord = safeFetchTokenRecord;
async function fetchAllTokenRecord(context, publicKeys, options) {
    const maybeAccounts = await context.rpc.getAccounts(publicKeys.map((key) => (0, umi_1.publicKey)(key, false)), options);
    return maybeAccounts.map((maybeAccount) => {
        (0, umi_1.assertAccountExists)(maybeAccount, 'TokenRecord');
        return deserializeTokenRecord(maybeAccount);
    });
}
exports.fetchAllTokenRecord = fetchAllTokenRecord;
async function safeFetchAllTokenRecord(context, publicKeys, options) {
    const maybeAccounts = await context.rpc.getAccounts(publicKeys.map((key) => (0, umi_1.publicKey)(key, false)), options);
    return maybeAccounts
        .filter((maybeAccount) => maybeAccount.exists)
        .map((maybeAccount) => deserializeTokenRecord(maybeAccount));
}
exports.safeFetchAllTokenRecord = safeFetchAllTokenRecord;
function getTokenRecordGpaBuilder(context) {
    const programId = context.programs.getPublicKey('mplTokenMetadata', 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');
    return (0, umi_1.gpaBuilder)(context, programId)
        .registerFields({
        key: [0, (0, types_1.getKeySerializer)()],
        bump: [1, (0, serializers_1.u8)()],
        state: [2, (0, types_1.getTokenStateSerializer)()],
        ruleSetRevision: [3, (0, serializers_1.option)((0, serializers_1.u64)())],
        delegate: [null, (0, serializers_1.option)((0, serializers_1.publicKey)())],
        delegateRole: [null, (0, serializers_1.option)((0, types_1.getTokenDelegateRoleSerializer)())],
        lockedTransfer: [null, (0, serializers_1.option)((0, serializers_1.publicKey)())],
    })
        .deserializeUsing((account) => deserializeTokenRecord(account))
        .whereField('key', types_1.Key.TokenRecord);
}
exports.getTokenRecordGpaBuilder = getTokenRecordGpaBuilder;
function getTokenRecordSize() {
    return 80;
}
exports.getTokenRecordSize = getTokenRecordSize;
function findTokenRecordPda(context, seeds) {
    const programId = context.programs.getPublicKey('mplTokenMetadata', 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');
    return context.eddsa.findPda(programId, [
        (0, serializers_1.string)({ size: 'variable' }).serialize('metadata'),
        (0, serializers_1.publicKey)().serialize(programId),
        (0, serializers_1.publicKey)().serialize(seeds.mint),
        (0, serializers_1.string)({ size: 'variable' }).serialize('token_record'),
        (0, serializers_1.publicKey)().serialize(seeds.token),
    ]);
}
exports.findTokenRecordPda = findTokenRecordPda;
async function fetchTokenRecordFromSeeds(context, seeds, options) {
    return fetchTokenRecord(context, findTokenRecordPda(context, seeds), options);
}
exports.fetchTokenRecordFromSeeds = fetchTokenRecordFromSeeds;
async function safeFetchTokenRecordFromSeeds(context, seeds, options) {
    return safeFetchTokenRecord(context, findTokenRecordPda(context, seeds), options);
}
exports.safeFetchTokenRecordFromSeeds = safeFetchTokenRecordFromSeeds;
//# sourceMappingURL=tokenRecord.js.map