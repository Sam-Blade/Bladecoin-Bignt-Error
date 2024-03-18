/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { GetDataEnumKind, GetDataEnumKindContent, Serializer } from '@metaplex-foundation/umi/serializers';
export type PrintSupply = {
    __kind: 'Zero';
} | {
    __kind: 'Limited';
    fields: [bigint];
} | {
    __kind: 'Unlimited';
};
export type PrintSupplyArgs = {
    __kind: 'Zero';
} | {
    __kind: 'Limited';
    fields: [number | bigint];
} | {
    __kind: 'Unlimited';
};
export declare function getPrintSupplySerializer(): Serializer<PrintSupplyArgs, PrintSupply>;
export declare function printSupply(kind: 'Zero'): GetDataEnumKind<PrintSupplyArgs, 'Zero'>;
export declare function printSupply(kind: 'Limited', data: GetDataEnumKindContent<PrintSupplyArgs, 'Limited'>['fields']): GetDataEnumKind<PrintSupplyArgs, 'Limited'>;
export declare function printSupply(kind: 'Unlimited'): GetDataEnumKind<PrintSupplyArgs, 'Unlimited'>;
export declare function isPrintSupply<K extends PrintSupply['__kind']>(kind: K, value: PrintSupply): value is PrintSupply & {
    __kind: K;
};