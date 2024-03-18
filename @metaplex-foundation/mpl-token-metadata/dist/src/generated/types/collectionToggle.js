"use strict";
/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCollectionToggle = exports.collectionToggle = exports.getCollectionToggleSerializer = void 0;
const serializers_1 = require("@metaplex-foundation/umi/serializers");
const _1 = require(".");
function getCollectionToggleSerializer() {
    return (0, serializers_1.dataEnum)([
        ['None', (0, serializers_1.unit)()],
        ['Clear', (0, serializers_1.unit)()],
        [
            'Set',
            (0, serializers_1.struct)([
                ['fields', (0, serializers_1.tuple)([(0, _1.getCollectionSerializer)()])],
            ]),
        ],
    ], { description: 'CollectionToggle' });
}
exports.getCollectionToggleSerializer = getCollectionToggleSerializer;
function collectionToggle(kind, data) {
    return Array.isArray(data)
        ? { __kind: kind, fields: data }
        : { __kind: kind, ...(data ?? {}) };
}
exports.collectionToggle = collectionToggle;
function isCollectionToggle(kind, value) {
    return value.__kind === kind;
}
exports.isCollectionToggle = isCollectionToggle;
//# sourceMappingURL=collectionToggle.js.map