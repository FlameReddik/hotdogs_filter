// item example
// {
//   name: 'Name',
//   description: 'Description',
//   expirationDate: '01-30-1999'
// }

const filterByExpiration = (items) => {

    const now = new Date();

    return items.filter(item => {
        return new Date(item.expirationDate) > now;
    });
};
