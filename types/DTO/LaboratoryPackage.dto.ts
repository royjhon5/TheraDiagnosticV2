export type PackageItemDto = {
    itemId: number;
    itemName: string;
    itemPrice: number;
    itemCategory: string;
};

export type CreatePackageDto = {
    packageName: string;
    packages: PackageItemDto[];
    packagePrice: number;
    validUntil: string;
};

export type getLaboratoryPackageDto = {
    id: number;
    packageName: string;
    packages: PackageItemDto[];
    packagePrice: number;
    validUntil: string;
};

export type UpdatePackageItemDto = {
    itemId: number;
    itemName: string;
    itemPrice: number;
};

export type UpdatePackageDto = {
    id: number;
    packageName: string;
    packages: PackageItemDto[];
    packagePrice: number;
    validUntil: string;
};
