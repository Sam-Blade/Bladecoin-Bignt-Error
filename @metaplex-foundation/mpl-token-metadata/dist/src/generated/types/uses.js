"use strict";
/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsesSerializer = void 0;
const serializers_1 = require("@metaplex-foundation/umi/serializers");
const _1 = require(".");
function getUsesSerializer() {
    return (0, serializers_1.struct)([
        ['useMethod', (0, _1.getUseMethodSerializer)()],
        ['remaining', (0, serializers_1.u64)()],
        ['total', (0, serializers_1.u64)()],
    ], { description: 'Uses' });
}
exports.getUsesSerializer = getUsesSerializer;
//# sourceMappingURL=uses.js.map