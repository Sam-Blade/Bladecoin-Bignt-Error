/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { ClusterFilter, Context, Program, PublicKey } from '@metaplex-foundation/umi';
export declare const MPL_TOKEN_EXTRAS_PROGRAM_ID: PublicKey<"TokExjvjJmhKaRBShsBAsbSvEWMA1AgUNK7ps4SAc2p">;
export declare function createMplTokenExtrasProgram(): Program;
export declare function getMplTokenExtrasProgram<T extends Program = Program>(context: Pick<Context, 'programs'>, clusterFilter?: ClusterFilter): T;
export declare function getMplTokenExtrasProgramId(context: Pick<Context, 'programs'>, clusterFilter?: ClusterFilter): PublicKey;
