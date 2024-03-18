/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Account, Context, Option, OptionOrNullable, Pda, PublicKey, RpcAccount, RpcGetAccountOptions, RpcGetAccountsOptions } from '@metaplex-foundation/umi';
import { Serializer } from '@metaplex-foundation/umi/serializers';
import { Key, KeyArgs } from '../types';
export type MasterEdition = Account<MasterEditionAccountData>;
export type MasterEditionAccountData = {
    key: Key;
    supply: bigint;
    maxSupply: Option<bigint>;
};
export type MasterEditionAccountDataArgs = {
    supply: number | bigint;
    maxSupply: OptionOrNullable<number | bigint>;
};
export declare function getMasterEditionAccountDataSerializer(): Serializer<MasterEditionAccountDataArgs, MasterEditionAccountData>;
export declare function deserializeMasterEdition(rawAccount: RpcAccount): MasterEdition;
export declare function fetchMasterEdition(context: Pick<Context, 'rpc'>, publicKey: PublicKey | Pda, options?: RpcGetAccountOptions): Promise<MasterEdition>;
export declare function safeFetchMasterEdition(context: Pick<Context, 'rpc'>, publicKey: PublicKey | Pda, options?: RpcGetAccountOptions): Promise<MasterEdition | null>;
export declare function fetchAllMasterEdition(context: Pick<Context, 'rpc'>, publicKeys: Array<PublicKey | Pda>, options?: RpcGetAccountsOptions): Promise<MasterEdition[]>;
export declare function safeFetchAllMasterEdition(context: Pick<Context, 'rpc'>, publicKeys: Array<PublicKey | Pda>, options?: RpcGetAccountsOptions): Promise<MasterEdition[]>;
export declare function getMasterEditionGpaBuilder(context: Pick<Context, 'rpc' | 'programs'>): import("@metaplex-foundation/umi").GpaBuilder<MasterEdition, {
    key: KeyArgs;
    supply: number | bigint;
    maxSupply: OptionOrNullable<number | bigint>;
}>;
export declare function findMasterEditionPda(context: Pick<Context, 'eddsa' | 'programs'>, seeds: {
    /** The address of the mint account */
    mint: PublicKey;
}): Pda;
export declare function fetchMasterEditionFromSeeds(context: Pick<Context, 'eddsa' | 'programs' | 'rpc'>, seeds: Parameters<typeof findMasterEditionPda>[1], options?: RpcGetAccountOptions): Promise<MasterEdition>;
export declare function safeFetchMasterEditionFromSeeds(context: Pick<Context, 'eddsa' | 'programs' | 'rpc'>, seeds: Parameters<typeof findMasterEditionPda>[1], options?: RpcGetAccountOptions): Promise<MasterEdition | null>;
