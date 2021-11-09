const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./db/index");
const PORT = 4000;

const app = express();


app.use(morgan(`dev`));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/review",async(req,res)=>{
    const selectQuery = `
    SELECT id,
           title,
           content,
           createdAt
      FROM userReview
     ORDER BY createdAt ASC
    `;
    try{
    db.query(selectQuery, async(error,result)=>{
        return res.status(200).json(result);
    });
} catch(error){
    console.error(error);
    console.log(data);
}

app.post("/review/create", async(req,res,next)=>{
  console.log(req.body.value);

  const createQuery = `
  INSERT INTO userReview(
      title
      content,
      createdAt
  )   VALUES(
      "${req.body.title}",
      "${req.body.value}",
      now()
  )
  `;
  try{
      db.query(createQuery,(error,result)=>{
          if(!error){
              return res.status(201).json({result:true});
          }
      })
  } catch(error){
      console.error(error);
      return res.status(401).json({result:false});
  }
})
});
app.listen(PORT, () => {
  console.log(`${PORT} server start!`);
});