/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Program, ProgramError } from '@metaplex-foundation/umi';
/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 */
export declare function getSplSystemErrorFromCode(code: number, program: Program, cause?: Error): ProgramError | null;
/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 */
export declare function getSplSystemErrorFromName(name: string, program: Program, cause?: Error): ProgramError | null;
