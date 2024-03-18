/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Serializer } from '@metaplex-foundation/umi/serializers';
export declare enum MetadataDelegateRole {
    AuthorityItem = 0,
    Collection = 1,
    Use = 2,
    Data = 3,
    ProgrammableConfig = 4,
    DataItem = 5,
    CollectionItem = 6,
    ProgrammableConfigItem = 7
}
export type MetadataDelegateRoleArgs = MetadataDelegateRole;
export declare function getMetadataDelegateRoleSerializer(): Serializer<MetadataDelegateRoleArgs, MetadataDelegateRole>;
