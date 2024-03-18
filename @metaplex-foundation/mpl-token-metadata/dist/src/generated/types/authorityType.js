"use strict";
/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthorityTypeSerializer = exports.AuthorityType = void 0;
const serializers_1 = require("@metaplex-foundation/umi/serializers");
var AuthorityType;
(function (AuthorityType) {
    AuthorityType[AuthorityType["None"] = 0] = "None";
    AuthorityType[AuthorityType["Metadata"] = 1] = "Metadata";
    AuthorityType[AuthorityType["Holder"] = 2] = "Holder";
    AuthorityType[AuthorityType["MetadataDelegate"] = 3] = "MetadataDelegate";
    AuthorityType[AuthorityType["TokenDelegate"] = 4] = "TokenDelegate";
})(AuthorityType = exports.AuthorityType || (exports.AuthorityType = {}));
function getAuthorityTypeSerializer() {
    return (0, serializers_1.scalarEnum)(AuthorityType, {
        description: 'AuthorityType',
    });
}
exports.getAuthorityTypeSerializer = getAuthorityTypeSerializer;
//# sourceMappingURL=authorityType.js.map