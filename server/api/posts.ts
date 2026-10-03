export default defineEventHandler(async (event) => {
    // ... Do whatever you want here
    let data = [
        'Lorem Ipsum',
        'Hello world!',
        'New York!',
    ];
    return {
        items: data,
        total: data.length,
    }
})
