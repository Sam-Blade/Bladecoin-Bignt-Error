"use strict";
/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeFetchMetadataFromSeeds = exports.fetchMetadataFromSeeds = exports.findMetadataPda = exports.getMetadataGpaBuilder = exports.safeFetchAllMetadata = exports.fetchAllMetadata = exports.safeFetchMetadata = exports.fetchMetadata = exports.deserializeMetadata = exports.getMetadataAccountDataSerializer = void 0;
const umi_1 = require("@metaplex-foundation/umi");
const serializers_1 = require("@metaplex-foundation/umi/serializers");
const types_1 = require("../types");
function getMetadataAccountDataSerializer() {
    return (0, serializers_1.mapSerializer)((0, serializers_1.struct)([
        ['key', (0, types_1.getKeySerializer)()],
        ['updateAuthority', (0, serializers_1.publicKey)()],
        ['mint', (0, serializers_1.publicKey)()],
        ['name', (0, serializers_1.string)()],
        ['symbol', (0, serializers_1.string)()],
        ['uri', (0, serializers_1.string)()],
        ['sellerFeeBasisPoints', (0, serializers_1.u16)()],
        ['creators', (0, serializers_1.option)((0, serializers_1.array)((0, types_1.getCreatorSerializer)()))],
        ['primarySaleHappened', (0, serializers_1.bool)()],
        ['isMutable', (0, serializers_1.bool)()],
        ['editionNonce', (0, serializers_1.option)((0, serializers_1.u8)())],
        ['tokenStandard', (0, serializers_1.option)((0, types_1.getTokenStandardSerializer)())],
        ['collection', (0, serializers_1.option)((0, types_1.getCollectionSerializer)())],
        ['uses', (0, serializers_1.option)((0, types_1.getUsesSerializer)())],
        ['collectionDetails', (0, serializers_1.option)((0, types_1.getCollectionDetailsSerializer)())],
        ['programmableConfig', (0, serializers_1.option)((0, types_1.getProgrammableConfigSerializer)())],
    ], { description: 'MetadataAccountData' }), (value) => ({ ...value, key: types_1.Key.MetadataV1 }));
}
exports.getMetadataAccountDataSerializer = getMetadataAccountDataSerializer;
function deserializeMetadata(rawAccount) {
    return (0, umi_1.deserializeAccount)(rawAccount, getMetadataAccountDataSerializer());
}
exports.deserializeMetadata = deserializeMetadata;
async function fetchMetadata(context, publicKey, options) {
    const maybeAccount = await context.rpc.getAccount((0, umi_1.publicKey)(publicKey, false), options);
    (0, umi_1.assertAccountExists)(maybeAccount, 'Metadata');
    return deserializeMetadata(maybeAccount);
}
exports.fetchMetadata = fetchMetadata;
async function safeFetchMetadata(context, publicKey, options) {
    const maybeAccount = await context.rpc.getAccount((0, umi_1.publicKey)(publicKey, false), options);
    return maybeAccount.exists ? deserializeMetadata(maybeAccount) : null;
}
exports.safeFetchMetadata = safeFetchMetadata;
async function fetchAllMetadata(context, publicKeys, options) {
    const maybeAccounts = await context.rpc.getAccounts(publicKeys.map((key) => (0, umi_1.publicKey)(key, false)), options);
    return maybeAccounts.map((maybeAccount) => {
        (0, umi_1.assertAccountExists)(maybeAccount, 'Metadata');
        return deserializeMetadata(maybeAccount);
    });
}
exports.fetchAllMetadata = fetchAllMetadata;
async function safeFetchAllMetadata(context, publicKeys, options) {
    const maybeAccounts = await context.rpc.getAccounts(publicKeys.map((key) => (0, umi_1.publicKey)(key, false)), options);
    return maybeAccounts
        .filter((maybeAccount) => maybeAccount.exists)
        .map((maybeAccount) => deserializeMetadata(maybeAccount));
}
exports.safeFetchAllMetadata = safeFetchAllMetadata;
function getMetadataGpaBuilder(context) {
    const programId = context.programs.getPublicKey('mplTokenMetadata', 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');
    return (0, umi_1.gpaBuilder)(context, programId)
        .registerFields({
        key: [0, (0, types_1.getKeySerializer)()],
        updateAuthority: [1, (0, serializers_1.publicKey)()],
        mint: [33, (0, serializers_1.publicKey)()],
        name: [65, (0, serializers_1.string)()],
        symbol: [null, (0, serializers_1.string)()],
        uri: [null, (0, serializers_1.string)()],
        sellerFeeBasisPoints: [null, (0, serializers_1.u16)()],
        creators: [null, (0, serializers_1.option)((0, serializers_1.array)((0, types_1.getCreatorSerializer)()))],
        primarySaleHappened: [null, (0, serializers_1.bool)()],
        isMutable: [null, (0, serializers_1.bool)()],
        editionNonce: [null, (0, serializers_1.option)((0, serializers_1.u8)())],
        tokenStandard: [null, (0, serializers_1.option)((0, types_1.getTokenStandardSerializer)())],
        collection: [null, (0, serializers_1.option)((0, types_1.getCollectionSerializer)())],
        uses: [null, (0, serializers_1.option)((0, types_1.getUsesSerializer)())],
        collectionDetails: [null, (0, serializers_1.option)((0, types_1.getCollectionDetailsSerializer)())],
        programmableConfig: [null, (0, serializers_1.option)((0, types_1.getProgrammableConfigSerializer)())],
    })
        .deserializeUsing((account) => deserializeMetadata(account))
        .whereField('key', types_1.Key.MetadataV1);
}
exports.getMetadataGpaBuilder = getMetadataGpaBuilder;
function findMetadataPda(context, seeds) {
    const programId = context.programs.getPublicKey('mplTokenMetadata', 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');
    return context.eddsa.findPda(programId, [
        (0, serializers_1.string)({ size: 'variable' }).serialize('metadata'),
        (0, serializers_1.publicKey)().serialize(programId),
        (0, serializers_1.publicKey)().serialize(seeds.mint),
    ]);
}
exports.findMetadataPda = findMetadataPda;
async function fetchMetadataFromSeeds(context, seeds, options) {
    return fetchMetadata(context, findMetadataPda(context, seeds), options);
}
exports.fetchMetadataFromSeeds = fetchMetadataFromSeeds;
async function safeFetchMetadataFromSeeds(context, seeds, options) {
    return safeFetchMetadata(context, findMetadataPda(context, seeds), options);
}
exports.safeFetchMetadataFromSeeds = safeFetchMetadataFromSeeds;
//# sourceMappingURL=metadata.js.map