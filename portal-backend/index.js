const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion,ObjectId  } = require('mongodb');
const cors = require("cors");
const port = process.env.PORT || 5000;
const jwt = require("jsonwebtoken");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.y0ttl6s.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

function verifyJWT(req, res, next) {
    const authHeader = req.headers.authorization;
  
    if (!authHeader) {
      return res.status(401).send({ message: "unauthorized access" });
    }
    const token = authHeader.split(" ")[1];
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
      if (err) {
        return res.status(403).send({ message: "Forbidden access" });
      }
      req.decoded = decoded;
      next();
    });
  }

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const db = client.db("jobPortal");
    const collection = db.collection("jobPosts");

      // jwt
      app.post("/jwt", (req, res) => {
        const user = req.body;
        const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: "1d",
        });
        res.send({ token });
      });

       // create a document to be inserted
    app.post("/createPost", async (req, res) => {
        const post = req.body;
        const result = await collection.insertOne(post);
        res.send(result);
      });

        // get all posts
    app.get("/posts", verifyJWT, async (req, res) => {
        const cursor = collection.find({});
        const posts = await cursor.toArray();
        res.send(posts);
      });

        // get a single post
    app.get("/post/:id", async (req, res) => {
        const id = req.params.id;
        console.log(id);
        const query = { _id: new ObjectId(id) };
        const post = await collection.findOne(query);
        res.send(post);
      });

      // delete a single post
    app.delete("/deletePost/:id", async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await collection.deleteOne(query);
        res.send(result);
      });

        // update a single post
    app.put("/updatePost/:id", async (req, res) => {
        const id = req.params.id;
        console.log(id);
        const query = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const updateDoc = {
          $set: {
            postName: req.body.postName,
            companyName: req.body.companyName,
            numberOfVacancy: req.body.numberOfVacancy,
            currentDate: req.body.currentDate,
            lastApplyDate: req.body.lastApplyDate,
            jobDescription: req.body.jobDescription,
            jobRequirements: req.body.jobRequirements,
            jobBenefits: req.body.jobBenefits,
            howToApply: req.body.howToApply,
          },
        };
        const result = await collection.updateOne(query, updateDoc, options);
        console.log(result);
        res.send(result);
      });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
    res.send("JobSphere Server Running!");
  });
  
  app.listen(port, () => {
    console.log(`JobSphere Server Running on, http://localhost:${port}`);
  });


// mahamud001846723939
// Q3OgIfFWvrSaYDqO