export const background: Array<BackgroundObject> = [
    {
        id: 1,
        title: 'WORLD NEWS',
        subtitle: 'Amazing places in America to visit.',
        paragraph:
            'For some reason — this country, this city, this neighborhood, this particular street — is the place you are living a majority of your life in.',
    },
];

console.log(background);

interface BackgroundObject {
    id: number;
    title: string;
    subtitle: string;
    paragraph: string;
}
