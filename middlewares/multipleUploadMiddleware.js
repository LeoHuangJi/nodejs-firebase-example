const util = require("util");
const path = require("path");
const multer = require("multer");
const { message, responseCode } = require("../common/message");
const responseData = require("../common/responseData");

let storage = multer.diskStorage({
    // Định nghĩa nơi file upload sẽ được lưu lại
    destination: (req, file, callback) => {

        callback(null, path.join(__dirname, '..', 'uploads'));


    },
    limits: {
        fileSize: 1000000 // 1000000 Bytes = 1 MB
    },
    filename: (req, file, callback) => {
        let fileName = path.parse(file.originalname).name;
        let ext = path.parse(file.originalname).ext;

        let filename = `${fileName}-${Date.now()}${ext}`;
        callback(null, filename);
    }

});
const multerFilter = (req, file, callback) => {
    var ext = path.extname(file.originalname);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg' && ext !== '.zip') {
        // To reject this file pass `false`, like so:
        return callback(null, false, new Error('goes wrong on the mimetype'));

    }
    // To accept the file pass `true`, like so:

    callback(null, true);
};

const upload = multer({
    storage: storage,
    fileFilter: multerFilter,
})


// // Khởi tạo middleware uploadManyFiles với cấu hình như ở trên,
// let uploadManyFiles = multer({ storage: storage }).array("many-files", 17);

// // Mục đích của util.promisify() là để bên controller có thể dùng async-await để gọi tới middleware này
// let multipleUploadMiddleware = util.promisify(uploadManyFiles);

module.exports = upload.array("files");