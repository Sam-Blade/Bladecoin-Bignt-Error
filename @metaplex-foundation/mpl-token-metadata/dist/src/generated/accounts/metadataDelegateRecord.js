"use strict";
/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeFetchMetadataDelegateRecordFromSeeds = exports.fetchMetadataDelegateRecordFromSeeds = exports.findMetadataDelegateRecordPda = exports.getMetadataDelegateRecordSize = exports.getMetadataDelegateRecordGpaBuilder = exports.safeFetchAllMetadataDelegateRecord = exports.fetchAllMetadataDelegateRecord = exports.safeFetchMetadataDelegateRecord = exports.fetchMetadataDelegateRecord = exports.deserializeMetadataDelegateRecord = exports.getMetadataDelegateRecordAccountDataSerializer = void 0;
const umi_1 = require("@metaplex-foundation/umi");
const serializers_1 = require("@metaplex-foundation/umi/serializers");
const hooked_1 = require("../../hooked");
const types_1 = require("../types");
function getMetadataDelegateRecordAccountDataSerializer() {
    return (0, serializers_1.struct)([
        ['key', (0, types_1.getKeySerializer)()],
        ['bump', (0, serializers_1.u8)()],
        ['mint', (0, serializers_1.publicKey)()],
        ['delegate', (0, serializers_1.publicKey)()],
        ['updateAuthority', (0, serializers_1.publicKey)()],
    ], { description: 'MetadataDelegateRecordAccountData' });
}
exports.getMetadataDelegateRecordAccountDataSerializer = getMetadataDelegateRecordAccountDataSerializer;
function deserializeMetadataDelegateRecord(rawAccount) {
    return (0, umi_1.deserializeAccount)(rawAccount, getMetadataDelegateRecordAccountDataSerializer());
}
exports.deserializeMetadataDelegateRecord = deserializeMetadataDelegateRecord;
async function fetchMetadataDelegateRecord(context, publicKey, options) {
    const maybeAccount = await context.rpc.getAccount((0, umi_1.publicKey)(publicKey, false), options);
    (0, umi_1.assertAccountExists)(maybeAccount, 'MetadataDelegateRecord');
    return deserializeMetadataDelegateRecord(maybeAccount);
}
exports.fetchMetadataDelegateRecord = fetchMetadataDelegateRecord;
async function safeFetchMetadataDelegateRecord(context, publicKey, options) {
    const maybeAccount = await context.rpc.getAccount((0, umi_1.publicKey)(publicKey, false), options);
    return maybeAccount.exists
        ? deserializeMetadataDelegateRecord(maybeAccount)
        : null;
}
exports.safeFetchMetadataDelegateRecord = safeFetchMetadataDelegateRecord;
async function fetchAllMetadataDelegateRecord(context, publicKeys, options) {
    const maybeAccounts = await context.rpc.getAccounts(publicKeys.map((key) => (0, umi_1.publicKey)(key, false)), options);
    return maybeAccounts.map((maybeAccount) => {
        (0, umi_1.assertAccountExists)(maybeAccount, 'MetadataDelegateRecord');
        return deserializeMetadataDelegateRecord(maybeAccount);
    });
}
exports.fetchAllMetadataDelegateRecord = fetchAllMetadataDelegateRecord;
async function safeFetchAllMetadataDelegateRecord(context, publicKeys, options) {
    const maybeAccounts = await context.rpc.getAccounts(publicKeys.map((key) => (0, umi_1.publicKey)(key, false)), options);
    return maybeAccounts
        .filter((maybeAccount) => maybeAccount.exists)
        .map((maybeAccount) => deserializeMetadataDelegateRecord(maybeAccount));
}
exports.safeFetchAllMetadataDelegateRecord = safeFetchAllMetadataDelegateRecord;
function getMetadataDelegateRecordGpaBuilder(context) {
    const programId = context.programs.getPublicKey('mplTokenMetadata', 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');
    return (0, umi_1.gpaBuilder)(context, programId)
        .registerFields({
        key: [0, (0, types_1.getKeySerializer)()],
        bump: [1, (0, serializers_1.u8)()],
        mint: [2, (0, serializers_1.publicKey)()],
        delegate: [34, (0, serializers_1.publicKey)()],
        updateAuthority: [66, (0, serializers_1.publicKey)()],
    })
        .deserializeUsing((account) => deserializeMetadataDelegateRecord(account));
}
exports.getMetadataDelegateRecordGpaBuilder = getMetadataDelegateRecordGpaBuilder;
function getMetadataDelegateRecordSize() {
    return 98;
}
exports.getMetadataDelegateRecordSize = getMetadataDelegateRecordSize;
function findMetadataDelegateRecordPda(context, seeds) {
    const programId = context.programs.getPublicKey('mplTokenMetadata', 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');
    return context.eddsa.findPda(programId, [
        (0, serializers_1.string)({ size: 'variable' }).serialize('metadata'),
        (0, serializers_1.publicKey)().serialize(programId),
        (0, serializers_1.publicKey)().serialize(seeds.mint),
        (0, hooked_1.getMetadataDelegateRoleSeedSerializer)().serialize(seeds.delegateRole),
        (0, serializers_1.publicKey)().serialize(seeds.updateAuthority),
        (0, serializers_1.publicKey)().serialize(seeds.delegate),
    ]);
}
exports.findMetadataDelegateRecordPda = findMetadataDelegateRecordPda;
async function fetchMetadataDelegateRecordFromSeeds(context, seeds, options) {
    return fetchMetadataDelegateRecord(context, findMetadataDelegateRecordPda(context, seeds), options);
}
exports.fetchMetadataDelegateRecordFromSeeds = fetchMetadataDelegateRecordFromSeeds;
async function safeFetchMetadataDelegateRecordFromSeeds(context, seeds, options) {
    return safeFetchMetadataDelegateRecord(context, findMetadataDelegateRecordPda(context, seeds), options);
}
exports.safeFetchMetadataDelegateRecordFromSeeds = safeFetchMetadataDelegateRecordFromSeeds;
//# sourceMappingURL=metadataDelegateRecord.js.map