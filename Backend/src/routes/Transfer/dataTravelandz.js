const express = require("express");
const getServices = require("../../controllers/services/getService");
const getSearch = require("../../controllers/search/search");
const router = express.Router();

router.get("/services", async(req,res)=>{
try {
    const getS= await getServices();
res.status(200).send(getS)
} catch (error) {
    res.status(404).send("not found");
}
});
router.get("/search", async(req,res)=>{
    try {
        const getSearchT= await getSearch();
    res.status(200).send(getSearchT)
    } catch (error) {
        res.status(404).send("not found");
    }
})
module.exports = router;