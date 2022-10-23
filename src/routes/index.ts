import { Router } from "express";
 import {getindex} from '../controllers/controller-index'

const router = Router()

router.get('/home', getindex.index)



router.get('/form',getindex.form)
router.post('/form', getindex.getCreate)

export default router
