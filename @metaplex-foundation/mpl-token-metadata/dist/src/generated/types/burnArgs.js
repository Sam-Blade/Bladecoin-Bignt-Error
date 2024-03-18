"use strict";
/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBurnArgs = exports.burnArgs = exports.getBurnArgsSerializer = void 0;
const serializers_1 = require("@metaplex-foundation/umi/serializers");
function getBurnArgsSerializer() {
    return (0, serializers_1.dataEnum)([
        [
            'V1',
            (0, serializers_1.mapSerializer)((0, serializers_1.struct)([['amount', (0, serializers_1.u64)()]]), (value) => ({ ...value, amount: value.amount ?? 1 })),
        ],
    ], { description: 'BurnArgs' });
}
exports.getBurnArgsSerializer = getBurnArgsSerializer;
function burnArgs(kind, data) {
    return Array.isArray(data)
        ? { __kind: kind, fields: data }
        : { __kind: kind, ...(data ?? {}) };
}
exports.burnArgs = burnArgs;
function isBurnArgs(kind, value) {
    return value.__kind === kind;
}
exports.isBurnArgs = isBurnArgs;
//# sourceMappingURL=burnArgs.js.map