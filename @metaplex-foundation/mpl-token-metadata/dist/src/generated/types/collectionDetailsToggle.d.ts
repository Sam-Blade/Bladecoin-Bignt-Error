/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { GetDataEnumKind, GetDataEnumKindContent, Serializer } from '@metaplex-foundation/umi/serializers';
import { CollectionDetails, CollectionDetailsArgs } from '.';
export type CollectionDetailsToggle = {
    __kind: 'None';
} | {
    __kind: 'Clear';
} | {
    __kind: 'Set';
    fields: [CollectionDetails];
};
export type CollectionDetailsToggleArgs = {
    __kind: 'None';
} | {
    __kind: 'Clear';
} | {
    __kind: 'Set';
    fields: [CollectionDetailsArgs];
};
export declare function getCollectionDetailsToggleSerializer(): Serializer<CollectionDetailsToggleArgs, CollectionDetailsToggle>;
export declare function collectionDetailsToggle(kind: 'None'): GetDataEnumKind<CollectionDetailsToggleArgs, 'None'>;
export declare function collectionDetailsToggle(kind: 'Clear'): GetDataEnumKind<CollectionDetailsToggleArgs, 'Clear'>;
export declare function collectionDetailsToggle(kind: 'Set', data: GetDataEnumKindContent<CollectionDetailsToggleArgs, 'Set'>['fields']): GetDataEnumKind<CollectionDetailsToggleArgs, 'Set'>;
export declare function isCollectionDetailsToggle<K extends CollectionDetailsToggle['__kind']>(kind: K, value: CollectionDetailsToggle): value is CollectionDetailsToggle & {
    __kind: K;
};