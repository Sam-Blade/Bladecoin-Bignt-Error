/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Option, OptionOrNullable } from '@metaplex-foundation/umi';
import { GetDataEnumKind, GetDataEnumKindContent, Serializer } from '@metaplex-foundation/umi/serializers';
import { AuthorizationData, AuthorizationDataArgs } from '.';
export type TransferArgs = {
    __kind: 'V1';
    amount: bigint;
    authorizationData: Option<AuthorizationData>;
};
export type TransferArgsArgs = {
    __kind: 'V1';
    amount?: number | bigint;
    authorizationData?: OptionOrNullable<AuthorizationDataArgs>;
};
export declare function getTransferArgsSerializer(): Serializer<TransferArgsArgs, TransferArgs>;
export declare function transferArgs(kind: 'V1', data: GetDataEnumKindContent<TransferArgsArgs, 'V1'>): GetDataEnumKind<TransferArgsArgs, 'V1'>;
export declare function isTransferArgs<K extends TransferArgs['__kind']>(kind: K, value: TransferArgs): value is TransferArgs & {
    __kind: K;
};