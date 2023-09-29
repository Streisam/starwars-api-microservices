module.exports = (fn) => (req, res, next) =>
fn(req, res).catch((err) => next(err));



// (fn) => {
//     return function(req, res, next) {
//         fn(req, res).catch((err) => {
//             next(err);
//         });
//     };
// };