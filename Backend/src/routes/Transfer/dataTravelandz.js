const express = require("express");
const getServices = require("../../controllers/services/getService");
const getSearch = require("../../controllers/search/search");
const getVehicle = require("../../controllers/vehicles/vehicles");
const getCategories = require("../../controllers/categories/categories");
const getTransferType = require("../../controllers/transfer/trypetransfer")
const router = express.Router();

router.get("/services", async(req,res)=>{
try {
    const getS= await getServices();
res.status(200).send(getS)
} catch (error) {
    res.status(404).send("not found");
}
});
router.get("/services/:id", async(req,res)=>{
    const { id } = req.params
    try {
        const getS= await getServices();
        // const filterId= getS.filter(obj => obj.id === id);
        const filterId= getS[id]
        

    res.status(200).send(filterId)
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

router.get("/vehicles", async(req,res)=>{
    try {
        const getVehicleInfo= await getVehicle();
    res.status(200).send(getVehicleInfo)
    } catch (error) {
        res.status(404).send("not found");
    }
})
router.get("/categories", async(req,res)=>{
    try {
        const getCategoriesInfo= await getCategories();
    res.status(200).send(getCategoriesInfo)
    } catch (error) {
        res.status(404).send("not found");
    }
})
router.get("/transfer", async(req,res)=>{
    try {
        const getCategoriesInfo= await getTransferType();
    res.status(200).send(getCategoriesInfo)
    } catch (error) {
        res.status(404).send("not found");
    }
})


module.exports = router;