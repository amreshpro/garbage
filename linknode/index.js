import express from 'express'
import fs from 'fs'
import skills from './links/skills.js';
import socialLinks from './links/social.js';
import  project,{vscodeThemes,othersContribution,smallProjects} from './links/projects.js'
import * as dotenv from 'dotenv'

// Load Environment variable
dotenv.config()

const app = express();
const port = process.env.PORT|| 6767





app.get('/',(req,res)=>{
 
    res.send({"status":"successfull","api":"api for project and other links management"})
})

// sum
app.get("/sum",(req,res)=>{

 let {counter:num} = req.query



 const sum = (num*(num+1))/2
 console.log(sum)
  res.send({"sum":sum})
 
    })

// skills
app.get("/skills",async(req,res)=>{

console.log(skills)
    res.json(skills)

})


// themes
app.get("/themes",async(req,res)=>{

    console.log(vscodeThemes)
        res.json(vscodeThemes)
    
    })
    


    // socialLinks
    app.get("/links",async(req,res)=>{

        console.log(socialLinks)
            res.json(socialLinks)
        
        })
        


        // big projects
        app.get("/main",async(req,res)=>{

            console.log(project)
                res.json(project)
            
            })
         
            
            // otherContribution
            app.get("/other-projects",async(req,res)=>{

                console.log(othersContribution)
                    res.json(othersContribution)
                
                })

                // small-projects
                app.get("/small-projects",async(req,res)=>{

                    console.log(smallProjects)
                        res.json(smallProjects)
                    
                    })
                    
                





app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`)
 })