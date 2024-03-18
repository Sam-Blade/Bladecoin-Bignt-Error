"use strict";
/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSplAssociatedTokenProgramId = exports.getSplAssociatedTokenProgram = exports.createSplAssociatedTokenProgram = exports.SPL_ASSOCIATED_TOKEN_PROGRAM_ID = void 0;
const errors_1 = require("../errors");
exports.SPL_ASSOCIATED_TOKEN_PROGRAM_ID = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
function createSplAssociatedTokenProgram() {
    return {
        name: 'splAssociatedToken',
        publicKey: exports.SPL_ASSOCIATED_TOKEN_PROGRAM_ID,
        getErrorFromCode(code, cause) {
            return (0, errors_1.getSplAssociatedTokenErrorFromCode)(code, this, cause);
        },
        getErrorFromName(name, cause) {
            return (0, errors_1.getSplAssociatedTokenErrorFromName)(name, this, cause);
        },
        isOnCluster() {
            return true;
        },
    };
}
exports.createSplAssociatedTokenProgram = createSplAssociatedTokenProgram;
function getSplAssociatedTokenProgram(context, clusterFilter) {
    return context.programs.get('splAssociatedToken', clusterFilter);
}
exports.getSplAssociatedTokenProgram = getSplAssociatedTokenProgram;
function getSplAssociatedTokenProgramId(context, clusterFilter) {
    return context.programs.getPublicKey('splAssociatedToken', exports.SPL_ASSOCIATED_TOKEN_PROGRAM_ID, clusterFilter);
}
exports.getSplAssociatedTokenProgramId = getSplAssociatedTokenProgramId;
//# sourceMappingURL=splAssociatedToken.js.map