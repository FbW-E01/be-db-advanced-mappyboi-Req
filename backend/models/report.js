import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
    position: String,
    description: String
});

const Report = mongoose.model("reports", reportSchema);
export default Report;