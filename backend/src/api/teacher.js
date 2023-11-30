import express, { response } from'express';
import {body,validationResult} from 'express-validator';
import SubjectInstance from '../../schema/SubjectInstance.js';
import Teacher from '../../schema/Teacher.js';
import ClassInstance from '../../schema/ClassInstance.js';
import StudentClassInstance from '../../schema/StudentClassInstance.js';
import Subj from '../../schema/Subject.js';
import Class from '../../schema/Class.js';
import Student from '../../schema/Student.js';

const router=express.Router();
router.use(express.json());

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// List of all subjects of a teacher
router.get('/subject-list',async(req,res)=>{ 
    try{ 
        const { teacherID } = req.body;
        console.log(teacherID)

        const teacher= await Teacher.find({teacherID:teacherID});
        if(teacher?.length==0){
            return res.status(400).send({errors: [{msg: "Teacher not found"}]})
        }

        var result=[]
        var subjectinst= await SubjectInstance.find({teacherID: teacherID})
        .populate({
            path:'classinst',
            populate:{
                path:'class'
            }
        })

        for(let i=0; i<subjectinst?.length;i++){
            var subj={}
            subj.class=subjectinst[i].classinst.class.classvalue
            subj.section=subjectinst[i].classinst.section
            subj.year=subjectinst[i].classinst.year
            const students= await StudentClassInstance.find({classinst:subjectinst[i].classinst});
            subj.nstudents=students?.length;

            subj.name=(await Subj.findOne({code:subjectinst[i].subjectcode}).select('name')).name

            result.push(subj)
        }

        return res.send({result}); 
    }
    catch (error) {
        console.error(error);
        return res.status(500);
    }
}
)

// List of all students for a subject: Name, and Scores
router.get('/class-list/subject-student-list',async(req,res)=>{ 
    try{ 
        const { curriculum,teacherID, cls, section, year, subjname } = req.body;
        console.log(teacherID)

        const teacher= await Teacher.find({teacherID:teacherID});
        if(teacher?.length==0){
            return res.status(400).send({errors: [{msg: "Teacher not found"}]})
        }

        if(!(cls && section && year)){
            console.log(req.body)
            return res.status(400).send({errors: [{msg: "Incomplete information"}]})
        }
        // Find ClassInst ans students assigned to it

        const foundclasses=await Class.find({curriculum:curriculum,classvalue: cls})
        if(foundclasses.length==0){
            return res.status(400).send({errors: [{msg: "Class not found"}]})
        }

        const clsinst=await ClassInstance.findOne({class:foundclasses[0]._id,section:section,year:year});

        if(!clsinst){
            return res.status(400).send({errors: [{msg: "ClassInstance not found"}]})
        }

        var result=[]
        var stdclsinst= await StudentClassInstance.find({classinst: clsinst._id})
        if(stdclsinst.length==0){
            return res.status(400).send({errors: [{msg: "StudentClassInstance not found"}]})
        }
        
        for(let i=0; i<stdclsinst?.length;i++){
            var student_info={}
             
            const student=await Student.findOne({rollno:stdclsinst[i].rollno})
            student_info.name=student.firstname+(student.middlename?(student.middlename.length==0?"":" "+student.middlename):"")+" "+student.lastname
            student_info.score=[getRandomInt(10),getRandomInt(10),getRandomInt(10),getRandomInt(10)]
            result.push(student_info)
        }

        return res.send({result}); 
    }
    catch (error) {
        console.error(error);
        return res.status(500);
    }
}
)



export default router;