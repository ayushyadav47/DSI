import express, { response } from'express';
import {body,validationResult} from 'express-validator';
import SubjectInstance from '../../schema/SubjectInstance.js';
import Teacher from '../../schema/Teacher.js';
import ClassInstance from '../../schema/ClassInstance.js';
import StudentClassInstance from '../../schema/StudentClassInstance.js';
import Subj from '../../schema/Subject.js';
import Class from '../../schema/Class.js';
import Student from '../../schema/Student.js';
import Chapter from '../../schema/Chapter.js';
import Topic from '../../schema/Topic.js';

const router=express.Router();
router.use(express.json());

// List of all classes of a curriculum
router.post('/class-list',async(req,res)=>{ 
    try{ 
        const {curriculum} = req.body;
        const result=await Class.find({curriculum:curriculum});

        return res.send({result}); 
    }
    catch (error) {
        console.error(error);
        return res.status(500);
    }
}
)

// List of all subjects of a curriculum
router.post('/subject-list',async(req,res)=>{ 
    try{ 
        const {curriculum} = req.body;
        const result=await Subj.find({
        }).populate('class')
        .then((subjs)=>{
            subjs = subjs.filter(function(subj) {
                return subj.class.curriculum==curriculum;
            })
            return subjs
        }); 
        
        return res.send({result}); 
    }
    catch (error) {
        console.error(error);
        return res.status(500);
    }
}
)

// List of all ClassInst of a curriculum
router.post('/classinst-list',async(req,res)=>{ 
    try{ 
        const {curriculum} = req.body;
        const result=await ClassInstance.find()
        .populate('class')
        .then((results)=>{
            results = results.filter(function(re) {
                return re.class.curriculum==curriculum;
            })
            return results
        }); 
        
        return res.send({result}); 
    }
    catch (error) {
        console.error(error);
        return res.status(500);
    }
}
)

// List of all Chapters
router.post('/classinst-list',async(req,res)=>{ 
    try{ 
        const {curriculum} = req.body;
        const result=await Chapter.find()
        
        return res.send({result}); 
    }
    catch (error) {
        console.error(error);
        return res.status(500);
    }
}
)

// List of all Topics
router.post('/classinst-list',async(req,res)=>{ 
    try{ 
        const {curriculum} = req.body;
        const result=await Topic.find()
        
        return res.send({result}); 
    }
    catch (error) {
        console.error(error);
        return res.status(500);
    }
}
)

export default router;