import express from 'express'
import { regGet, regPost } from '../components/authComponents.js'
import { logPost } from '../components/loginComponents.js'
import { resetPost } from '../components/resetComponents.js'
import { deletePost } from '../components/deleteComponents.js'
import { googleSignIn } from '../components/googleauthComponents.js'

const router = express.Router()

router.route('/register')
.get(regGet)
.post(regPost)

router.route('/login')
.post(logPost)

router.route('/reset')
.post(resetPost)

router.route('/delete')
.post(deletePost)

router.route('/google')
.post(googleSignIn)

export default router