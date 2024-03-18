"use strict";
/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSplComputeBudgetProgramId = exports.getSplComputeBudgetProgram = exports.createSplComputeBudgetProgram = exports.SPL_COMPUTE_BUDGET_PROGRAM_ID = void 0;
const errors_1 = require("../errors");
exports.SPL_COMPUTE_BUDGET_PROGRAM_ID = 'ComputeBudget111111111111111111111111111111';
function createSplComputeBudgetProgram() {
    return {
        name: 'splComputeBudget',
        publicKey: exports.SPL_COMPUTE_BUDGET_PROGRAM_ID,
        getErrorFromCode(code, cause) {
            return (0, errors_1.getSplComputeBudgetErrorFromCode)(code, this, cause);
        },
        getErrorFromName(name, cause) {
            return (0, errors_1.getSplComputeBudgetErrorFromName)(name, this, cause);
        },
        isOnCluster() {
            return true;
        },
    };
}
exports.createSplComputeBudgetProgram = createSplComputeBudgetProgram;
function getSplComputeBudgetProgram(context, clusterFilter) {
    return context.programs.get('splComputeBudget', clusterFilter);
}
exports.getSplComputeBudgetProgram = getSplComputeBudgetProgram;
function getSplComputeBudgetProgramId(context, clusterFilter) {
    return context.programs.getPublicKey('splComputeBudget', exports.SPL_COMPUTE_BUDGET_PROGRAM_ID, clusterFilter);
}
exports.getSplComputeBudgetProgramId = getSplComputeBudgetProgramId;
//# sourceMappingURL=splComputeBudget.js.map