/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Account, Context, Option, OptionOrNullable, Pda, PublicKey, RpcAccount, RpcGetAccountOptions, RpcGetAccountsOptions } from '@metaplex-foundation/umi';
import { Serializer } from '@metaplex-foundation/umi/serializers';
import { Collection, CollectionArgs, CollectionDetails, CollectionDetailsArgs, Creator, CreatorArgs, Key, KeyArgs, ProgrammableConfig, ProgrammableConfigArgs, TokenStandard, TokenStandardArgs, Uses, UsesArgs } from '../types';
export type Metadata = Account<MetadataAccountData>;
export type MetadataAccountData = {
    key: Key;
    updateAuthority: PublicKey;
    mint: PublicKey;
    name: string;
    symbol: string;
    uri: string;
    sellerFeeBasisPoints: number;
    creators: Option<Array<Creator>>;
    primarySaleHappened: boolean;
    isMutable: boolean;
    editionNonce: Option<number>;
    tokenStandard: Option<TokenStandard>;
    collection: Option<Collection>;
    uses: Option<Uses>;
    collectionDetails: Option<CollectionDetails>;
    programmableConfig: Option<ProgrammableConfig>;
};
export type MetadataAccountDataArgs = {
    updateAuthority: PublicKey;
    mint: PublicKey;
    name: string;
    symbol: string;
    uri: string;
    sellerFeeBasisPoints: number;
    creators: OptionOrNullable<Array<CreatorArgs>>;
    primarySaleHappened: boolean;
    isMutable: boolean;
    editionNonce: OptionOrNullable<number>;
    tokenStandard: OptionOrNullable<TokenStandardArgs>;
    collection: OptionOrNullable<CollectionArgs>;
    uses: OptionOrNullable<UsesArgs>;
    collectionDetails: OptionOrNullable<CollectionDetailsArgs>;
    programmableConfig: OptionOrNullable<ProgrammableConfigArgs>;
};
export declare function getMetadataAccountDataSerializer(): Serializer<MetadataAccountDataArgs, MetadataAccountData>;
export declare function deserializeMetadata(rawAccount: RpcAccount): Metadata;
export declare function fetchMetadata(context: Pick<Context, 'rpc'>, publicKey: PublicKey | Pda, options?: RpcGetAccountOptions): Promise<Metadata>;
export declare function safeFetchMetadata(context: Pick<Context, 'rpc'>, publicKey: PublicKey | Pda, options?: RpcGetAccountOptions): Promise<Metadata | null>;
export declare function fetchAllMetadata(context: Pick<Context, 'rpc'>, publicKeys: Array<PublicKey | Pda>, options?: RpcGetAccountsOptions): Promise<Metadata[]>;
export declare function safeFetchAllMetadata(context: Pick<Context, 'rpc'>, publicKeys: Array<PublicKey | Pda>, options?: RpcGetAccountsOptions): Promise<Metadata[]>;
export declare function getMetadataGpaBuilder(context: Pick<Context, 'rpc' | 'programs'>): import("@metaplex-foundation/umi").GpaBuilder<Metadata, {
    key: KeyArgs;
    updateAuthority: PublicKey;
    mint: PublicKey;
    name: string;
    symbol: string;
    uri: string;
    sellerFeeBasisPoints: number;
    creators: OptionOrNullable<Array<CreatorArgs>>;
    primarySaleHappened: boolean;
    isMutable: boolean;
    editionNonce: OptionOrNullable<number>;
    tokenStandard: OptionOrNullable<TokenStandardArgs>;
    collection: OptionOrNullable<CollectionArgs>;
    uses: OptionOrNullable<UsesArgs>;
    collectionDetails: OptionOrNullable<CollectionDetailsArgs>;
    programmableConfig: OptionOrNullable<ProgrammableConfigArgs>;
}>;
export declare function findMetadataPda(context: Pick<Context, 'eddsa' | 'programs'>, seeds: {
    /** The address of the mint account */
    mint: PublicKey;
}): Pda;
export declare function fetchMetadataFromSeeds(context: Pick<Context, 'eddsa' | 'programs' | 'rpc'>, seeds: Parameters<typeof findMetadataPda>[1], options?: RpcGetAccountOptions): Promise<Metadata>;
export declare function safeFetchMetadataFromSeeds(context: Pick<Context, 'eddsa' | 'programs' | 'rpc'>, seeds: Parameters<typeof findMetadataPda>[1], options?: RpcGetAccountOptions): Promise<Metadata | null>;
