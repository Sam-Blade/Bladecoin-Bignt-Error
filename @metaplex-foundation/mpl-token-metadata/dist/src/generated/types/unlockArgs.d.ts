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
export type UnlockArgs = {
    __kind: 'V1';
    authorizationData: Option<AuthorizationData>;
};
export type UnlockArgsArgs = {
    __kind: 'V1';
    authorizationData?: OptionOrNullable<AuthorizationDataArgs>;
};
export declare function getUnlockArgsSerializer(): Serializer<UnlockArgsArgs, UnlockArgs>;
export declare function unlockArgs(kind: 'V1', data: GetDataEnumKindContent<UnlockArgsArgs, 'V1'>): GetDataEnumKind<UnlockArgsArgs, 'V1'>;
export declare function isUnlockArgs<K extends UnlockArgs['__kind']>(kind: K, value: UnlockArgs): value is UnlockArgs & {
    __kind: K;
};