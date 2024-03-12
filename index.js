//tham chieu thu vien
const express=require('express');
const mongoose=require('mongoose');
//const sinhvien=require('./SinhVienModel');
//tao doi tuong server
const app=express();
//xu ly du lieu----------------
//ket noi voi csdl
mongoose.connect('mongodb+srv://Hoanghung200603:hung200603@atlascluster.h4fmiga.mongodb.net/DB1?retryWrites=true&w=majority&appName=AtlasCluster',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("ket noi voi db thanh cong");
}).catch((err)=>{
    console.error("Loi ket noi: "+err);
});
//doc du lieu
const sinhvienSchema=new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    }
});
const sinhvien=mongoose.model('SinhVien',sinhvienSchema);
app.get('/SinhVien', async (req,res)=>{
    try {
        const sinhviens = await sinhvien.find();//doc toan bo du lieu
        res.json(sinhviens);//tra ve json
        console.log(sinhviens);//ghi ra log
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Doc du lieu loi"});
    }
});

//---------------------------------
//-chay app
const PORT=process.env.PORT||5000;//cong du lieu
app.listen(PORT,()=>{
    console.log("server dang chay o cong 5000");
});