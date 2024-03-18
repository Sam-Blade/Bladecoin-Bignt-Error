/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Account, Context, Option, OptionOrNullable, Pda, PublicKey, RpcAccount, RpcGetAccountOptions, RpcGetAccountsOptions } from '@metaplex-foundation/umi';
import { Serializer } from '@metaplex-foundation/umi/serializers';
export type AddressLookupTable = Account<AddressLookupTableAccountData>;
export type AddressLookupTableAccountData = {
    discriminator: number;
    deactivationSlot: bigint;
    lastExtendedSlot: bigint;
    lastExtendedStartIndex: number;
    authority: Option<PublicKey>;
    padding: number;
    addresses: Array<PublicKey>;
};
export type AddressLookupTableAccountDataArgs = {
    deactivationSlot: number | bigint;
    lastExtendedSlot: number | bigint;
    lastExtendedStartIndex: number;
    authority: OptionOrNullable<PublicKey>;
    addresses: Array<PublicKey>;
};
export declare function getAddressLookupTableAccountDataSerializer(): Serializer<AddressLookupTableAccountDataArgs, AddressLookupTableAccountData>;
export declare function deserializeAddressLookupTable(rawAccount: RpcAccount): AddressLookupTable;
export declare function fetchAddressLookupTable(context: Pick<Context, 'rpc'>, publicKey: PublicKey | Pda, options?: RpcGetAccountOptions): Promise<AddressLookupTable>;
export declare function safeFetchAddressLookupTable(context: Pick<Context, 'rpc'>, publicKey: PublicKey | Pda, options?: RpcGetAccountOptions): Promise<AddressLookupTable | null>;
export declare function fetchAllAddressLookupTable(context: Pick<Context, 'rpc'>, publicKeys: Array<PublicKey | Pda>, options?: RpcGetAccountsOptions): Promise<AddressLookupTable[]>;
export declare function safeFetchAllAddressLookupTable(context: Pick<Context, 'rpc'>, publicKeys: Array<PublicKey | Pda>, options?: RpcGetAccountsOptions): Promise<AddressLookupTable[]>;
export declare function getAddressLookupTableGpaBuilder(context: Pick<Context, 'rpc' | 'programs'>): import("@metaplex-foundation/umi").GpaBuilder<AddressLookupTable, {
    discriminator: number;
    deactivationSlot: number | bigint;
    lastExtendedSlot: number | bigint;
    lastExtendedStartIndex: number;
    authority: OptionOrNullable<PublicKey>;
    padding: number;
    addresses: Array<PublicKey>;
}>;
export declare function findAddressLookupTablePda(context: Pick<Context, 'eddsa' | 'programs'>, seeds: {
    /** The address of the LUT's authority */
    authority: PublicKey;
    /** The recent slot associated with the LUT */
    recentSlot: number | bigint;
}): Pda;
export declare function fetchAddressLookupTableFromSeeds(context: Pick<Context, 'eddsa' | 'programs' | 'rpc'>, seeds: Parameters<typeof findAddressLookupTablePda>[1], options?: RpcGetAccountOptions): Promise<AddressLookupTable>;
export declare function safeFetchAddressLookupTableFromSeeds(context: Pick<Context, 'eddsa' | 'programs' | 'rpc'>, seeds: Parameters<typeof findAddressLookupTablePda>[1], options?: RpcGetAccountOptions): Promise<AddressLookupTable | null>;
