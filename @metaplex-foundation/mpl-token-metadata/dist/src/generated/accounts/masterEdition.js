"use strict";
/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeFetchMasterEditionFromSeeds = exports.fetchMasterEditionFromSeeds = exports.findMasterEditionPda = exports.getMasterEditionGpaBuilder = exports.safeFetchAllMasterEdition = exports.fetchAllMasterEdition = exports.safeFetchMasterEdition = exports.fetchMasterEdition = exports.deserializeMasterEdition = exports.getMasterEditionAccountDataSerializer = void 0;
const umi_1 = require("@metaplex-foundation/umi");
const serializers_1 = require("@metaplex-foundation/umi/serializers");
const types_1 = require("../types");
function getMasterEditionAccountDataSerializer() {
    return (0, serializers_1.mapSerializer)((0, serializers_1.struct)([
        ['key', (0, types_1.getKeySerializer)()],
        ['supply', (0, serializers_1.u64)()],
        ['maxSupply', (0, serializers_1.option)((0, serializers_1.u64)())],
    ], { description: 'MasterEditionAccountData' }), (value) => ({ ...value, key: types_1.Key.MasterEditionV2 }));
}
exports.getMasterEditionAccountDataSerializer = getMasterEditionAccountDataSerializer;
function deserializeMasterEdition(rawAccount) {
    return (0, umi_1.deserializeAccount)(rawAccount, getMasterEditionAccountDataSerializer());
}
exports.deserializeMasterEdition = deserializeMasterEdition;
async function fetchMasterEdition(context, publicKey, options) {
    const maybeAccount = await context.rpc.getAccount((0, umi_1.publicKey)(publicKey, false), options);
    (0, umi_1.assertAccountExists)(maybeAccount, 'MasterEdition');
    return deserializeMasterEdition(maybeAccount);
}
exports.fetchMasterEdition = fetchMasterEdition;
async function safeFetchMasterEdition(context, publicKey, options) {
    const maybeAccount = await context.rpc.getAccount((0, umi_1.publicKey)(publicKey, false), options);
    return maybeAccount.exists ? deserializeMasterEdition(maybeAccount) : null;
}
exports.safeFetchMasterEdition = safeFetchMasterEdition;
async function fetchAllMasterEdition(context, publicKeys, options) {
    const maybeAccounts = await context.rpc.getAccounts(publicKeys.map((key) => (0, umi_1.publicKey)(key, false)), options);
    return maybeAccounts.map((maybeAccount) => {
        (0, umi_1.assertAccountExists)(maybeAccount, 'MasterEdition');
        return deserializeMasterEdition(maybeAccount);
    });
}
exports.fetchAllMasterEdition = fetchAllMasterEdition;
async function safeFetchAllMasterEdition(context, publicKeys, options) {
    const maybeAccounts = await context.rpc.getAccounts(publicKeys.map((key) => (0, umi_1.publicKey)(key, false)), options);
    return maybeAccounts
        .filter((maybeAccount) => maybeAccount.exists)
        .map((maybeAccount) => deserializeMasterEdition(maybeAccount));
}
exports.safeFetchAllMasterEdition = safeFetchAllMasterEdition;
function getMasterEditionGpaBuilder(context) {
    const programId = context.programs.getPublicKey('mplTokenMetadata', 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');
    return (0, umi_1.gpaBuilder)(context, programId)
        .registerFields({
        key: [0, (0, types_1.getKeySerializer)()],
        supply: [1, (0, serializers_1.u64)()],
        maxSupply: [9, (0, serializers_1.option)((0, serializers_1.u64)())],
    })
        .deserializeUsing((account) => deserializeMasterEdition(account))
        .whereField('key', types_1.Key.MasterEditionV2);
}
exports.getMasterEditionGpaBuilder = getMasterEditionGpaBuilder;
function findMasterEditionPda(context, seeds) {
    const programId = context.programs.getPublicKey('mplTokenMetadata', 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');
    return context.eddsa.findPda(programId, [
        (0, serializers_1.string)({ size: 'variable' }).serialize('metadata'),
        (0, serializers_1.publicKey)().serialize(programId),
        (0, serializers_1.publicKey)().serialize(seeds.mint),
        (0, serializers_1.string)({ size: 'variable' }).serialize('edition'),
    ]);
}
exports.findMasterEditionPda = findMasterEditionPda;
async function fetchMasterEditionFromSeeds(context, seeds, options) {
    return fetchMasterEdition(context, findMasterEditionPda(context, seeds), options);
}
exports.fetchMasterEditionFromSeeds = fetchMasterEditionFromSeeds;
async function safeFetchMasterEditionFromSeeds(context, seeds, options) {
    return safeFetchMasterEdition(context, findMasterEditionPda(context, seeds), options);
}
exports.safeFetchMasterEditionFromSeeds = safeFetchMasterEditionFromSeeds;
//# sourceMappingURL=masterEdition.js.map