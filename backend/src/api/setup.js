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
import Cls from '../../schema/Class.js'
import Subj from '../../schema/Subject.js';
import Chapter from '../../schema/Chapter.js';
import Topic from '../../schema/Topic.js';

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

// Add Class
router.post('/upload-file/class',upload.single('jsonFile'),
async(req,res)=>{ 
    try{
        const { file } = req;
        var added=0;

        // Read and parse the JSON file
        var filedata = fs.readFileSync(file.path, "utf8"); 
        const jsonData = JSON.parse(filedata);
        console.log()

        var cls,found
        for(var i=0;i<jsonData.length;i++){
            found=await Cls.find({classvalue:jsonData[i].classvalue,curriculum:jsonData[i].curriculum});
            if(found.length){
                console.log("found:",found[0])
                continue
            }
            cls=new Cls({
                classvalue: jsonData[i].classvalue,
                curriculum: jsonData[i].curriculum,
            })

            await cls.save();
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

// Add Subjects
router.post('/upload-file/subjects',upload.single('jsonFile'),
async(req,res)=>{ 
    try{
        const { file } = req;
        var added=0;

        // Read and parse the JSON file
        var filedata = fs.readFileSync(file.path, "utf8"); 
        const jsonData = JSON.parse(filedata);
        console.log()

        var subject,foundclasses,foundsubj,clsid
        for(var i=0;i<jsonData.length;i++){
            foundclasses=await Cls.find({curriculum:jsonData[i].curriculum,classvalue: jsonData[i].classvalue})
            if(foundclasses.length==0){
                console.log("creating class:",jsonData[i].classvalue,jsonData[i].curriculum)
                newclass=new Cls({
                    classvalue: jsonData[i].classvalue,
                    curriculum: jsonData[i].curriculum,
                })
                await newclass.save()
                clsid=newclass._id
            }
            else{
                clsid=foundclasses[0]._id
            }
            foundsubj=await Subj.find({class:clsid,code:jsonData[i].code});
            if(foundsubj.length){
                console.log("found:",foundsubj[0])
                continue
            }
            subject=new Subj({
                class:clsid,
                code:jsonData[i].code,
                name:jsonData[i].name,
            })

            await subject.save();
            added++;
            // console.log(subject);
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

// Add Chapters
router.post('/upload-file/chapters',upload.single('jsonFile'),
async(req,res)=>{ 
    try{
        const { file } = req;
        var added=0;

        // Read and parse the JSON file
        var filedata = fs.readFileSync(file.path, "utf8"); 
        const jsonData = JSON.parse(filedata);

        var chap,foundsubj
        for(var i=0;i<jsonData.length;i++){
            foundsubj=await Subj.find({code:jsonData[i].subjcode})
            if(foundsubj.length==0){
                // return res.status(400).send({errors: [{msg: "Subject not found"}]})
                continue;
            }
            chap= await Chapter.find({subjcode: jsonData[i].subjcode,chno: jsonData[i].chno})
            if(chap.length){
                // return res.status(400).send({errors: [{msg: "Subject not found"}]})
                continue;
            }
            chap=new Chapter({
                subjcode: jsonData[i].subjcode,
                chno: jsonData[i].chno,
                name: jsonData[i].name
            })

            await chap.save();
            added++;
            // console.log(subject);
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

// Add Topics
router.post('/upload-file/topics',upload.single('jsonFile'),
async(req,res)=>{ 
    try{
        const { file } = req;
        var added=0;

        // Read and parse the JSON file
        var filedata = fs.readFileSync(file.path, "utf8"); 
        const jsonData = JSON.parse(filedata);

        var topic,foundchap
        for(var i=0;i<jsonData.length;i++){
            foundchap=await Chapter.find({subjcode:jsonData[i].subjcode,chno:jsonData[i].chno})
            if(foundchap.length==0){
                // return res.status(400).send({errors: [{msg: "Subject not found"}]})
                continue;
            }
            topic= await Topic.find({chapter: foundchap[0]._id,topicno: jsonData[i].topicno})
            if(topic.length){
                // return res.status(400).send({errors: [{msg: "Subject not found"}]})
                continue;
            }
            topic=new Topic({
                chapter: foundchap[0]._id,
                topicno: jsonData[i].topicno,
                name: jsonData[i].name
            })

            await topic.save();
            added++;
            // console.log(subject);
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