// export  const getAll = (req,res) => {
//     const dbs = await user.findMany({
//         select:{
//             id: true,
//             username:true,
//             posts:true
//         }
//     });
//     res.status(200).json(dbs)
// }
//
// export const create = (req,res) => {
//     const newServer = {
//         id: Date.now().toString(),
//         ...req.body
//     }
//     dbs.push(newServer)
//     res.status(201).json(newServer)
// }

// export const remove =(req,res) =>{
//     servers = servers.filter(s => s.id !== req.params.id)
//     res.json({messege : 'server ${req.params.id} has benn removed '})
// }