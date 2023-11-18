import express, { response } from'express';
import csvParser from 'csv-parser';
import fs from 'fs'
import {body,validationResult} from 'express-validator';
import multer from 'multer';

import Users from '../../schema/Users.js'
import Subject from '../../schema/Subject.js'
import { group } from 'console';

const router=express.Router();
router.use(express.json());

const upload = multer({ dest: 'uploads/' });

// FIXME: remove
// router.post('/add',
// async(req,res)=>{
//     try{
//         const {usertype,grade,section,subject,rollno,name}=req.body;
    
//         if(!([global.teacher,global.student].includes(usertype))){
//             return res.status(400).send({errors: [{msg: "Unsupported usertype "+usertype}]})
//         }
        
//         // Creating a sbuject, if not found
//         const found_subj= await Subject.findOne({
//             grade:grade,
//             name:name
//         })
//         var subj_id;
//         if(!found_subj){
//             const new_subj=new Subject({
//                 grade:grade,
//                 name:subject
//             })
//             await new_subj.save()
//             subj_id=new_subj.id
//         }
//         else{
//             subj_id=found_subj.id
//         }

//         const found_user=await Users.findOne({
//             roll:rollno
//         })

//         if(found_user){
//             // check if already there
//             if(!found_user.subjects.includes([subj_id,section])){
//                 found_user.subjects.push([subj_id,section])
//                 await found_user.save()
//             }
//         }
//         else{
//             const new_user=new Users({
//                 usertype:usertype,
//                 password: "lol",
//                 rollno:rollno,
//                 // email:name+subject+grade,
//                 name:name,
//                 grade:grade,
//                 section:section?.toUpperCase(),
//                 subjects:{subj_id,section},
//             })
    
//             await new_user.save();
//         }
        
//         return res.send();
//     }
//     catch (error) {
//         console.error(error);
//         return res.status(500);
//     }
// }
// )

router.post('/add-file/teacher',upload.single('csvFile'),
async(req,res)=>{
    try{
        const { file } = req;
        var added=0;

        const records = [];

        // Use csv-parser to parse the CSV file
        fs.createReadStream(file.path)
            .pipe(csvParser())
            .on('data', (data) => {
                records.push(data);
                console.log(data);      
            })
            .on('end',async () => {
            
                for(var i=0;i < records.length;i++){
                    // Add/ look for subject
                    var found_subj=await Subject.findOne({
                        name:records[i].subject?.toLowerCase(),
                        grade: records[i].grade
                    });
                    if(!found_subj){
                        const new_subj= new Subject({
                            name:records[i].subject.toLowerCase(),
                            grade:Number(records[i].grade)
                        })
                        await new_subj.save();
                        found_subj=new_subj;
                    }

                    // Add/ look for teacher record
                    const found_teacher=await Users.findOne({
                        usertype: global.teacher,
                        name: records[i].name,
                        subjects:{
                            $elemMatch:{
                                subj_id:found_subj._id,
                                section: records[i].section.toUpperCase()
                            }
                        }
                    });
                    if(found_teacher){
                        continue;
                    }
                    const new_teacher= new Users({
                        usertype: global.teacher,
                        name: records[i].name,
                    })
                    new_teacher.subjects.push({
                        subj_id:found_subj._id,
                        section: records[i].section.toUpperCase()
                    })
                    await new_teacher.save()
                    added++;
                }    
                return res.send({added});  
            }
        );
    }
    catch (error) {
        console.error(error);
        return res.status(500);
    }
}
)

router.post('/add-file/student',upload.single('csvFile'),
async(req,res)=>{
    try{
        const { file } = req;
        var added=0;

        const records = [];

        // Use csv-parser to parse the CSV file
        fs.createReadStream(file.path)
            .pipe(csvParser())
            .on('data', (data) => {
                records.push(data);
                console.log(data);      
            })
            .on('end',async () => {
            
                for(var i=0;i < records.length;i++){
                    
                    // Add/ look for student record
                    const found_student=await Users.findOne({
                        usertype: global.student,
                        name: records[i].name,
                        rollno: Number(records[i].rollno),
                        grade: Number(records[i].grade),
                        section: records[i].section
                    });
                    if(found_student){
                        continue;
                    }
                    const new_student= new Users({
                        usertype: global.student,
                        name: records[i].name,
                        rollno: Number(records[i].rollno),
                        grade: Number(records[i].grade),
                        section: records[i].section
                    })

                    await new_student.save()
                    added++;
                }    
                return res.send({added});  
            }
        );
    }
    catch (error) {
        console.error(error);
        return res.status(500);
    }
}
)

export default router;