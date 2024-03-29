/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Context, TransactionBuilder } from '@metaplex-foundation/umi';
import { Serializer } from '@metaplex-foundation/umi/serializers';
export type RequestHeapFrameInstructionData = {
    discriminator: number;
    /**
     * Requested transaction-wide program heap size in bytes.
     * Must be multiple of 1024. Applies to each program, including CPIs.
     */
    bytes: number;
};
export type RequestHeapFrameInstructionDataArgs = {
    /**
     * Requested transaction-wide program heap size in bytes.
     * Must be multiple of 1024. Applies to each program, including CPIs.
     */
    bytes: number;
};
export declare function getRequestHeapFrameInstructionDataSerializer(): Serializer<RequestHeapFrameInstructionDataArgs, RequestHeapFrameInstructionData>;
export type RequestHeapFrameInstructionArgs = RequestHeapFrameInstructionDataArgs;
export declare function requestHeapFrame(context: Pick<Context, 'programs'>, input: RequestHeapFrameInstructionArgs): TransactionBuilder;
