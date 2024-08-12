export const barcodeTypes = [
    {
        name: 'CODE128',
        types: [
            { name: 'CODE128', value: 'CODE128', initData: 'ABC-abc-1234' },
            { name: 'CODE128 A', value: 'CODE128A', initData: 'ABC123' },
            { name: 'CODE128 B', value: 'CODE128B', initData: 'Hello World!' },
            { name: 'CODE128 C', value: 'CODE128C', initData: '123456' },
        ],
    },
    {
        name: 'EAN',
        types: [
            { name: 'EAN-13', value: 'EAN13', initData: '5901234123457' },
            { name: 'EAN-8', value: 'EAN8', initData: '96385074' },
            { name: 'EAN-5', value: 'EAN5', initData: '54495' },
            { name: 'EAN-2', value: 'EAN2', initData: '53' },
            { name: 'UPC (A)', value: 'UPC', initData: '123456789012' },
            { name: 'UPC (E)', value: 'UPC-E', initData: '01234565' },
        ],
    },
    {
        name: 'CODE39',
        types: [
            { name: 'CODE39', value: 'CODE39', initData: 'CODE 39' },
        ],
    },
    {
        name: 'ITF',
        types: [
            { name: 'ITF', value: 'ITF', initData: '1234567890' },
            { name: 'ITF-14', value: 'ITF14', initData: '15400141288763' },
        ],
    },
    {
        name: 'MSI',
        types: [
            { name: 'MSI10', value: 'MSI10', initData: '1234567' },
            { name: 'MSI11', value: 'MSI11', initData: '1234567' },
            { name: 'MSI1010', value: 'MSI1010', initData: '1234567' },
            { name: 'MSI1110', value: 'MSI1110', initData: '1234567' },
        ],
    },
    {
        name: 'PHARMACODE',
        types: [
            { name: 'Pharmacode', value: 'PHARMACODE', initData: '1234' },
        ],
    },
    {
        name: 'CODABAR',
        types: [
            { name: 'Codabar', value: 'CODABAR', initData: 'A1234B' },
        ],
    },
];

export function findBarcodeCategory(value: string): string | undefined {
    for (const category of barcodeTypes) {
        const matchingType = category.types.find(type => type.value.toUpperCase() === value.toUpperCase());
        if (matchingType) {
            return category.name;
        }
    }
    return undefined;
}