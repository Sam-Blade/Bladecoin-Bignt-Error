/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Serializer } from '@metaplex-foundation/umi/serializers';
export declare enum PayloadKey {
    Amount = 0,
    Authority = 1,
    AuthoritySeeds = 2,
    Delegate = 3,
    DelegateSeeds = 4,
    Destination = 5,
    DestinationSeeds = 6,
    Holder = 7,
    Source = 8,
    SourceSeeds = 9
}
export type PayloadKeyArgs = PayloadKey;
export declare function getPayloadKeySerializer(): Serializer<PayloadKeyArgs, PayloadKey>;
