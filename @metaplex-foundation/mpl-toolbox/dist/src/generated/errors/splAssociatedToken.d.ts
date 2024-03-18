/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Program, ProgramError } from '@metaplex-foundation/umi';
/** InvalidOwner: Associated token account owner does not match address derivation */
export declare class AtaInvalidOwnerError extends ProgramError {
    readonly name: string;
    readonly code: number;
    constructor(program: Program, cause?: Error);
}
/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 */
export declare function getSplAssociatedTokenErrorFromCode(code: number, program: Program, cause?: Error): ProgramError | null;
/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 */
export declare function getSplAssociatedTokenErrorFromName(name: string, program: Program, cause?: Error): ProgramError | null;