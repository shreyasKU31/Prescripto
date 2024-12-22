import doctorModel from "../models/doctorModel.js";

const changeAvailability = async () => {
  try {
    const { docId } = req.body;

    const docData = await doctorModel.findById(docId);
    await doctorModel.findByIdAndUpdate(docId, {
      available: !docData.available,
    });
    res.json({ success: true, message: "Availablity Changed" });
  } catch (error) {
    console.log(error); // Log the error to the console
    res.json({ success: false, message: error.message }); // Send an error response
  }
};

export { changeAvailability };
