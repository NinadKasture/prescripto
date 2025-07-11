import express from 'express';
import { addDoctor, allDoctors, loginAdmin, appointmentsAdmin, appointmentCancel, adminDashboard } from '../controllers/adminController.js'; // Named imports
import upload from '../middlewares/multer.js';
import authAdmin from '../middlewares/authAdmin.js';
import { changeAvailability } from '../controllers/doctorController.js';

const router = express.Router();
router.post('/add-doctor',authAdmin ,upload.single('image'), addDoctor);
router.post('/login', loginAdmin);
router.post('/all-doctors',authAdmin, allDoctors);
router.post('/change-availability',authAdmin, changeAvailability);
router.get('/appointments',authAdmin,appointmentsAdmin);
router.post('/cancel-appointment', authAdmin, appointmentCancel);
router.get('/dashboard',authAdmin,adminDashboard)

export default router;