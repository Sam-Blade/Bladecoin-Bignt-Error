/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Account, Context, Option, OptionOrNullable, Pda, PublicKey, RpcAccount, RpcGetAccountOptions, RpcGetAccountsOptions } from '@metaplex-foundation/umi';
import { Serializer } from '@metaplex-foundation/umi/serializers';
import { TokenState, TokenStateArgs } from '../types';
export type Token = Account<TokenAccountData>;
export type TokenAccountData = {
    mint: PublicKey;
    owner: PublicKey;
    amount: bigint;
    delegate: Option<PublicKey>;
    state: TokenState;
    isNative: Option<bigint>;
    delegatedAmount: bigint;
    closeAuthority: Option<PublicKey>;
};
export type TokenAccountDataArgs = {
    mint: PublicKey;
    owner: PublicKey;
    amount: number | bigint;
    delegate: OptionOrNullable<PublicKey>;
    state: TokenStateArgs;
    isNative: OptionOrNullable<number | bigint>;
    delegatedAmount: number | bigint;
    closeAuthority: OptionOrNullable<PublicKey>;
};
export declare function getTokenAccountDataSerializer(): Serializer<TokenAccountDataArgs, TokenAccountData>;
export declare function deserializeToken(rawAccount: RpcAccount): Token;
export declare function fetchToken(context: Pick<Context, 'rpc'>, publicKey: PublicKey | Pda, options?: RpcGetAccountOptions): Promise<Token>;
export declare function safeFetchToken(context: Pick<Context, 'rpc'>, publicKey: PublicKey | Pda, options?: RpcGetAccountOptions): Promise<Token | null>;
export declare function fetchAllToken(context: Pick<Context, 'rpc'>, publicKeys: Array<PublicKey | Pda>, options?: RpcGetAccountsOptions): Promise<Token[]>;
export declare function safeFetchAllToken(context: Pick<Context, 'rpc'>, publicKeys: Array<PublicKey | Pda>, options?: RpcGetAccountsOptions): Promise<Token[]>;
export declare function getTokenGpaBuilder(context: Pick<Context, 'rpc' | 'programs'>): import("@metaplex-foundation/umi").GpaBuilder<Token, {
    mint: PublicKey;
    owner: PublicKey;
    amount: number | bigint;
    delegate: OptionOrNullable<PublicKey>;
    state: TokenStateArgs;
    isNative: OptionOrNullable<number | bigint>;
    delegatedAmount: number | bigint;
    closeAuthority: OptionOrNullable<PublicKey>;
}>;
export declare function getTokenSize(): number;
