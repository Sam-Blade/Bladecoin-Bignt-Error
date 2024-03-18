"use strict";
/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenDelegateRoleSerializer = exports.TokenDelegateRole = void 0;
const serializers_1 = require("@metaplex-foundation/umi/serializers");
var TokenDelegateRole;
(function (TokenDelegateRole) {
    TokenDelegateRole[TokenDelegateRole["Sale"] = 0] = "Sale";
    TokenDelegateRole[TokenDelegateRole["Transfer"] = 1] = "Transfer";
    TokenDelegateRole[TokenDelegateRole["Utility"] = 2] = "Utility";
    TokenDelegateRole[TokenDelegateRole["Staking"] = 3] = "Staking";
    TokenDelegateRole[TokenDelegateRole["Standard"] = 4] = "Standard";
    TokenDelegateRole[TokenDelegateRole["LockedTransfer"] = 5] = "LockedTransfer";
    TokenDelegateRole[TokenDelegateRole["Migration"] = 6] = "Migration";
})(TokenDelegateRole = exports.TokenDelegateRole || (exports.TokenDelegateRole = {}));
function getTokenDelegateRoleSerializer() {
    return (0, serializers_1.scalarEnum)(TokenDelegateRole, {
        description: 'TokenDelegateRole',
    });
}
exports.getTokenDelegateRoleSerializer = getTokenDelegateRoleSerializer;
//# sourceMappingURL=tokenDelegateRole.js.map