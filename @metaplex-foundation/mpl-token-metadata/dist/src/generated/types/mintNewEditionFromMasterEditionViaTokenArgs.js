"use strict";
/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMintNewEditionFromMasterEditionViaTokenArgsSerializer = void 0;
const serializers_1 = require("@metaplex-foundation/umi/serializers");
function getMintNewEditionFromMasterEditionViaTokenArgsSerializer() {
    return (0, serializers_1.struct)([['edition', (0, serializers_1.u64)()]], { description: 'MintNewEditionFromMasterEditionViaTokenArgs' });
}
exports.getMintNewEditionFromMasterEditionViaTokenArgsSerializer = getMintNewEditionFromMasterEditionViaTokenArgsSerializer;
//# sourceMappingURL=mintNewEditionFromMasterEditionViaTokenArgs.js.map