// exports.config = {
//     development: {
//         //url to be used in link generation
//         url: 'http://localhost:3000',
//         //mongodb connection settings
//         database: {
//             server: 'LAPTOP-51JRGRIP\SQLEXPRESS',
//             database: 'Macher',
//             user: 'sa',
//             password: 'ramot27',
//             port: 1433
//         },
//         //server details
//         server: {
//             host: '127.0.0.1',
//             port: '3422'
//         }
//     },
//     production: {
//         //url to be used in link generation
//         url: 'http://my.site.com',
//         //mongodb connection settings
//         database: {
//             server: 'LAPTOP-51JRGRIP\SQLEXPRESS',
//             database: 'Macher',
//             user: 'sa',
//             password: 'ramot27',
//             port: 1433
//         },
//         //server details
//         server: {
//             host: '127.0.0.1',
//             port: '3421'
//         }
//     }
// };
exports.database = {
    // server: '184.94.218.178',
    // database: 'Macher',
    // user: 'sa',
    // password: 'j4234NBerH98233432',
    // port: 1433

    server: '162.246.19.134',
    database: 'Macher',
    user: 'sa',
    password: 'ramot27',
    port: 1433
}

exports.authentication = {
    jwtSecret: '23E120231283D9A1E7264B6F00303C702304969D40F92EDEFE0B355EB1FD2A1D'
}