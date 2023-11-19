import express, { response } from'express';
import csvParser from 'csv-parser';
import fs from 'fs'
import {body,validationResult} from 'express-validator';
import multer from 'multer';

import Administrator from '../../schema/Administrator.js';
import School from '../../schema/School.js';
import Teacher from '../../schema/Teacher.js';
import Student from '../../schema/Student.js';
import SchoolAdmin from '../../schema/SchoolAdmin.js';

const router=express.Router();
router.use(express.json());

const upload = multer({ dest: 'uploads/' });

/* General format
router.post('/upload-file/administrator',upload.single('jsonFile'),
async(req,res)=>{ 
    try{
        const { file } = req;
        var added=0;

        // Read and parse the JSON file
        var filedata = fs.readFileSync(file.path, "utf8"); 
        const jsonData = JSON.parse(filedata);
        added=jsonData.length

        console.log(jsonData)
        for(var i=0;i<jsonData.length;i++){

        }

        return res.send({added}); 
    }
    catch (error) {
        console.error(error);
        return res.status(500);
    }
}
)


*/

// Add Administrator
router.post('/upload-file/administrator',upload.single('jsonFile'),
async(req,res)=>{ 
    try{
        const { file } = req;
        var added=0;

        // Read and parse the JSON file
        var filedata = fs.readFileSync(file.path, "utf8"); 
        const jsonData = JSON.parse(filedata);

        var admin,found
        for(var i=0;i<jsonData.length;i++){
            found=await Administrator.find({adminID:jsonData[i].adminid});
            if(found.length){
                console.log("found:",found[0])
                continue
            }
            admin=new Administrator({
                adminID: jsonData[i].adminid,
                firstname: jsonData[i].firstname,
                middlename: jsonData[i].middlename,
                lastname: jsonData[i].lastname,
                email: jsonData[i].email
            })

            await admin.save();
            added++;
        }

        console.log("added:",added)
        return res.send({added}); 
    }
    catch (error) {
        console.error(error);
        return res.status(500);
    }
}
)

// Add Schools
router.post('/upload-file/school',upload.single('jsonFile'),
async(req,res)=>{ 
    try{
        const { file } = req;
        var added=0;

        // Read and parse the JSON file
        var filedata = fs.readFileSync(file.path, "utf8"); 
        const jsonData = JSON.parse(filedata);
        console.log()

        var school,found
        for(var i=0;i<jsonData.length;i++){
            found=await School.find({schoolID:jsonData[i].schoolID});
            if(found.length){
                console.log("found:",found[0])
                continue
            }
            school=new School({
                schoolID: jsonData[i].schoolID,
                name: jsonData[i].name,
                address: jsonData[i].address,
                email: jsonData[i].email,
                adminID: jsonData[i].adminID,
            })

            await school.save();
            added++;
        }

        console.log("added:",added)
        return res.send({added}); 
    }
    catch (error) {
        console.error(error);
        return res.status(500);
    }
}
)

// Add Teachers
router.post('/upload-file/teacher',upload.single('jsonFile'),
async(req,res)=>{ 
    try{
        const { file } = req;
        var added=0;

        // Read and parse the JSON file
        var filedata = fs.readFileSync(file.path, "utf8"); 
        const jsonData = JSON.parse(filedata);
        console.log()

        var teacher,found
        for(var i=0;i<jsonData.length;i++){
            found=await Teacher.find({teacherID:jsonData[i].teacherID});
            if(found.length){
                console.log("found:",found[0])
                continue
            }
            teacher=new Teacher({
                teacherID: jsonData[i].teacherID,
                firstname: jsonData[i].firstname,
                middlename: jsonData[i].middlename,
                lastname: jsonData[i].lastname,
                email: jsonData[i].email,
                phoneno: jsonData[i].phoneno?jsonData[i].phoneno:null,
                schoolID: jsonData[i].schoolID
            })

            await teacher.save();
            added++;
        }

        console.log("added:",added)
        return res.send({added}); 
    }
    catch (error) {
        console.error(error);
        return res.status(500);
    }
}
)

// Add Students
router.post('/upload-file/student',upload.single('jsonFile'),
async(req,res)=>{ 
    try{
        const { file } = req;
        var added=0;

        // Read and parse the JSON file
        var filedata = fs.readFileSync(file.path, "utf8"); 
        const jsonData = JSON.parse(filedata);
        console.log()

        var student,found
        for(var i=0;i<jsonData.length;i++){
            found=await Student.find({rollno:jsonData[i].rollno});
            if(found.length){
                console.log("found:",found[0])
                continue
            }
            student=new Student({
                rollno: jsonData[i].rollno,
                firstname: jsonData[i].firstname,
                middlename: jsonData[i].middlename,
                lastname: jsonData[i].lastname,
                DOB:Date(jsonData[i].DOB),
                schoolID: jsonData[i].schoolID
            })

            await student.save();
            added++;
        }

        console.log("added:",added)
        return res.send({added}); 
    }
    catch (error) {
        console.error(error);
        return res.status(500);
    }
}
)

// Add School Admin
router.post('/upload-file/schooladmin',upload.single('jsonFile'),
async(req,res)=>{ 
    try{
        const { file } = req;
        var added=0;

        // Read and parse the JSON file
        var filedata = fs.readFileSync(file.path, "utf8"); 
        const jsonData = JSON.parse(filedata);
        console.log()

        var schooladmin,found
        for(var i=0;i<jsonData.length;i++){
            found=await SchoolAdmin.find({schooladminID:jsonData[i].schooladminID});
            if(found.length){
                console.log("found:",found[0])
                continue
            }
            schooladmin=new SchoolAdmin({
                schooladminID: jsonData[i].schooladminID,
                firstname: jsonData[i].firstname,
                middlename: jsonData[i].middlename?jsonData[i].phoneno:null,
                lastname: jsonData[i].lastname?jsonData[i].phoneno:null,
                email: jsonData[i].email,
                phoneno: jsonData[i].phoneno?jsonData[i].phoneno:null,
                schoolID: jsonData[i].schoolID
            })

            await schooladmin.save();
            added++;
        }

        console.log("added:",added)
        return res.send({added}); 
    }
    catch (error) {
        console.error(error);
        return res.status(500);
    }
}
)

export default router;