import {Router} from 'express'
const router = Router()
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const { data_bases ,list ,object } = new PrismaClient();

router.get('/dbs',async (req, res) => {
    const dbs = await data_bases.findMany({
        select:{
            id: true,
            title:true,
        }
    });
    res.json(dbs)
})

router.get('/lists',async (req, res) => {
    const lists = await list.findMany({
        select:{
            id: true,
            title:true,
            father_id: true

        }
    });
    res.json(lists)
})

router.post('/', async (req, res) => {
    const {title} = req.body;

    const titleExists = await data_bases.findUnique({
        where:{
            title
        },
        select: {
            username: true
        }
    })
    if(titleExists){
        return res.status(400).json({
            msg:'data base already exists'
        })
    }

    const newTitle = await title.create({
        data:{
            title
        }
    })
    res.json(newTitle)
})

export default router