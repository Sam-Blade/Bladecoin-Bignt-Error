"use strict";
/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIdempotentAssociatedToken = void 0;
const umi_1 = require("@metaplex-foundation/umi");
const shared_1 = require("../shared");
// Instruction.
function createIdempotentAssociatedToken(context, input) {
    // Program ID.
    const programId = context.programs.getPublicKey('splAssociatedToken', 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL');
    // Accounts.
    const resolvedAccounts = {
        payer: { index: 0, isWritable: true, value: input.payer ?? null },
        ata: { index: 1, isWritable: true, value: input.ata ?? null },
        owner: { index: 2, isWritable: false, value: input.owner ?? null },
        mint: { index: 3, isWritable: false, value: input.mint ?? null },
        systemProgram: {
            index: 4,
            isWritable: false,
            value: input.systemProgram ?? null,
        },
        tokenProgram: {
            index: 5,
            isWritable: false,
            value: input.tokenProgram ?? null,
        },
    };
    // Default values.
    if (!resolvedAccounts.payer.value) {
        resolvedAccounts.payer.value = context.payer;
    }
    if (!resolvedAccounts.systemProgram.value) {
        resolvedAccounts.systemProgram.value = context.programs.getPublicKey('splSystem', '11111111111111111111111111111111');
        resolvedAccounts.systemProgram.isWritable = false;
    }
    if (!resolvedAccounts.tokenProgram.value) {
        resolvedAccounts.tokenProgram.value = context.programs.getPublicKey('splToken', 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');
        resolvedAccounts.tokenProgram.isWritable = false;
    }
    // Accounts in order.
    const orderedAccounts = Object.values(resolvedAccounts).sort((a, b) => a.index - b.index);
    // Keys and Signers.
    const [keys, signers] = (0, shared_1.getAccountMetasAndSigners)(orderedAccounts, 'programId', programId);
    // Data.
    const data = new Uint8Array();
    // Bytes Created On Chain.
    const bytesCreatedOnChain = 0;
    return (0, umi_1.transactionBuilder)([
        { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
    ]);
}
exports.createIdempotentAssociatedToken = createIdempotentAssociatedToken;
//# sourceMappingURL=createIdempotentAssociatedToken.js.map