const ParentModel = require('../../model/Sales/SalesModel');
const ChildsModel = require('../../model/Sales/SaleProductsModel');
const CreateParentChildService = require('../../services/common/CreateParentChildService');
const ListOneJoinService = require('../../services/common/ListOneJoinService');
const DeleteParentChildsService = require('../../services/common/DeleteParentChildsService');
const mongoose = require('mongoose');

exports.CreateSales= async (req,res)=>{
    let response = await CreateParentChildService(req,ParentModel,ChildsModel,'SaleID');
    res.status(200).json(response);
}

exports.SalesList=async (req, res) => {
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    let JoinStage={$lookup: {from: "customers", localField: "CustomerID", foreignField: "_id", as: "customers"}};
    let SearchArray=[{Note: SearchRgx},{'customers.Name': SearchRgx},{'customers.Address': SearchRgx},{'customers.Phone': SearchRgx},{'customers.Email': SearchRgx}]
    let Result=await ListOneJoinService(req,ParentModel,SearchArray,JoinStage);
    res.status(200).json(Result)
}

exports.SalesDelete=async (req, res) => {
    let response = await DeleteParentChildsService(req,ParentModel,ChildsModel,'SaleID');
    res.status(200).json(response)
}

